const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');

module.exports = async (client, member) => {
    let logchannel = client.channels.cache.get(config.channels.memberupdatelog);

    var embed = new EmbedBuilder()
        .setColor(client.color)

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`Member has joined server`.brightWhite}`)
};