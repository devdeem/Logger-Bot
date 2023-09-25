const { Client, GatewayIntentBits, Partials } = require("discord.js");
const { TermLogger, Logger } = require("term-logger");
const version = require("../package.json").version;
const { readdir } = require("fs");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
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
  partials: [
    Partials.Channel,
    Partials.GuildMember,
    Partials.GuildScheduledEvent,
    Partials.Message,
    Partials.Reaction,
    Partials.ThreadMember,
    Partials.User,
  ],
  allowedMentions: {
    parse: ["everyone", "roles", "users"],
  },
});

const logger = new TermLogger(client, {
  enableAntiCrash: true,
  systemMessages: true,
});

process.title = `Server Logger Bot | ${version}`;
client.log = Logger;
console.clear();

readdir("./src/events", (err, files) => {
  let eventFiles = files.filter((t) => t.split(".").pop() === "js");

  if (err) {
    return Logger.error(err);
  }

  eventFiles.forEach((file) => {
    let eventName = file.split(".")[0];
    let event = require(`./events/${eventName}`);
    client.on(eventName, event.bind(null, client));

    Logger.event(`Successfully registered event ${eventName}.js`);
  });
});

client.login(process.env.TOKEN);
