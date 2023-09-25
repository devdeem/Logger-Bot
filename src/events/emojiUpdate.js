module.exports = async (client, newEmoji, oldEmoji) => {
  const embedBuilder = require("../utils/embeds");

  await client.channelLogs.emojiLog.send({
    embeds: [embedBuilder.emojiU(client, newEmoji, oldEmoji)],
  });
};
