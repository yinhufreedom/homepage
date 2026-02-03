const { join: joinPath } = require('path');
const { existsSync } = require('fs');

const { resolveRootPath, readDirDeeply, ensureDirExists, readData, saveData } = require('../helper');

const MAX_HISTORICAL_EVENT_COUNT = 30;

const localRootPath = resolveRootPath();

function saveKnosysConstants(knosysData) {
  const knosysConstantsPath = joinPath(localRootPath, 'src/shared/constants/knosys.ts');

  saveData(knosysConstantsPath, `// 该文件由 KnoSys 生成，请勿手动更改或删除。\n\nexport const KNOSYS_GEN_DATA = ${JSON.stringify(knosysData, null, 2)};\n`);
}

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

    let validEventCount = 0;
    let historicalEventCount = 0;

    const currentTime = Date.now();

    readDirDeeply(sourceDirPath, ['eventId'], {}, eventId => {
      const { organization, cancelled, ...others } = readData(joinPath(sourceDirPath, eventId, 'basic.yml'));

      if (cancelled || !organization.includes('银湖创联')) {
        return;
      }

      validEventCount++;

      if (others.timeRange[1] <= currentTime) {
        if (historicalEventCount >= MAX_HISTORICAL_EVENT_COUNT) {
          return;
        }

        historicalEventCount++;
      }

      saveData(joinPath(distDirPath, `${eventId}.yml`), others);
    });

    saveKnosysConstants({
      eventCount: validEventCount,
    });
  },
};
