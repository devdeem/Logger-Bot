require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const config = require('./config.json');
const colors = require('colors');

client.on('ready', () => {
    console.log(`${`[DISCORD]`.brightBlue} ${`Logged in as`.white} ${`${client.user.tag}`.brightGreen}`)
});

client.login(process.env.TOKEN)