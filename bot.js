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

    if(message.author.id == '416429218960769026'){
        if (message.content.startsWith("!openduolingo"))
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Ethan, welcome to the duolingo app. I'll be coming for the rest of you soon hehe. *Walksaway*",
                color: 44678,
                fields: []
            }
        })
    } else if (message.content.startsWith("!openduolingo")) {
        message.channel.send({embed: {
            title: "Duolingo-Chan",
            description: "Sorry, but you have not installed the app yet.",
            color: 44678,
            fields: []
            }
        })
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
