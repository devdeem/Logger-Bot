const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');

module.exports = async (client, member, reason) => {
    let logchannel = client.channels.cache.get(config.channels.banlog);

    var embed = new EmbedBuilder()
        .setColor(client.colorred)
        .setAuthor({ name: `Member has been banned`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/236/hammer_1f528.png')
        .setDescription([
            `**${member.user.tag}** has been banned`,
            ``,
            `**User:**`,
            `**Name:** ${member.user.tag}`,
            `**ID:** ${member.user.id}`
        ].join('\n'))
        .setFooter({ text: `Reason: ${reason || 'None'}`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`Member has been banned`.brightWhite}`)
};