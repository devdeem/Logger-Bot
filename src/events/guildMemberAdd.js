module.exports = async (client, member) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.joinLog.send({
    embeds: [embedBuilder.guildMA(client, member)],
  });
};
