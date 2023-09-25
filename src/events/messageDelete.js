module.exports = async (client, message) => {
  const embedBuilder = require("../utils/embeds");
  const cfg = require("../utils/config.json");

  if (message.guild.id !== cfg.guildID) return;
  if (message.author.bot) return;

  await client.channelLogs.messageLog.send({
    embeds: [embedBuilder.messageD(client, message)],
  });
};
