module.exports = {
    name: 'dajmirole',
    description: "Ta komenda daje podstawową role",
    execute(message, args){
        
        if(message.member.roles.cache.has('709780848123314236')){
            message.channel.send('__**Już masz role :D**__')
        } else {
            message.channel.send('__**Widzę że nie masz roli, dobrze że się upominasz, masz swoją role :DD**__');}
            message.member.roles.add('709780848123314236').catch(console.error);
        }
}