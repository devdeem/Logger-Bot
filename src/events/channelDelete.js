const { EmbedBuilder } = require('discord.js');
const config = require('../utils/config.json');

module.exports = async (client, channel) => {
    let logchannel = client.channels.cache.get(config.channelID);

    var embed = new EmbedBuilder()
        .setColor(client.colorred)
        .setAuthor({ name: `Channel has been deleted`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
        .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/twitter/259/wastebasket_1f5d1.png')
        .setDescription(`**${channel.name}** has been deleted`)
        .addFields(
            { name: `Name`, value: `${channel.name}`, inline: true },
            { name: `ID`, value: `${channel.id}`, inline: true },
            { name: `NSFW`, value: `${channel.nsfw ? 'Yes :white_check_mark:' : 'No :x:'}`, inline: true }
        )
        .setTimestamp()

    logchannel.send({ embeds: [embed] })
    console.log(`${`[DEBUG]`.brightMagenta} ${`Channel has been deleted`.brightWhite}`)
};