const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = '-';

const fs = require('fs');

client.commands = new Discord.Collection();

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
});

client.login(process.env.token)
