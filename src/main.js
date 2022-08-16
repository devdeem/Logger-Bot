require('dotenv').config();
const { Client, GatewayIntentBits, EmbedBuilder, ActivityType } = require('discord.js');
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildBans,
        GatewayIntentBits.GuildEmojisAndStickers,
        GatewayIntentBits.GuildIntegrations,
        GatewayIntentBits.GuildInvites,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessageReactions,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildPresences,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.GuildVoiceStates,
        GatewayIntentBits.GuildWebhooks,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.DirectMessageTyping,
        GatewayIntentBits.DirectMessageReactions
    ],
    allowedMentions: {
        everyone: false,
        roles: true,
        users: true
    }
});
const config = require('../src/utils/config.json');
const channelID = config.channelID;
const figlet = require('figlet');
const colors = require('colors');
const moment = require('moment');
process.title = `Server Logger | ${config.version}`;
console.clear();

figlet('Server Logger', (err, result) => {
    console.log(`${`${err || result}`.brightBlue}`)
});

client.on('ready', () => {
    client.color = '2f3136';
    console.log(`${`[DISCORD]`.brightBlue} ${`Logged in as`.white} ${`${client.user.tag}`.brightGreen}`)

    setInterval(() => {
        client.user.setPresence({
            activities: [{ name: `Logs | Made by DEEM#6666`, type: ActivityType.Watching }],
            status: 'online',
        });
    }, 15000)
});

//---------------------------------------------------> LOGGER <---------------------------------------------------//
try {
    client.on('channelCreate', async function (channel) {
        let logchannel = client.channels.cache.get(channelID);

        var embed = new EmbedBuilder()
            .setColor('00ff09')
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
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel has been created`.brightGreen}`)
    });

    client.on('channelDelete', async function (channel) {
        let logchannel = client.channels.cache.get(channelID);

        var embed = new EmbedBuilder()
            .setColor('ff1100')
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
        console.log(`${`[DEBUG]`.brightMagenta} ${`Channel has been deleted`.brightRed}`)
    });

    client.on('channelPinsUpdate', async function (channel) {
        let logchannel = client.channels.cache.get(channelID);

        var embed = new EmbedBuilder()
            .setColor(client.color)
            .setAuthor({ name: `Channel PINS Update`, iconURL: client.user.displayAvatarURL({ dynamic: true }) })
            .setThumbnail('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/samsung/265/pushpin_1f4cc.png')
            .setDescription(`Message has been pinned or unpinned`)
            .addFields(
                { name: `Channel`, value: `${channel.name}`, inline: true },
                { name: `Mention`, value: `<#${channel.id}>`, inline: true },
                { name: `Channel ID`, value: `${channel.id}`, inline: true },
            )
            .setTimestamp()

        logchannel.send({ embeds: [embed] })
        console.log(`${`[DEBUG]`.brightMagenta} ${`Message has been pinned or unpinned`.brightGreen}`)
    });

    client.on('channelUpdate', async function (oldChannel, newChannel) {
        let logchannel = client.channels.cache.get(channelID);

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
    });
} catch (err) {
    console.log(`${`[ERROR]`.red} ${`${err}`.brightRed}`)
};

process.on('uncaughtException', () => null);
process.on('unhandledRejection', () => null);

client.login(process.env.TOKEN);