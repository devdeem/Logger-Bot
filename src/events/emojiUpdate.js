const config = require('../utils/config.json');
const { EmbedBuilder } = require('discord.js');

module.exports = async (client, oldEmoji, newEmoji) => {
    let logchannel = client.channels.cache.get(config.channelID);

    const embed = new EmbedBuilder()
        .setColor(client.color)
        .setAuthor({ name: `Emoji name changed`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail(newEmoji.url)
        .setDescription([
            `**Emoji:** ${newEmoji}`,
            `**ID:** ${newEmoji.id}`
        ].join('\n'))
        .addFields(
            { name: `Old name`, value: `${oldEmoji.name}`, inline: true },
            { name: `New name`, value: `${newEmoji.name}`, inline: true }
        )
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`Emoji name changed`.brightWhite}`)
};