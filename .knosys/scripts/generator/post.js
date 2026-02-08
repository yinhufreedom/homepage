const { join: joinPath } = require('path');
const { existsSync } = require('fs');

const { cp, resolveRootPath, getImageFileNames, readDirDeeply, ensureDirExists, readEntity, saveData } = require('../helper');

function getIdFromDate(date = new Date) {
  return (typeof date === 'string' ? new Date(date) : date).getTime().toString(36);
}

function generatePosts(dsDir) {
  const localRootPath = resolveRootPath();

  const sourceDirPath = joinPath(localRootPath, dsDir, 'posts');

  if (!existsSync(sourceDirPath)) {
    return console.log(`[ERROR] \`${dsDir}\` is not a valid directory`);
  }

  const distDirPath = joinPath(localRootPath, 'src/content/posts');
  const imageDistDirPath = joinPath(localRootPath, 'public/images');

  ensureDirExists(distDirPath, true);
  ensureDirExists(imageDistDirPath, true);

  readDirDeeply(sourceDirPath, ['year', 'month', 'day'], {}, (_, { year, month, day }) => {
    const entityDirPath = joinPath(sourceDirPath, year, month, day);
    const { title, date = `${year}-${month}-${day} 00:00:00 +0800`, ...others } = readEntity(entityDirPath);

    if (!title) {
      return;
    }

    let resolvedContent = others.content || '';
    let resolvedBanner = '';
    let resolvedCover = '';

    const postId = others.id || getIdFromDate(date);

    if (resolvedContent) {
      const entityImageDirPath = joinPath(imageDistDirPath, `post-${postId}`);
      ensureDirExists(entityImageDirPath, true);

      getImageFileNames(entityDirPath).forEach(baseName => {
        cp(joinPath(entityDirPath, baseName), joinPath(entityImageDirPath, baseName));

        const imageRef = `/images/post-${postId}/${baseName}`;

        if (baseName.startsWith('banner')) {
          resolvedBanner = imageRef;
        } else if (baseName.startsWith('cover')) {
          resolvedCover = imageRef;
        }

        resolvedContent = resolvedContent
          .replace(new RegExp(`\\(${baseName}\\)`, 'g'), `(${imageRef})`)
          .replace(new RegExp(`src=["']${baseName}["']`, 'g'), `src="${imageRef}"`);
      });
    }

    saveData(joinPath(distDirPath, `${postId}.md`), `---
title: ${title}
description: ${others.description || ''}
date: ${date}
banner: ${resolvedBanner || resolvedCover}
---

${resolvedContent}
`);
  });
}

module.exports = { generatePosts };
