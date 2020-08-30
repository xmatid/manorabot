module.exports = {
    name: 'dajmirole',
    description: "Ta komenda daje podstawową role",
    execute(message, args){
        
        if(message.member.roles.cache.has('709780848123314236')){
            message.channel.send('Już masz role :D')
        } else {
            message.channel.send('Widzę że nie masz roli, dobrze że się upominasz, masz swoją role :DD');}
            message.member.roles.add('709780848123314236').catch(console.error);
        }
}