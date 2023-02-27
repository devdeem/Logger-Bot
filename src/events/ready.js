const { ActivityType } = require('discord.js');
const cfg = require('../utils/config.json');
const log = require('term-logger');

module.exports = async (client) => {
    client.color = '2f3136';
    client.channelLogs = {
        channelLog: client.channels.cache.get(cfg.channels.channelLog),
        emojiLog: client.channels.cache.get(cfg.channels.emojiLog),
        banLog: client.channels.cache.get(cfg.channels.banLog),
        unbanLog: client.channels.cache.get(cfg.channels.unbanLog),
        joinLog: client.channels.cache.get(cfg.channels.joinLog),
        leaveLog: client.channels.cache.get(cfg.channels.leaveLog),
        messageLog: client.channels.cache.get(cfg.channels.messageLog)
    };

    setInterval(() => {
        client.user.setPresence({
            activities: [{ name: `Logs | Made by DEEM#6666`, type: ActivityType.Watching }],
            status: 'online',
        });
    }, 15000)

    process.on('uncaughtException', (e) => { log.error(e) });
    process.on('unhandledRejection', (e) => { log.error(e) });

    log.info(`Logged in as ${client.user.tag}`);
};