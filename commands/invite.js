const Discord = require('discord.js')
const config = require('../config.js')
const BOT_CLIENT_ID = config.BOT_CLIENT_ID

module.exports = {
  name: "invite",
  description: "Drops the bot's invite link.", 
  execute(client, message) {
    
        try{
            message.channel.createInvite({ maxAge: 0, maxUses: 0 }).then(link => {
            let inviteEmbed = new Discord.MessageEmbed()
            .setDescription(`**Invite Me**
[This Server's Invite Link](${link})
[Bot Invite Link](https://discordapp.com/oauth2/authorize?client_id=${BOT_CLIENT_ID}&scope=bot&permissions=1610083447) 
`)
            .setColor("#5DBCD2")
            message.channel.send(inviteEmbed);
            })
        }catch(e) {
            throw e;
        }
    }
} 