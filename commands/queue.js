module.exports = {
  name: "queue",
  description: "Shows the song order.",
  execute: (client, message, args) => {
    const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**__You must be on any audio channel.__**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**I couldn't find any songs in the queue.**");
    } 
    message.channel.send(
      `${serverQueue.songs
        .map((song, index) => index + 1 + ". " + song.title)
        .join("\n\n")}`,
      { split: true }
    );
  }
};