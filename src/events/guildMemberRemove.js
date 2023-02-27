const embedBuilder = require('../utils/embeds');

module.exports = async (client, member) => {
    client.channelLogs.leaveLog.send({ embeds: [embedBuilder.guildMR(client, member)] })
};