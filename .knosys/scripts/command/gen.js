const { generateEvents, generatePosts } = require('../generator');

const generators = {
  event: generateEvents,
  post: generatePosts,
};

function generateFiles(moduleName) {
  if (!process.env.KNOSYS_DS_DIR) {
    return console.log('[ERROR] `KNOSYS_DS_DIR` is not set');
  }

  if (!moduleName) {
    return Object.keys(generators).forEach(generateFiles);
  }

  const gen = generators[moduleName];

  if (!gen) {
    return console.log(`[ERROR] \`${moduleName}\` is not a valid module`);
  }

  gen(process.env.KNOSYS_DS_DIR);
}

module.exports = { execute: generateFiles };
