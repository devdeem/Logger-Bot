const embedBuilder = require("../utils/embeds");

module.exports = async (client, emoji) => {
  client.channelLogs.emojiLog.send({
    embeds: [embedBuilder.emojiC(client, emoji)],
  });
};
