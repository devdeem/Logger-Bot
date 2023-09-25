![Banner](https://cdn.discordapp.com/attachments/1050740855805313064/1155918354675154984/Image1.png)
[![Run on Repl.it](https://replit.com/badge/github/devdeem/Logger-Bot)](https://replit.com/new/github/devdeem/Logger-Bot)

# Logger Bot

Discord bot that logs all changes on your Discord server!

## Deployment

Follow these instructions on how to use the bot.

    1.  Press the green "Code" button at the top of the repo.

![template](https://cdn.discordapp.com/attachments/1050740883319967764/1138496819295432754/Gbu.png)

    2.  Download the full code via the "Download ZIP" button

![downloadcode](https://cdn.discordapp.com/attachments/1050740883319967764/1138495847135444992/Screenshot_from_2023-08-08_17-35-35.png)

    3. Extract the files to your desktop and open the files in Visual Studio Code (or other text editor)

## Bot Setup

### .env

Put the token of your bot into .env file.

```bash
TOKEN=YOUR_BOT_TOKEN
```

### config.json

Adjust your config so that the bot suits you the way you want.

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
    "messageLog": "CHANNEL_ID",
    "voiceLog": "CHANNEL_ID"
  },
  "owner": "975898528859697182"
}
```

    4. Then open a terminal and run the following commands

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

## Support us

If you use this code and are happy with it, we would be happy for any donation to support this project!

[DONATE US HERE :)](https://ko-fi.com/deemdev)

## Packages that this bot use

- [discord.js](https://www.npmjs.com/package/discord.js) >>> v14.13.0
- [term-logger](https://www.npmjs.com/package/term-logger) >>> v1.1.9
- [dotenv](https://www.npmjs.com/package/dotenv) >>> v16.3.1
- [nodemon](https://www.npmjs.com/package/nodemon) >>> v3.0.1

## CHANGELOG

- 16/08/2022 - Fixed broken presence and finished
  **channelUpdate** log.
- 17/08/2022 - Code has been improved, logger has been added to event folder and emoji logger has been added.
- 18/08/2022 - Added ban and join log.
- 29/01/2023 - Modified code to discord.js **version 14.7.1**.
- 26/03/2023 - Fixed small bugs, Switched from colors to [term-logger](https://www.npmjs.com/package/term-logger) package.
- 27/03/2023 - Added **Message Delete** Event, Moved all embeds to **embed.js** file, Rewrited full code.
- 10/07/2023 - Added new package **nodemon** and modified code.
- 8/08/2023 - Updated all packages, Modified README file, Added **.prettierrc** file, Code has been improved.
- 25/09/2023 - Updated all packages, Added **voiceStateUpdate** Event _(Voice join, left, mute, unmute,deafended, undeafended)_, Modified README file

## Message from the creator

If I see you using this code as your own, I will report the **license violation to GitHub**.
