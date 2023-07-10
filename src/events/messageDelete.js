const embedBuilder = require("../utils/embeds");
const cfg = require("../utils/config.json");

module.exports = async (client, message) => {
  if (message.guild.id !== cfg.guildID) return;
  if (message.author.bot) return;

  client.channelLogs.messageLog.send({
    embeds: [embedBuilder.messageD(client, message)],
  });
};
