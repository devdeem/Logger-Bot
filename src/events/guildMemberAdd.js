const embedBuilder = require("../utils/embeds");

module.exports = async (client, member) => {
  client.channelLogs.joinLog.send({
    embeds: [embedBuilder.guildMA(client, member)],
  });
};
