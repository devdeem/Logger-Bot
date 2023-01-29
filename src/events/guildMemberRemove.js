const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');
const moment = require('moment');

module.exports = async (client, member) => {
    let logchannel = client.channels.cache.get(config.channels.leavelog);

    var embed = new EmbedBuilder()
        .setColor(client.colorred)
        .setAuthor({ name: `Member left`, iconURL: member.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/154/outbox-tray_1f4e4.png')
        .setDescription([
            `**${member.user.tag}** left the server`
        ].join('\n'))
        .addFields(
            { name: `Name`, value: `${member.user.tag}`, inline: false },
            { name: `ID`, value: `${member.user.id}`, inline: false },
            { name: `Account Age`, value: `Created **${moment.utc(member.user.createdAt).fromNow()}**`, inline: false },
        )

    logchannel.send({ embeds: [embed] })

    console.log(`${`[DEBUG]`.brightMagenta} ${`Member left the server`.brightWhite}`)
};