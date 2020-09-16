const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
  

  const embed = new Discord.MessageEmbed()
  .setTitle(`**Awatar** ${user.tag}`)
  .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
  .setColor(0x1d1d1d)
  .setImage(avatar)
  
  return message.channel.send(embed);
}

exports.help = {
  name: "poka",
  description: "pokazuje awatara",
  usage: "poka [@user | user ID]",
  example: "poka @MaTiD#0001 \navatar"
}

exports.conf = {
  aliases: ["icon", "pfp", "ava"],
  cooldown: 5
}