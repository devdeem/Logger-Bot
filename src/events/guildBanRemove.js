module.exports = async (client, member) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.unbanLog.send({
    embeds: [embedBuilder.guildBR(client, member)],
  });
};
