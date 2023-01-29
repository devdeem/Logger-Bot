const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');

module.exports = async (client, member, reason) => {
    let logchannel = client.channels.cache.get(config.channels.unbanlog);

    var embed = new EmbedBuilder()
        .setColor(client.colorgreen)
        .setAuthor({ name: `Member has been unbanned`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
        .setDescription([
            `**${member.user.tag}** has been unbanned`,
            ``,
            `**User:**`,
            `**Name:** ${member.user.tag}`,
            `**ID:** ${member.user.id}`
        ].join('\n'))
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    
    console.log(`${`[DEBUG]`.brightMagenta} ${`Member has been unbanned`.brightWhite}`)
};