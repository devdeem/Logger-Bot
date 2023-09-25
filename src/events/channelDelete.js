module.exports = async (client, channel) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.channelLog.send({
    embeds: [embedBuilder.channelD(client, channel)],
  });
};
