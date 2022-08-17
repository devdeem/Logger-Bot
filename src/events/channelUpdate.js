const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');

module.exports = async (client, oldChannel, newChannel) => {
    let logchannel = client.channels.cache.get(config.channelID);

    if (oldChannel.name !== newChannel.name) {
        var embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Channel name changed`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/154/pencil_270f.png')
            .setDescription([
                `**Channel:**`,
                ``,
                `Name: **${newChannel.name}**`,
                `Mention: <#${newChannel.id}>`,
                `ID: **${newChannel.id}**`
            ].join('\n'))
            .addFields(
                { name: `From`, value: `${oldChannel.name}`, inline: true },
                { name: `To`, value: `${newChannel.name}`, inline: true }
            )
            .setTimestamp()

        logchannel.send({ embeds: [embed] })
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel name changed`.brightWhite}`)
    }
    if (oldChannel.nsfw !== newChannel.nsfw) {
        var embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Channel Age Restriction updated`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/name-badge_1f4db.png')
            .setDescription([
                `**Channel:**`,
                ``,
                `Name: **${newChannel.name}**`,
                `Mention: <#${newChannel.id}>`,
                `ID: **${newChannel.id}**`
            ].join('\n'))
            .addFields(
                { name: `Old Restriction:`, value: `${oldChannel.nsfw ? 'Enabled :white_check_mark:' : 'Disabled :x:'}`, inline: true },
                { name: `New Restriction:`, value: `${newChannel.nsfw ? 'Enabled :white_check_mark:' : 'Disabled :x:'}`, inline: true }
            )
            .setTimestamp()

        logchannel.send({ embeds: [embed] })
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel Age Restriction updated`.brightWhite}`)
    }
    if (oldChannel.parent !== newChannel.parent) {
        var embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Channel category changed`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/154/pencil_270f.png')
            .setDescription([
                `**Channel:**`,
                ``,
                `Name: **${newChannel.name}**`,
                `Mention: <#${newChannel.id}>`,
                `ID: **${newChannel.id}**`
            ].join('\n'))
            .addFields(
                { name: `From`, value: `${oldChannel.parent}`, inline: true },
                { name: `To`, value: `${newChannel.parent}`, inline: true }
            )
            .setTimestamp()

        logchannel.send({ embeds: [embed] })
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel category changed`.brightWhite}`)
    }
    if (oldChannel.topic !== newChannel.topic) {
        var embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Channel topic changed`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/154/pencil_270f.png')
            .setDescription([
                `**Channel:**`,
                ``,
                `Name: **${newChannel.name}**`,
                `Mention: <#${newChannel.id}>`,
                `ID: **${newChannel.id}**`
            ].join('\n'))
            .addFields(
                { name: `From`, value: `${oldChannel.topic || `None :x:`}`, inline: true },
                { name: `To`, value: `${newChannel.topic || `None :x:`}`, inline: true },
            )
            .setTimestamp()

        logchannel.send({ embeds: [embed] })
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel topic changed`.brightWhite}`)
    }
    if (oldChannel.rateLimitPerUser !== newChannel.rateLimitPerUser) {
        var embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Channel slowmode changed`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/154/pencil_270f.png')
            .setDescription([
                `**Channel:**`,
                ``,
                `Name: **${newChannel.name}**`,
                `Mention: <#${newChannel.id}>`,
                `ID: **${newChannel.id}**`
            ].join('\n'))
            .addFields(
                { name: `Old Slowmode:`, value: `${oldChannel.rateLimitPerUser || 'None'}`, inline: true },
                { name: `New Slowmode:`, value: `${newChannel.rateLimitPerUser || 'None'}`, inline: true },
            )
            .setTimestamp()

        logchannel.send({ embeds: [embed] })
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel slowmode changed`.brightWhite}`)
    }
};