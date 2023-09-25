module.exports = async (client, oldState, newState) => {
  const embedBuilder = require("../utils/embeds");

  if (!oldState.channel && newState.channel) {
    await client.channelLogs.voiceLog.send({
      embeds: [embedBuilder.voiceJ(client, oldState, newState)],
    });
  }

  if (oldState.channel && !newState.channel) {
    await client.channelLogs.voiceLog.send({
      embeds: [embedBuilder.voiceL(client, oldState, newState)],
    });
  }

  if (oldState.selfMute !== newState.selfMute) {
    if (newState.selfMute) {
      await client.channelLogs.voiceLog.send({
        embeds: [embedBuilder.voiceSM(client, oldState, newState)],
      });
    } else {
      await client.channelLogs.voiceLog.send({
        embeds: [embedBuilder.voiceSUM(client, oldState, newState)],
      });
    }
  }

  if (oldState.selfDeaf !== newState.selfDeaf) {
    if (newState.selfDeaf) {
      await client.channelLogs.voiceLog.send({
        embeds: [embedBuilder.voiceSD(client, oldState, newState)],
      });
    } else {
      await client.channelLogs.voiceLog.send({
        embeds: [embedBuilder.voiceSUD(client, oldState, newState)],
      });
    }
  }
};
