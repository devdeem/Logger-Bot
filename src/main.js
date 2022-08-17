require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
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
const { readdir, readdirSync } = require('fs');
const figlet = require('figlet');
const colors = require('colors');
process.title = `Server Logger | ${config.version}`;
console.clear();

// Banner
figlet('Server Logger', (err, result) => {
    console.log(`${`${err || result}`.brightBlue}`)
});

// Event Handler
readdir('./src/events', (err, files) => {
    if (err) {
        console.log(`${`[ERROR]`.red} ${`${err}`.brightRed}`)
    }

    let jsfiles = files.filter(t => t.split('.').pop() === 'js')
    jsfiles.forEach(file => {
        let eventName = file.split(".")[0]
        let event = require(`./events/${eventName}`)
        client.on(eventName, event.bind(null, client))
        console.log(`${`[EVENTS]`.brightYellow} ${`Successfully registered event`.white} ${`${eventName}.js`.brightYellow}`)
    });
});

// Login
client.login(process.env.TOKEN);