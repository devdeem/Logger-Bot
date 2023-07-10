const { EmbedBuilder } = require("discord.js");

module.exports = {
  // Event: New channel created
  channelC: (client, channel) => {
    const channelCreate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `New channel created`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079877880516968519/check-mark-button_2705.png"
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
          name: `Created at`,
          value: `<t:${parseInt(channel.createdAt / 1000)}:R>`,
          inline: true,
        }
      )
      .setTimestamp();

    return channelCreate;
  },

  // Event: Channel deleted
  channelD: (client, channel) => {
    const channelDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel deleted`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079863147667652688/wastebasket_1f5d1-fe0f.png"
      )
      .setDescription(`:white_check_mark: **${channel.name}** has been deleted`)
      .addFields(
        { name: `Channel Name`, value: `${channel.name}`, inline: true },
        { name: `Channel ID`, value: `${channel.id}`, inline: true },
        {
          name: `NSFW`,
          value: `${channel.nsfw ? "Yes :white_check_mark:" : "No :x:"}`,
          inline: true,
        }
      )
      .setTimestamp();

    return channelDelete;
  },

  // Event: Channel pins update
  channelP: (client, channel) => {
    const channelPins = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel pins update`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079880195319795824/pushpin_1f4cc.png"
      )
      .setDescription(`Message has been pinned or unpinned`)
      .addFields(
        { name: `Channel Name`, value: `${channel.name}`, inline: true },
        { name: `Channel Mention`, value: `<#${channel.id}>`, inline: true },
        { name: `Channel ID`, value: `${channel.id}`, inline: true }
      )
      .setTimestamp();

    return channelPins;
  },

  // Event: Channel name changed
  channelUN: (client, newChannel, oldChannel) => {
    const channelUpdateName = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel name has been changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079881840296480908/bookmark-tabs_1f4d1.png"
      )
      .setDescription(
        [
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        { name: `From`, value: `${oldChannel.name}`, inline: true },
        { name: `To`, value: `${newChannel.name}`, inline: true }
      )
      .setTimestamp();

    return channelUpdateName;
  },

  // Event: Channel NSFW status updated
  channelUNSFW: (client, newChannel, oldChannel) => {
    const channelNSFW = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel age restriction updated`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079882815077888011/no-one-under-eighteen_1f51e.png"
      )
      .setDescription(
        [
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Old Restriction`,
          value: `${
            oldChannel.nsfw ? "Enabled :white_check_mark:" : "Disabled :x:"
          }`,
          inline: true,
        },
        {
          name: `New Restriction`,
          value: `${
            newChannel.nsfw ? "Enabled :white_check_mark:" : "Disabled :x:"
          }`,
          inline: true,
        }
      )
      .setTimestamp();

    return channelNSFW;
  },

  // Event: Channel category changed
  channelUP: (client, newChannel, oldChannel) => {
    const channelUpdateParent = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel category changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079881840296480908/bookmark-tabs_1f4d1.png"
      )
      .setDescription(
        [
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        { name: `From`, value: `${oldChannel.parent}`, inline: true },
        { name: `To`, value: `${newChannel.parent}`, inline: true }
      )
      .setTimestamp();

    return channelUpdateParent;
  },

  // Event: Channel topic changed
  channelUT: (client, newChannel, oldChannel) => {
    const channelUpdateTopic = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel topic changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079881840296480908/bookmark-tabs_1f4d1.png"
      )
      .setDescription(
        [
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
        { name: `To`, value: `${newChannel.topic || `None :x:`}`, inline: true }
      )
      .setTimestamp();

    return channelUpdateTopic;
  },

  // Event: Channel slowmode changed
  channelURPU: (client, newChannel, oldChannel) => {
    const channelUpdateRatelimitPerUser = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Channel slowmode changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079885391655620629/turtle_1f422.png"
      )
      .setDescription(
        [
          `Name: **${newChannel.name}**`,
          `Mention: <#${newChannel.id}>`,
          `ID: **${newChannel.id}**`,
        ].join("\n")
      )
      .addFields(
        {
          name: `Old Slowmode:`,
          value: `${oldChannel.rateLimitPerUser || "None :x:"}`,
          inline: true,
        },
        {
          name: `New Slowmode:`,
          value: `${newChannel.rateLimitPerUser || "None :x:"}`,
          inline: true,
        }
      )
      .setTimestamp();

    return channelUpdateRatelimitPerUser;
  },

  // Event: New emoji added
  emojiC: (client, emoji) => {
    const emojiCreate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `New emoji added`,
        iconURL: client.user.displayAvatarURL({ dynamic: 4096 }),
      })
      .setThumbnail(emoji.url)
      .setDescription(
        [
          `**Name:** ${emoji.name}`,
          `**ID:** ${emoji.id}`,
          `**Preview:** <:${emoji.name}:${emoji.id}>`,
        ].join("\n")
      )
      .setTimestamp();

    return emojiCreate;
  },

  // Event: Emoji removed
  emojiD: (client, emoji) => {
    const emojiDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Emoji removed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(emoji.url)
      .setDescription(
        [`**Name:** ${emoji.name}`, `**ID:** ${emoji.id}`].join("\n")
      )
      .setTimestamp();

    return emojiDelete;
  },

  // Event: Emoji name changed
  emojiU: (client, newEmoji, oldEmoji) => {
    const emojiUpdate = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Emoji name changed`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(newEmoji.url)
      .setDescription(
        [
          `**Name:** ${oldEmoji.name}`,
          `**ID:** ${newEmoji.id}`,
          `**Preview:** ${newEmoji}`,
        ].join("\n")
      )
      .addFields(
        { name: `New name`, value: `${oldEmoji.name}`, inline: true },
        { name: `Old name`, value: `${newEmoji.name}`, inline: true }
      )
      .setTimestamp();

    return emojiUpdate;
  },

  // Event: Member banned
  guildBA: (client, member, reason) => {
    const guildBanAdd = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Member has been banned`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079891207813079050/prohibited_1f6ab.png"
      )
      .setDescription(
        [
          `**${member.user.tag}** has been banned`,
          ``,
          `**Name:** ${member.user.tag}`,
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

  // Event: Member unbanned
  guildBR: (client, member, reason) => {
    const guildBanRemove = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Member has been unbanned`,
        iconURL: client.user.displayAvatarURL({ size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription(
        [
          `**${member.user.tag}** has been unbanned`,
          ``,
          `**User:**`,
          `**Name:** ${member.user.tag}`,
          `**ID:** ${member.user.id}`,
        ].join("\n")
      )
      .setTimestamp();

    return guildBanRemove;
  },

  // Event: Member joined
  guildMA: (client, member) => {
    const guildMemberAdd = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `${member.user.tag} has joined server`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079877880516968519/check-mark-button_2705.png"
      )
      .setDescription([`<@${member.user.id}> has joined the server`].join("\n"))
      .addFields(
        { name: `Name`, value: `${member.user.tag}`, inline: true },
        { name: `ID`, value: `${member.user.id}`, inline: true }
      );

    return guildMemberAdd;
  },

  // Event: Member left
  guildMR: (client, member) => {
    const guildMemberRemove = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Member left`,
        iconURL: member.user.displayAvatarURL({ dynamic: true, size: 4096 }),
      })
      .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 4096 }))
      .setDescription([`**${member.user.tag}** left the server`].join("\n"))
      .addFields(
        { name: `Name`, value: `${member.user.tag}`, inline: true },
        { name: `ID`, value: `${member.user.id}`, inline: true }
      );

    return guildMemberRemove;
  },

  // Event: Message deleted
  messageD: (client, message) => {
    const messageDelete = new EmbedBuilder()
      .setColor(client.color)
      .setAuthor({
        name: `Message Deleted`,
        iconURL: client.user.displayAvatarURL({ dynamic: true }),
      })
      .setThumbnail(
        "https://cdn.discordapp.com/attachments/1050740872322490477/1079863147667652688/wastebasket_1f5d1-fe0f.png"
      )
      .addFields(
        {
          name: `User`,
          value: `**Name:** ${message.author.tag}\n**Mention:** <@${message.author.id}>\n**ID:** ${message.author.id}`,
          inline: true,
        },
        {
          name: `In Channel`,
          value: `**Name:** ${message.channel.name}\n**Mention:** <#${message.channel.id}>\n**ID:** ${message.channel.id}`,
          inline: true,
        },
        {
          name: `Deleted Message`,
          value: `${message}`,
          inline: false,
        }
      )
      .setTimestamp();

    return messageDelete;
  },
};
