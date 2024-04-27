module.exports = async (client, oldMessage, newMessage) => {
  const embedBuilder = require("../utils/embeds");
  const cfg = require("../utils/config.json");

  if (newMessage.guild.id !== cfg.guildID) return;
  if (newMessage.author.bot) return;
  if (!oldMessage.author) return;

  await client.channelLogs.messageLog.send({
    embeds: [embedBuilder.messageU(client, oldMessage, newMessage), embedBuilder.messageUN(client, oldMessage, newMessage)],
  });
};
