module.exports = async (client, emoji) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.emojiLog.send({
    embeds: [embedBuilder.emojiD(client, emoji)],
  });
};
