module.exports = {
  name: "skip",
  description: "Skips the next song.",
  execute(client, message, args) {
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**__You must be on any audio channel.__**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**There is no song I can skip.**");
    }
    serverQueue.connection.dispatcher.end();
    message.channel.send("✔ **| The song has passed.**");
  }
};