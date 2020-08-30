module.exports = {
    name: 'komendy',
    description: "Ta komenda pokazuje wszystkie komendy w bocie",
    execute(message, args){
        message.channel.send("Wszyskie komendy jakie obsługuje bot (lista będzie aktualizowana wraz z botem): -dajmirole = daje rolę Członek Serwera, -najnowszyfilm = Pokazuje najnowszy film MaTiDa, -omatidze = NAJLEPSZA KOMENDA MUSISZ WPISAĆ -youtube = Daje link do kanału MaTiDa na YT -www = Daje link do strony internetowej serwera");
    }
}