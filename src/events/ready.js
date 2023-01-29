const { ActivityType } = require('discord.js');

module.exports = async (client) => {
    client.colorred = 'ff1100';
    client.colorgreen = '00ff09';
    client.color = '2f3136';

    setInterval(() => {
        client.user.setPresence({
            activities: [{ name: `Logs | Made by DEEM#6666`, type: ActivityType.Watching }],
            status: 'online',
        });
    }, 15000)

    process.on('uncaughtException', (e) => {
        console.log(`${`[ERROR]`.brightRed} ${`${e}`.white}`)
    });
    process.on('unhandledRejection', (e) => {
        console.log(`${`[ERROR]`.brightRed} ${`${e}`.white}`)
    });

    console.log(`${`[DISCORD]`.brightBlue} ${`Logged in as`.white} ${`${client.user.tag}`.brightGreen}`);
};