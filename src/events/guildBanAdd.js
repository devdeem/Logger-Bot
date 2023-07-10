const embedBuilder = require("../utils/embeds");

module.exports = async (client, member, reason) => {
  client.channelLogs.banLog.send({
    embeds: [embedBuilder.guildBA(client, member, reason)],
  });
};
