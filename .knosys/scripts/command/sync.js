const { syncSenders, syncReceivers } = require('@larknosys/sdk');

const syncers = {
  sender: syncSenders,
  receiver: syncReceivers,
};

module.exports = {
  execute: (targetType, ...args) => {
    const syncer = syncers[targetType];

    if (!syncer) {
      throw new Error(`Invalid target type: ${targetType}`);
    }

    syncer(...args);
  },
};
