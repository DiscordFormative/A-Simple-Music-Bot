const Discord = require('discord.js')
const config = require('../config.js')
const PREFIX = config.PREFIX

module.exports = {
  name: "help",
  description: "Help Command", 
  execute(client, message) {
    
  message.channel.send(new Discord.MessageEmbed()
                      .setTitle('Simple Music Bot')
                      .setDescription(
    `
\`${PREFIX}play <music-name>\` : **Plays a Song.** \n
\`${PREFIX}skip\` : **Skips the next song.**\n
\`${PREFIX}pause\` : **Stops the song.**\n
\`${PREFIX}resume\` : **Resumes the paused song.**\n
\`${PREFIX}queue\` : **Shows the song order.**\n
\`${PREFIX}music\` : **Says the name of the song being played.**\n
\`${PREFIX}invite\` : **Drops the bot's invite link.**\n
`)
                       .setColor("ffc300")
                      )    
}
} 