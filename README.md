# Discord Server Logger Bot

<p align="left">
<a href="https://github.com/sponsors/devdeem" target"_blank"> <img src="https://img.shields.io/github/sponsors/devdeem?label=Sponsors&logo=GitHub%20Sponsors&style=for-the-badge" /> </a>
<a href="https://github.com/devdeem/Logger-Bot" target"_blank"> <img src="https://img.shields.io/github/contributors/devdeem/Logger-Bot?color=dark-green&logo=GITHUB&style=for-the-badge" /> </a>

Discord bot that logs all changes on your Discord server! When using this code please give credits to **@deemdev**!

## Deployment

Follow these instructions on how to use the bot.

    1.  Press the green "Code" button at the top of the repo.

![template](https://cdn.discordapp.com/attachments/1008855081489268857/1008856275100106752/HNp.png)

    2.  Download the full code via the "Download ZIP" button

![downloadcode](https://cdn.discordapp.com/attachments/1008855081489268857/1008856994838491177/hdg.png)

    3. Extract the files to your desktop and open the files in Visual Studio Code (or other text editor)

**.env**

```bash
TOKEN=YOUR_BOT_TOKEN
```

**config.json**

```json
{
  "guildID": "YOUR_GUILD_ID",
  "channels": {
    "channelLog": "CHANNEL_ID",
    "emojiLog": "CHANNEL_ID",
    "banLog": "CHANNEL_ID",
    "unbanLog": "CHANNEL_ID",
    "joinLog": "CHANNEL_ID",
    "leaveLog": "CHANNEL_ID",
    "messageLog": "CHANNEL_ID"
  },
  "owner": "975898528859697182",
  "version": "1.0.6" // Don\'t change this
}
```

    4. Change things in the .env and src/utils/config.json files, then open a terminal and run the following commands

Downloading discord.js

```bash
npm i discord.js@latest
```

Download the necessary modules:

```bash
npm i
```

Then use this command to turn on the bot:

```bash
npm run dev
```

## Packages that this bot use

- [discord.js](https://www.npmjs.com/package/discord.js)
- [term-logger](https://www.npmjs.com/package/term-logger)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [nodemon](https://www.npmjs.com/package/nodemon)

## CHANGELOG

- 16.08.2022 - Fixed broken presence and finished
  **channelUpdate** log.
- 17.08.2022 - Code has been improved, logger has been added to event folder and emoji logger has been added.
- 18.08.2022 - Added ban and join log.
- 29.01.2023 - Modified code to discord.js **version 14.7.1**.
- 26.3.2023 - Fixed small bugs, Switched from colors to [term-logger](https://www.npmjs.com/package/term-logger) package.
- 27.3.2023 - Added **Message Delete** Event, Moved all embeds to **embed.js** file, Rewrited full code.
- 10.07.2023 - Added new package **nodemon** and modified code

## Message from the creator

If I see you using this code as your own, I will report the **license violation to GitHub**
