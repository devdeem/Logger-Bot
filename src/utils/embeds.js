const { EmbedBuilder } = require("discord.js");

module.exports = {
  // Event: channelCreate
  channelC: (client, channel) => {
    const channelCreate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | New Channel Created`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .addFields(
        { name: `Name`, value: `${channel.name}`, inline: true },
        { name: `ID`, value: `${channel.id}`, inline: true },
        { name: `Mention`, value: `<#${channel.id}>`, inline: true },
        {
          name: `NSFW`,
          value: `${channel.nsfw ? "Yes :white_check_mark:" : "No :x:"}`,
          inline: true,
        },
        {
          name: `Channel Category`,
          value: `${channel.parent.name}`,
          inline: true,
        },
        {
          name: `Created`,
          value: `<t:${parseInt(channel.createdAt / 1000)}:R>`,
          inline: true,
        }
      );

    return channelCreate;
  },

  // Event: channelDelete
  channelD: (client, channel) => {
    const channelDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Channel Deleted`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .setDescription(
        `:white_check_mark: Channel **#${channel.name}** has been deleted`
      )
      .addFields(
        { name: `Name`, value: `${channel.name}`, inline: true },
        { name: `ID`, value: `${channel.id}`, inline: true },
        {
          name: `NSFW`,
          value: `${channel.nsfw ? "Yes :white_check_mark:" : "No :x:"}`,
          inline: true,
        }
      );

    return channelDelete;
  },

  // Event: channelPinsUpdate
  channelP: (client, channel) => {
    var date = Date.now();

    const channelPins = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Channel Pins Update`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138483813694046339.webp?size=96&quality=lossless"
      )
      .setDescription(`:pushpin: Message has been pinned or unpinned`)
      .addFields(
        { name: `In Channel`, value: `<#${channel.id}>`, inline: true },
        { name: `Channel ID`, value: `${channel.id}`, inline: true },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelPins;
  },

  // Event: channelUpdate
  channelUN: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateName = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | New Channel Name`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Channel Information:`,
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        { name: `From`, value: `${oldChannel.name}`, inline: true },
        { name: `To`, value: `${newChannel.name}`, inline: true },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateName;
  },

  // Event: channelUpdate
  channelUNSFW: (client, newChannel, oldChannel) => {
    const channelNSFW = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Channel Age Restriction Updated`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setDescription(
        [
          `### Channel Information:`,
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Old Restriction`,
          value: `${oldChannel.nsfw ? "Enabled :white_check_mark:" : "Disabled :x:"
            }`,
          inline: true,
        },
        {
          name: `New Restriction`,
          value: `${newChannel.nsfw ? "Enabled :white_check_mark:" : "Disabled :x:"
            }`,
          inline: true,
        }
      )
      .setTimestamp();

    return channelNSFW;
  },

  // Event: channelUpdate
  channelUP: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateParent = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Channel Category Changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138488289846890557.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Channel Information:`,
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `From`,
          value: `${oldChannel.parent || "None :x:"}`,
          inline: true,
        },
        {
          name: `To`,
          value: `${newChannel.parent || "None :x:"}`,
          inline: true,
        },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateParent;
  },

  // Event: channelUpdate
  channelUT: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateTopic = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Channel Topic Changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1138482145673871400.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Channel Information:`,
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `From`,
          value: `${oldChannel.topic || `None :x:`}`,
          inline: true,
        },
        {
          name: `To`,
          value: `${newChannel.topic || `None :x:`}`,
          inline: true,
        },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateTopic;
  },

  // Event: channelUpdate
  channelURPU: (client, newChannel, oldChannel) => {
    var date = Date.now();

    const channelUpdateRatelimitPerUser = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Channel Slowmode Changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/785483969453883432.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Channel Information:`,
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Old Slowmode`,
          value: `${oldChannel.rateLimitPerUser || "None :x:"}`,
          inline: true,
        },
        {
          name: `New Slowmode`,
          value: `${newChannel.rateLimitPerUser || "None :x:"}`,
          inline: true,
        },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return channelUpdateRatelimitPerUser;
  },

  // Event: emojiCreate
  emojiC: (client, emoji) => {
    var date = Date.now();

    const emojiCreate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | New Emoji Added`,
        iconURL: client.user.displayAvatarURL({ dynamic: 4096 }),
      })
      .setThumbnail(emoji.url)
      .addFields(
        { name: `Name`, value: `${emoji.name}`, inline: false },
        { name: `ID`, value: `${emoji.id}`, inline: false },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: false }
      );

    return emojiCreate;
  },

  // Event: emojiDelete
  emojiD: (client, emoji) => {
    var date = Date.now();

    const emojiDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Emoji Removed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(emoji.url)
      .addFields(
        { name: `Name`, value: `${emoji.name}`, inline: false },
        { name: `ID`, value: `${emoji.id}`, inline: false },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: false }
      );

    return emojiDelete;
  },

  // Event: emojiUpdate
  emojiU: (client, newEmoji, oldEmoji) => {
    var date = Date.now();

    const emojiUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Emoji Name Changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(newEmoji.url)
      .addFields(
        { name: `New Name`, value: `${oldEmoji.name}`, inline: false },
        { name: `Old Name`, value: `${newEmoji.name}`, inline: false },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: false }
      );

    return emojiUpdate;
  },

  // Event: guildBanAdd
  guildBA: (client, member, reason) => {
    const guildBanAdd = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Member Banned`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/1117871692803494023.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `**${member.user.username}** has been banned`,
          ``,
          `**Name:** ${member.user.username}`,
          `**ID:** ${member.user.id}`,
        ].join("\n")
      )
      .setFooter({
        text: `Reason: ${reason || "None"}`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setTimestamp();

    return guildBanAdd;
  },

  // Event: guildBanRemove
  guildBR: (client, member, reason) => {
    const guildBanRemove = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${client.user.username} | Member Unbanned`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription(
        [
          `**${member.user.username}** has been unbanned`,
          ``,
          `**User:**`,
          `**Name:** ${member.user.username}`,
          `**ID:** ${member.user.id}`,
        ].join("\n")
      )
      .setTimestamp();

    return guildBanRemove;
  },

  // Event: guildMemberAdd
  guildMA: (client, member) => {
    var date = Date.now();

    const guildMemberAdd = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${member.user.username} has joined server`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription([`<@${member.user.id}> has joined the server`].join("\n"))
      .addFields(
        { name: `Name`, value: `${member.user.username}`, inline: true },
        { name: `ID`, value: `${member.user.id}`, inline: true },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return guildMemberAdd;
  },

  // Event: Member left
  guildMR: (client, member) => {
    var date = Date.now();

    const guildMemberRemove = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${member.user.username} | Left the server`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription(
        [`**${member.user.username}** left the server`].join("\n")
      )
      .addFields(
        { name: `Name`, value: `${member.user.username}`, inline: true },
        { name: `ID`, value: `${member.user.id}`, inline: true },
        { name: `When`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return guildMemberRemove;
  },

  // Event: messageDelete
  messageD: (client, message) => {
    var date = Date.now();

    const messageDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Message has been deleted`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/emojis/830790543659368448.webp?size=96&quality=lossless"
      )
      .setDescription(
        [
          `### Message content`,
          `\`\`\`${message}\`\`\``
        ].join("\n")
      )
      .addFields(
        {
          name: `Message ID`,
          value: `${message.id}`,
          inline: false,
        },
        {
          name: `Author`,
          value: `<@${message.author.id}>`,
          inline: false,
        },
        {
          name: `Author Data`,
          value: `${message.author.username}**/**${message.author.id}`,
          inline: false,
        },
        {
          name: `Channel`,
          value: `<#${message.channel.id}>`,
          inline: false,
        },
        { name: `Timestamp`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return messageDelete;
  },

  // Event: messageUpdate
  messageU: (client, oldMessage, newMessage) => {
    var date = Date.now();

    const messageUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Message has been updated (1/2)`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1142475983396536451/1181689429723717682/pencil.png?ex=6581f90a&is=656f840a&hm=e37d6a9945fa953a8dc8b9e3ff22965f28c203b5b2c5dd6f4c101a5e2c380938&"
      )
      .setDescription(
        [
          `### Source Message`,
          `\`\`\`${oldMessage}\`\`\``
        ].join("\n")
      )
      .addFields();

    return messageUpdate;
  },

  // Event: messageUpdate
  messageUN: (client, oldMessage, newMessage) => {
    var date = Date.now();

    const messageUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Message has been updated (2/2)`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1142475983396536451/1181689429723717682/pencil.png?ex=6581f90a&is=656f840a&hm=e37d6a9945fa953a8dc8b9e3ff22965f28c203b5b2c5dd6f4c101a5e2c380938&"
      )
      .setDescription(
        [
          `### Updated Message`,
          `\`\`\`${newMessage}\`\`\``
        ].join("\n")
      )
      .addFields(
        {
          name: `Message ID`,
          value: `${newMessage.id}`,
          inline: false,
        },
        {
          name: `Author`,
          value: `<@${newMessage.author.id}>`,
          inline: false,
        },
        {
          name: `Author Data`,
          value: `${newMessage.author.username}**/**${newMessage.author.id}`,
          inline: false,
        },
        {
          name: `Channel`,
          value: `<#${newMessage.channel.id}>`,
          inline: false,
        },
        { name: `Timestamp`, value: `<t:${parseInt(date / 1000)}:R>`, inline: true }
      );

    return messageUpdate;
  },

  // Event: voiceStateUpdate
  voiceJ: (client, oldState, newState) => {
    var date = Date.now();

    const voiceJoin = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Joined Voice`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> **joined** voice channel <#${newState.channel.id}>`
      )
      .addFields({
        name: `When`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceJoin;
  },

  // Event: voiceStateUpdate
  voiceL: (client, oldState, newState) => {
    var date = Date.now();

    const voiceLeft = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Left Voice`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${oldState.member.user.id}> **left** voice channel <#${oldState.channel.id}>`
      )
      .addFields({
        name: `When`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceLeft;
  },

  // Event: voiceStateUpdate
  voiceSM: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfMute = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Muted Themselves`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> has **muted** themselves in channel <#${newState.channel.id}>`
      )
      .addFields({
        name: `When`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfMute;
  },

  // Event: voiceStateUpdate
  voiceSUM: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfUnmute = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Unmuted Themselves`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> has **unmuted** themselves in channel <#${newState.channel.id}>`
      )
      .addFields({
        name: `When`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfUnmute;
  },

  // Event: voiceStateUpdate
  voiceSD: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfDeaf = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Deafended Themselves`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> has **deafened** themselves in channel <#${newState.channel.id}>`
      )
      .addFields({
        name: `When`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfDeaf;
  },

  // Event: voiceStateUpdate
  voiceSUD: (client, oldState, newState) => {
    var date = Date.now();

    const voiceSelfUndeaf = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${newState.member.user.username} | Undeafended Themselves`,
        iconURL: newState.member.user.displayAvatarURL({
          dynamic: true,
          size: 4096,
        }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740883319967764/1155814932999327814/1f50a.png"
      )
      .setDescription(
        `<@${newState.member.user.id}> has **undeafened** themselves in channel <#${newState.channel.id}>`
      )
      .addFields({
        name: `When`,
        value: `<t:${parseInt(date / 1000)}:R>`,
        inline: true,
      });

    return voiceSelfUndeaf;
  },
};
