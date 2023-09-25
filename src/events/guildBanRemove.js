module.exports = async (client, member, reason) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.unbanLog.send({
    embeds: [embedBuilder.guildBR(client, member, reason)],
  });
};
