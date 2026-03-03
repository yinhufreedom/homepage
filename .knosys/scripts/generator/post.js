const { join: joinPath } = require('path');

const { cp, getImageFileNames, readDirDeeply, ensureDirExists, readEntity, saveData } = require('../helper');

function getIdFromDate(date = new Date) {
  return (typeof date === 'string' ? new Date(date) : date).getTime().toString(36);
}

function getImagePathPart() {
  return 'images/collection/posts';
}

function extractImageReferences(content) {
  const imageReferences = new Set();

  // Extract images using different patterns
  const patterns = [
    // Markdown images: ![alt](image.jpg)
    { regex: /!\[.*?\]\(([^)]+)\)/g, group: 1 },
    // HTML images: <img src="image.jpg">
    { regex: /<img[^>]+src=["']([^"']+)["']/g, group: 1 }
  ];

  patterns.forEach(({ regex, group }) => {
    let match;
    while ((match = regex.exec(content)) !== null) {
      const imagePath = match[group];
      const baseName = imagePath.split('/').pop();
      imageReferences.add(baseName);
    }
  });

  return imageReferences;
}

function generatePosts(_, { recordFullPath }, params, collectionDirPath, imageDistDirPath) {
  const imagePathPart = getImagePathPart();

  readDirDeeply(recordFullPath, ['month', 'day'], {}, (_, { month, day }) => {
    const entityDirPath = joinPath(recordFullPath, month, day);
    const { title, date = `${params.id}-${month}-${day} 00:00:00 +0800`, ...others } = readEntity(entityDirPath);

    if (!title) {
      return;
    }

    let resolvedContent = others.content || '';
    let resolvedBanner = '';
    let resolvedCover = '';
    let resolvedPoster = '';

    const postId = others.id || getIdFromDate(date);

    if (resolvedContent) {
      const imageReferences = extractImageReferences(resolvedContent);
      const entityImageDirPath = joinPath(imageDistDirPath, postId);

      ensureDirExists(entityImageDirPath, true);

      getImageFileNames(entityDirPath).forEach(baseName => {
        const bannerFound = baseName.startsWith('banner');
        const coverFound = baseName.startsWith('cover');
        const posterFound = baseName.startsWith('poster');

        if (!bannerFound && !coverFound && !posterFound && !imageReferences.has(baseName)) {
          return;
        }

        cp(joinPath(entityDirPath, baseName), joinPath(entityImageDirPath, baseName));

        const imageRef = `/${imagePathPart}/${postId}/${baseName}`;

        if (bannerFound) {
          resolvedBanner = imageRef;
        } else if (coverFound) {
          resolvedCover = imageRef;
        } else if (posterFound) {
          resolvedPoster = imageRef;
        }

        resolvedContent = resolvedContent
          .replace(new RegExp(`\\(${baseName}\\)`, 'g'), `(${imageRef})`)
          .replace(new RegExp(`src=["']${baseName}["']`, 'g'), `src="${imageRef}"`);
      });
    }

    saveData(joinPath(collectionDirPath, `${postId}.md`), `---
title: ${title}
description: ${others.description || ''}
date: ${date}
banner: ${resolvedBanner || resolvedCover || resolvedPoster}
---

${resolvedContent}
`);
  });
}

module.exports = { getImagePathPart, generatePosts };
