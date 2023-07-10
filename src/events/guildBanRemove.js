const embedBuilder = require("../utils/embeds");

module.exports = async (client, member, reason) => {
  client.channelLogs.unbanLog.send({
    embeds: [embedBuilder.guildBR(client, member, reason)],
  });
};
