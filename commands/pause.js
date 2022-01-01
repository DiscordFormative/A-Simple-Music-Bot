module.exports = {
  name: "pause",
  description: "Stops the song.",
  execute (client, message, args) {
    
  const { channel } = message.member.voice;
    if (!channel) {
    
      return message.channel.send("**__You must be on any audio channel.__**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);

    if (!serverQueue) {
      return message.channel.send("**__I couldn't find a song to pause.__**");
    }
    if(!serverQueue.playing) return message.channel.send('**__Songs Already Paused.__**')
    if(serverQueue && serverQueue.playing) {
      serverQueue.playing = false;
      serverQueue.connection.dispatcher.pause(true)
      
      return message.channel.send("✅ **| Playing song paused.**")
  }  
  }
}