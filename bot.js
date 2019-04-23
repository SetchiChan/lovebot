const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
    const vartom = message.guild.members.random();
    const varnom = message.guild.members.random();
    const varhom = message.guild.members.random();

    if (message.content.startsWith("Duolingo" || "duolingo")) {
        message.channel.send("Have you learned your spanish?... *Holds a bat ready*");
    }

    //Easter Event

    const userId = message.guild.members.find(m => m.id === "416429218960769026");

    if(message.content.startsWith("!openduolingo")){
        if (message.author.id == '16429218960769026'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Ethan, welcome to the Duolingo app. w̧e̟͙̬̮̦l͏͎̯c̵͚͔ͅo̰͈̼̭̟m̱͚͕͝é̹̫ ͕t͇̪̭̭̫͍o̶̹̭̦̥̩ͅ ͉̗͇̥̝͢t̡̫̻h̸͈͔̰͖͎ͅͅe ̶͉̞D̹̞̳u͏̱̫͇̳o҉̟̜̮l͕̥̯̻̀i̮̤̩̤̫n͖̳̥ͅg͖͖͖̬̲͓o̭ ̰͎̬͍͍͢ͅa͉p̬̥̖̰̩̩p.̺̜̞͕̜̀ ̧̜̺͕̲̤͕̲I̫͍̭ ̞̤̮a̪̪̺͍͟m ͢c̟̼̫̝̤̩̼͝u͙̭r̳͉̕r̦̘̻̯͇̟ͅe͉͇̫̪̣n̰̝t̳͓ͅl͎y͚̲̤̠̲͙̙ ̳͙̱̥͍͎̟b̲̟̜ẹ͖̘̯̕i̬̳̘͎̜n̞̙̗̗̱͜g͚͕̠̠ ͚͟b̧̩̟̱̤ui̗̖̜̙͖̰l̺̟͔̳̖t͙͖̱̦̲͍͍ ҉̣͎̫b͢ỵ͓̬͇̘̜͚ ̞̟ṃ̶̩̰̞͔̦̺y̧ ͉͡m͟a̱s͎͇ṱ͎͢e̼͕̻̯̫͠r̛. ͚̹͖͘P̨͉͇̦̬͈̤l̵̗e̬̬a̠s̛e ͍̣̟͝w͍̟͖̞a̵̗͔̖̲i͕̫͈͠t͇̠͕̬ ̴̦̦̹̯͖̯̪ṵn̯t̢i̥̩̣̝͓͘l ͞h͚̩e̴͍͚͕͉̗̬̩ ̦̱̯͚͇̰h̖a҉̺̪̙s̨̩̩̻̳̗̝̦ ͜f̳̣̙ͅͅi̙̦͙̗͖̤͝ńi̤͇̙͓̦̖̱̕s̯̩͈h̛͙̪̩̬̟e͙͉͟d̴̹̳̥ ̜͙̻͇̬̠m̡̗̳̩͓͍̬̣y̨̟̳̝̙̟̱ ͜c͉̼͖̹̣o͇ͅr̪̙̲͎ę̭̯͇̫ ͓̤͇̣̞͠f̘̭̲̤̞͢ṷ̮͈̩͎͈̞͟n͔c̵̥̜̠t̮̱̙͉i̟̱̟̭̹̜͖ǫ̙͈̝n͕̙ͅs͜.̸̻̦͎̹̬",
                color: 44678,
                fields: []
            }
        })
        } else if (message.author.id == '408822490022805504'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Olivia, welcome to the Duolingo app. I am currently being built by my master. Please wait until he has finished my core functions.",
                color: 44678,
                fields: []
                }
            })
        } else if (message.author.id == '268519886328692737'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Marissa, welcome to the Duolingo app. I am currently being built by my master. Please wait until he has finished my core functions.",
                color: 44678,
                fields: []
                }
            })
        } else if (message.author.id == '196593261828243456'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Mercedes, welcome to the Duolingo app. I am currently being built by my master. Please wait until he has finished my core functions.",
                color: 44678,
                fields: []
                }
            })
        } else if (message.author.id == '340630936972689408'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "w̧e̟͙̬̮̦l͏͎̯c̵͚͔ͅo̰͈̼̭̟m̱͚͕͝é̹̫ ͕t͇̪̭̭̫͍o̶̹̭̦̥̩ͅ ͉̗͇̥̝͢t̡̫̻h̸͈͔̰͖͎ͅͅe ̶͉̞D̹̞̳u͏̱̫͇̳o҉̟̜̮l͕̥̯̻̀i̮̤̩̤̫n͖̳̥ͅg͖͖͖̬̲͓o̭ ̰͎̬͍͍͢ͅa͉p̬̥̖̰̩̩p.̺̜̞͕̜̀ ̧̜̺͕̲̤͕̲I̫͍̭ ̞̤̮a̪̪̺͍͟m ͢c̟̼̫̝̤̩̼͝u͙̭r̳͉̕r̦̘̻̯͇̟ͅe͉͇̫̪̣n̰̝t̳͓ͅl͎y͚̲̤̠̲͙̙ ̳͙̱̥͍͎̟b̲̟̜ẹ͖̘̯̕i̬̳̘͎̜n̞̙̗̗̱͜g͚͕̠̠ ͚͟b̧̩̟̱̤ui̗̖̜̙͖̰l̺̟͔̳̖t͙͖̱̦̲͍͍ ҉̣͎̫b͢ỵ͓̬͇̘̜͚ ̞̟ṃ̶̩̰̞͔̦̺y̧ ͉͡m͟a̱s͎͇ṱ͎͢e̼͕̻̯̫͠r̛. ͚̹͖͘P̨͉͇̦̬͈̤l̵̗e̬̬a̠s̛e ͍̣̟͝w͍̟͖̞a̵̗͔̖̲i͕̫͈͠t͇̠͕̬ ̴̦̦̹̯͖̯̪ṵn̯t̢i̥̩̣̝͓͘l ͞h͚̩e̴͍͚͕͉̗̬̩ ̦̱̯͚͇̰h̖a҉̺̪̙s̨̩̩̻̳̗̝̦ ͜f̳̣̙ͅͅi̙̦͙̗͖̤͝ńi̤͇̙͓̦̖̱̕s̯̩͈h̛͙̪̩̬̟e͙͉͟d̴̹̳̥ ̜͙̻͇̬̠m̡̗̳̩͓͍̬̣y̨̟̳̝̙̟̱ ͜c͉̼͖̹̣o͇ͅr̪̙̲͎ę̭̯͇̫ ͓̤͇̣̞͠f̘̭̲̤̞͢ṷ̮͈̩͎͈̞͟n͔c̵̥̜̠t̮̱̙͉i̟̱̟̭̹̜͖ǫ̙͈̝n͕̙ͅs͜.̸̻̦͎̹̬",
                color: 44678,
                fields: []
                }
            })
        } else {
            message.reply({embed: {
                title: "Duolingo-Chan",
                description: "An error has occured. Please ping Ethan if you'd like to join my game. :)",
                color: 44678,
                fields: []
                }
            })
        }
    }

    //Pokecord crpa
    if (message.content.startsWith("asdasdasdasd")) {
       message.channel.send({embed: {
            title: "A wild pokémon has appeared!",
            description: "Guess the pokémon and type p!catch <pokémon> to catch it!",
            color: 44678,
            image: {
                 "url": "https://pics.me.me/lewded-pikachu-37517665.png"
               },
            fields: []
            }
       })
    }
    
    if (message.content.startsWith("p!catch lewd pikachu")) {
        message.channel.send("Congratulations <@416429218960769026> You caught a level 69 lewd Pikachu!");
    }

});     

bot.on('ready', () => {
    bot.user.setGame('ave you learned your spanish today?')
})


bot.login(process.env.BOT_TOKEN);
