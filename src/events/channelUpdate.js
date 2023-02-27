const embedBuilder = require('../utils/embeds');

module.exports = async (client, oldChannel, newChannel) => {
    if (oldChannel.name !== newChannel.name) {
        client.channelLogs.channelLog.send({ embeds: [embedBuilder.channelUN(client, newChannel, oldChannel)] })
    }

    if (oldChannel.nsfw !== newChannel.nsfw) {
        client.channelLogs.channelLog.send({ embeds: [embedBuilder.channelUNSFW(client, newChannel, oldChannel)] })
    }

    if (oldChannel.parent !== newChannel.parent) {
        client.channelLogs.channelLog.send({ embeds: [embedBuilder.channelUP(client, newChannel, oldChannel)] })
    }

    if (oldChannel.topic !== newChannel.topic) {
        client.channelLogs.channelLog.send({ embeds: [embedBuilder.channelUT(client, newChannel, oldChannel)] })
    }

    if (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser) {
        client.channelLogs.channelLog.send({ embeds: [embedBuilder.channelURPU(client, newChannel, oldChannel)] })
    }
};