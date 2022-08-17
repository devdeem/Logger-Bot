const config = require('../utils/config.json');
const { EmbedBuilder } = require('discord.js');

module.exports = async (client, emoji) => {
    let logchannel = client.channels.cache.get(config.channelID);

    const embed = new EmbedBuilder()
        .setColor(client.colorgreen)
        .setAuthor({ name: `New emoji added`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail(emoji.url)
        .setDescription([
            `**Emoji**`,
            `**Name:** ${emoji.name}`,
            `**ID:** ${emoji.id}`
        ].join('\n'))
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`New emoji added`.brightWhite}`)
};