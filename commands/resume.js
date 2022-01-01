module.exports = {
  name: "resume", 
  description: "Resumes the paused song.",
  execute (client, message, args) {
      const { channel } = message.member.voice;
    if (!channel) {
      return message.channel.send("**__You must be on any audio channel.__**");
    }
    const serverQueue = message.client.queue.get(message.guild.id);
    if(!serverQueue) return message.channel.send('**No song being played.**')
    if(serverQueue.playing) return message.channel.send(`There is no standing song.`)
 if(serverQueue && !serverQueue.playing) {
      serverQueue.playing = true;
      serverQueue.connection.dispatcher.resume(true)
  
  return message.channel.send("✅ **| The paused song resumed.**") 
 } 
    
    message.channel.send("**There is no paused song.**")
    
  }
}