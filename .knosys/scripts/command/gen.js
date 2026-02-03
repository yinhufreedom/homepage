const { join: joinPath } = require('path');
const { existsSync } = require('fs');

const { resolveRootPath, readDirDeeply, ensureDirExists, readData, saveData } = require('../helper');

const localRootPath = resolveRootPath();

module.exports = {
  execute: () => {
    if (!process.env.KNOSYS_DS_DIR) {
      return console.log('[ERROR] `KNOSYS_DS_DIR` is not set');
    }

    const sourceDirPath = joinPath(localRootPath, process.env.KNOSYS_DS_DIR, 'events');

    if (!existsSync(sourceDirPath)) {
      return console.log(`[ERROR] \`${process.env.KNOSYS_DS_DIR}\` is not a valid directory`);
    }

    const distDirPath = joinPath(localRootPath, 'src/content/events');

    ensureDirExists(distDirPath, true);

    readDirDeeply(sourceDirPath, ['eventId'], {}, eventId => {
      const { organization, cancelled, ...others } = readData(joinPath(sourceDirPath, eventId, 'basic.yml'));

      if (cancelled || !organization.includes('银湖创联')) {
        return;
      }

      saveData(joinPath(distDirPath, `${eventId}.yml`), others);
    });
  },
};
