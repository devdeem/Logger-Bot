const { Client, GatewayIntentBits } = require('discord.js');
const config = require('../src/utils/config.json');
const log = require('term-logger');
const { readdir } = require('fs');
require('dotenv').config();

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
        GatewayIntentBits.DirectMessageReactions,
        GatewayIntentBits.MessageContent,
    ],
    allowedMentions: {
        everyone: false,
        roles: true,
        users: true
    }
});

process.title = `Server Logger | ${config.version}`;
console.clear();

readdir('./src/events', (err, files) => {
    if (err) {
        log.error(`${err}`);
    }

    let jsfiles = files.filter(t => t.split('.').pop() === 'js');
    jsfiles.forEach(file => {
        let eventName = file.split(".")[0];
        let event = require(`./events/${eventName}`);
        client.on(eventName, event.bind(null, client));

        log.debug(`Successfully registered event ${eventName}.js`)
    });
});

client.login(process.env.TOKEN);