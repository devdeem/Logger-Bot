module.exports = async (client, oldChannel, newChannel) => {
  const embedBuilder = require("../utils/embeds");

  if (oldChannel.name !== newChannel.name) {
    await client.channelLogs.channelLog.send({
      embeds: [embedBuilder.channelUN(client, newChannel, oldChannel)],
    });
  }

  if (oldChannel.nsfw !== newChannel.nsfw) {
    await client.channelLogs.channelLog.send({
      embeds: [embedBuilder.channelUNSFW(client, newChannel, oldChannel)],
    });
  }

  if (oldChannel.parent !== newChannel.parent) {
    await client.channelLogs.channelLog.send({
      embeds: [embedBuilder.channelUP(client, newChannel, oldChannel)],
    });
  }

  if (oldChannel.topic !== newChannel.topic) {
    await client.channelLogs.channelLog.send({
      embeds: [embedBuilder.channelUT(client, newChannel, oldChannel)],
    });
  }

  if (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser) {
    await client.channelLogs.channelLog.send({
      embeds: [embedBuilder.channelURPU(client, newChannel, oldChannel)],
    });
  }
};
