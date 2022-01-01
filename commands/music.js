module.exports = {
  name: "music",
  description: "Says the name of the song being played.",
  execute (client, message, args) {
    
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**__You must be on any audio channel.__**");
    }

    const serverQueue = message.client.queue.get(message.guild.id);
    if (!serverQueue) {
      return message.channel.send("**__I am not playing any songs.__**");
    }
    message.channel.send(serverQueue.songs[0].title + ' - **Currently Playing Song.**')

    
    
    
  }
}