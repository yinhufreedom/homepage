const { join: joinPath } = require('path');
const { existsSync } = require('fs');

const { resolveRootPath, readDirDeeply, ensureDirExists, readEntity, readData, saveData } = require('../helper');

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

  ensureDirExists(distDirPath, true);

  readDirDeeply(sourceDirPath, ['year', 'month', 'day'], {}, (_, { year, month, day }) => {
    const { title, description, date = `${year}-${month}-${day} 00:00:00 +0800`, content } = readEntity(joinPath(sourceDirPath, year, month, day));

    if (!title) {
      return;
    }

    const postId = getIdFromDate(date);

    saveData(joinPath(distDirPath, `${postId}.md`), `---
title: ${title}
description: ${description}
date: ${date}
---

${content}
`);
  });
}

module.exports = { generatePosts };
