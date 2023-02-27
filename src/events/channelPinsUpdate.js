const embedBuilder = require('../utils/embeds');

module.exports = async (client, channel) => {
    client.channelLogs.channelLog.send({ embeds: [embedBuilder.channelP(client, channel)] })
};