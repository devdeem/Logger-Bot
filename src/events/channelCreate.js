const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');
const moment = require('moment');

module.exports = async (client, channel) => {
    let logchannel = client.channels.cache.get(config.channelID);

    var embed = new EmbedBuilder()
        .setColor(client.colorgreen)
        .setAuthor({ name: `New channel has been created`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/new-button_1f195.png')
        .addFields(
            { name: `Name`, value: `${channel.name}`, inline: true },
            { name: `ID`, value: `${channel.id}`, inline: true },
            { name: `Mention`, value: `<#${channel.id}>`, inline: true },
            { name: `NSFW`, value: `${channel.nsfw ? 'Yes :white_check_mark:' : 'No :x:'}`, inline: true },
            { name: `Created at`, value: `${moment.utc(channel.createdAt).format("LLL")}`, inline: true },
            { name: `Category`, value: `${channel.parent.name}`, inline: true }
        )
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`Channel has been created`.brightWhite}`)
};