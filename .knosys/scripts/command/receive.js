const { join: joinPath } = require('path');

const { receivePackage } = require('@larknosys/sdk');

const { resolvePathFromRootRelative, ensureDirExists } = require('../helper');
const { generateEvent, generatePosts, getImagePathPart } = require('../generator');

module.exports = {
  execute: dataSourceRootDir => {
    const distDirPath = resolvePathFromRootRelative('src/content');
    const imageDistDirPath = resolvePathFromRootRelative(joinPath('public', getImagePathPart()));

    ensureDirExists(imageDistDirPath, true);

    ['events', 'posts'].forEach(collection => {
      ensureDirExists(joinPath(distDirPath, collection), true);
    });

    receivePackage(dataSourceRootDir, {
      readOne: (sender, paths, params) => {
        const args = [sender, paths, params];

        if (params.collection === 'events') {
          generateEvent(...args, joinPath(distDirPath, 'events'));
        } else if (params.collection === 'posts') {
          generatePosts(...args, joinPath(distDirPath, 'posts'), imageDistDirPath);
        }
      },
    })
  },
};
