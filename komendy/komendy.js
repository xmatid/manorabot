module.exports = {
    name: 'komendy',
    description: "Ta komenda pokazuje wszystkie komendy w bocie",
    execute(message, args){
        message.channel.send("```Wszyskie komendy jakie obsługuje bot (lista będzie aktualizowana wraz z botem):```");
        message.channel.send("**-dajmirole =** *daje rolę Członek Serwera*");
        message.channel.send("**-najnowszyfilm =** *Pokazuje najnowszy film MaTiDa*");
        message.channel.send("**-omatidzie =** *NAJLEPSZA KOMENDA MUSISZ WPISAĆ*");
        message.channel.send("**-youtube =** *Daje link do kanału MaTiDa na YT*");
        message.channel.send("**-www =** *Daje link do strony internetowej serwera*");
    }

}