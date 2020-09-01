module.exports = {
    name: 'komendy',
    description: "Ta komenda pokazuje wszystkie komendy w bocie",
    execute(message, args){
        message.channel.send("```Wszyskie komendy jakie obsługuje bot (lista będzie aktualizowana wraz z botem):```");
        message.channel.send("__**-dajmirole =**__ daje rolę Członek Serwera");
        message.channel.send("__**-najnowszyfilm =**__ Pokazuje najnowszy film MaTiDa");
        message.channel.send("__**-omatidzie =**__ NAJLEPSZA KOMENDA MUSISZ WPISAĆ");
        message.channel.send("__**-youtube =**__ Daje link do kanału MaTiDa na YT");
        message.channel.send("__**-www =**__ Daje link do strony internetowej serwera");
    }

}