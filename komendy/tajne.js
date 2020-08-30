module.exports = {
    name: 'tajne',
    description: "tajna komenda",
    execute(message, args){
        
        if(message.member.roles.cache.has('553601744026861568')){
            message.channel.send('MaTiD to debil')
        } else {
            message.channel.send('Nie masz uprawnień do używania tej komendy :(');}
        }
}