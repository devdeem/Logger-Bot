const { ActivityType } = require('discord.js');

module.exports = async (client) => {
    client.colorred = 'ff1100';
    client.colorgreen = '00ff09';
    client.color = '2f3136';
    console.log(`${`[DISCORD]`.brightBlue} ${`Logged in as`.white} ${`${client.user.tag}`.brightGreen}`)

    setInterval(() => {
        client.user.setPresence({
            activities: [{ name: `Logs | Made by DEEM#6666`, type: ActivityType.Watching }],
            status: 'online',
        });
    }, 15000)

    process.on('unhandledRejection', err => console.log(err));
    process.on('uncaughtException', err => console.log(err));
};