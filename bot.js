const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async message => {
    const personA = message.guild.members.random();
    const personB = message.guild.members.random();

    theMessage = message.content.toLowerCase();

    if(message.author.bot) return;

 
    if (theMessage.startsWith("?summon olivia")){

       message.channel.send({embed: {
        author: {
            name: "THE OVERSEERER",
            icon_url: "https://vignette.wikia.nocookie.net/zimwiki/images/d/d2/Girdog.png/revision/latest/scale-to-width-down/340?cb=20080313164837"
        },
        description: "<@408822490022805504>, YOU HAVE BEEN SUMMONED BY THE OVERSEERER!",
        color: 9807270,
        fields: []
        }
        })
    }
    
    if (theMessage.startsWith(bot.users.get("509555709583818754"))){

       message.channel.send({embed: {
        author: {
            name: "THE OVERSEERER",
            icon_url: "https://vignette.wikia.nocookie.net/zimwiki/images/d/d2/Girdog.png/revision/latest/scale-to-width-down/340?cb=20080313164837"
        },
        description: "Simp alert.",
        color: 9807270,
        fields: []
        }
        })
    }
        
});   

bot.on('ready', () => {
    bot.user.setGame('IN DEV BOT!')
});

bot.login(process.env.BOT_TOKEN);
