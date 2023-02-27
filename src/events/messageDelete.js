const embedBuilder = require('../utils/embeds');

module.exports = async (client, message) => {
    if (message.author.bot) return;

    client.channelLogs.messageLog.send({ embeds: [embedBuilder.messageD(client, message)] })
};