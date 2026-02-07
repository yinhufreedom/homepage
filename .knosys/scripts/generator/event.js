const { join: joinPath } = require('path');
const { existsSync } = require('fs');

const { resolveRootPath, readDirDeeply, ensureDirExists, readData, saveData } = require('../helper');

function generateEvents(dsDir) {
  const localRootPath = resolveRootPath();

  const sourceDirPath = joinPath(localRootPath, dsDir, 'events');

  if (!existsSync(sourceDirPath)) {
    return console.log(`[ERROR] \`${dsDir}\` is not a valid directory`);
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
}

module.exports = { generateEvents };
