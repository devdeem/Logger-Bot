const embedBuilder = require("../utils/embeds");

module.exports = async (client, newEmoji, oldEmoji) => {
  client.channelLogs.emojiLog.send({
    embeds: [embedBuilder.emojiU(client, newEmoji, oldEmoji)],
  });
};
