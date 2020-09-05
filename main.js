const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

const queue = new Map();

const commandFiles = fs.readdirSync('./komendy/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./komendy/${file}`);

    client.commands.set(command.name, command);
}


client.once('ready', () => {
    console.log('Bot MaTiDa jest online!');
    client.user.setActivity('każdy Twój ruch', { type: "WATCHING"}).catch(console.error);
});


client.on('message', message =>{
   if(!message.content.startsWith(prefix) || message.author.bot)  return;  

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase(); 

   if(command === 'youtube'){
    client.commands.get('youtube').execute(message, args);
   }
   else if (command == 'omatidzie'){
    client.commands.get('omatidzie').execute(message, args);  
   } 
    else if (command == 'dajmirole'){
        client.commands.get('dajmirole').execute(message, args);}
        
    else if (command == 'najnowszyfilm'){
         client.commands.get('najnowszyfilm').execute(message, args);}
    else if (command == 'komendy'){
        client.commands.get('komendy').execute(message, args);}
    else if (command == 'www'){
        client.commands.get('www').execute(message, args);}
    else if (command == 'hubcio'){
        client.commands.get('hubcio').execute(message, args);}
});
client.on("message", async message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const serverQueue = queue.get(message.guild.id);
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase(); 
  
    if (message.content.startsWith(`${prefix}youtube`)) {
        youtube(message, serverQueue);
        return;
    } else if (message.content.startsWith(`${prefix}omatidzie`)) {
      omatidzie(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}dajmirole`)) {
      dajmirole(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}najnowszyfilm`)) {
      najnowszyfilm(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}komendy`)) {
      komendy(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}www`)) {
      www(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}hubcio`)) {
      hubcio(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}play`)) {
      play(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}skip`)) {
      skip(message, serverQueue);
      return;
    } else if (message.content.startsWith(`${prefix}stop`)) {
      stop(message, serverQueue);
      return;
    } else {
      message.channel.send("**Wpisz poprawną komendę!** Jeżeli nie znasz komend, *wpisz -komendy*");
    } 
  
  });
client.login(process.env.token)