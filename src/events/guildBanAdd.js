module.exports = async (client, member, reason) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.banLog.send({
    embeds: [embedBuilder.guildBA(client, member, reason)],
  });
};
