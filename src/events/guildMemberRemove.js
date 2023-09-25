module.exports = async (client, member) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.leaveLog.send({
    embeds: [embedBuilder.guildMR(client, member)],
  });
};
