const { join: joinPath } = require('path');

const { readEntity, saveData } = require('../helper');

function generateEvent(_, { recordFullPath }, params, collectionDirPath) {
  const { organization, cancelled, ...others } = readEntity(recordFullPath);

  if (cancelled || !organization.includes('银湖创联')) {
    return;
  }

  saveData(joinPath(collectionDirPath, `${params.id}.yml`), others);
}

module.exports = { generateEvent };
