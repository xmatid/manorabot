module.exports = {
    name: 'www',
    description: "Ta komenda pokazuje link do storny internetowej MaTiDa",
    execute(message, args){
        message.channel.send("**Podaję link do strony...**");
        message.channel.send("https://serwermatida.000webhostapp.com/");
    }
}