module.exports = {
    name: 'najnowszyfilm',
    description: "Ta komenda pokazuje link do najnowszego filmu MaTiDa",
    execute(message, args){
        message.channel.send("**Sprawdzanie kanału MaTiDa...**");
        message.channel.send("https://www.youtube.com/watch?v=nf7IQfENowc");
    }
}