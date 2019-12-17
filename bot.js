const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const TOKEN = "x";

bot.on('message', async message => {
    //Example
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
       });
    }

});     

bot.on('ready', () => {
    bot.user.setGame('WIP? crash?')
})


bot.login(process.env.BOT_TOKEN);
