const Discord = require('discord.js');

const ytdl = require('ytdl-core');

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


client.on('message', async message =>{
   if(!message.content.startsWith(prefix) || message.author.bot)  return;  

   const args = message.content.slice(prefix.length).split(/ +/);
   const command = args.shift().toLowerCase(); 

   if(message.content.startsWith(`${prefix}play`)){
       const voiceChannel = message.member.voice.channel
       if(!voiceChannel) return message.channel.send("Napierw muszisz być na kanale głosowym aby słuchać dobrych kawałków!")
       const permissions = voiceChannel.permissionsFor(message.client.user)
       if(!permissions.has('CONNECT')) return message.channel.send("Nie mam uprawnień aby połączyć się z tym kananłem.")
       if(permissions.has('SPEAK')) return message.channel.send("Nie mam uprawnień aby grać na tym kanale.")
       try {
           var connection = await voiceChannel.join()
        } catch (error) {
            console.log(`Wystąpił błąd podczas dołączania do kanału głosowego: ${error}`)
            return message.channel.send(`Wystąpił błąd podczas dołączania do kanału głosowego: ${error}`)
        }

        const dispatcher = connection.play(ytdl(args[1]))
        .on('finish', () => {
            voiceChannel.leave()
        })
        .on('error', error => {
            console.log(error)
        })
        dispatcher.setVolumeLogarithmic(5 / 5)
   } else if (message.content.startsWith(`${prefix}stop`)){
       if(!message.member.voice.channel) return message.channel.send("Musisz być na kanale głosowym aby móc mnie zatrzymać.")
       message.member.voice.leave
       return undefined
   }

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
});

client.login(process.env.token)
