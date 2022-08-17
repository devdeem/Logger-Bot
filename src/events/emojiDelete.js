const config = require('../utils/config.json');
const { EmbedBuilder } = require('discord.js');

module.exports = async (client, emoji) => {
    let logchannel = client.channels.cache.get(config.channelID);

    const embed = new EmbedBuilder()
        .setColor(client.colorred)
        .setAuthor({ name: `Emoji removed`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/154/outbox-tray_1f4e4.png')
        .setDescription([
            `**Emoji**`,
            `**Name:** ${emoji.name}`,
            `**ID:** ${emoji.id}`
        ].join('\n'))
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`Emoji removed`.brightWhite}`)
};