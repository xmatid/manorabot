module.exports = {
    name: 'youtube',
    description: "Ta komenda pokazuje link do kanału MaTiDa",
    execute(message, args){
        message.channel.send("https://www.youtube.com/channel/UCtNZQakkLDJSwcb2g6E8tZg");
    }
}