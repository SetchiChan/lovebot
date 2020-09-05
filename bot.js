const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', async message => {
    const personA = message.guild.members.random();
    const personB = message.guild.members.random();
    const months = ["loli hentai", "milf hentai", "Sex taxi", "hentaihaven", "2 Nrad's, 1 Skies", "Sushi Ball", "some random hentai", "boku no pico"];
    const random = Math.floor(Math.random() * months.length);
    
    theMessage = message.content.toLowerCase();
    
    if(message.author.bot) return;

 
    if (theMessage.startsWith("?search")){

       message.channel.send({embed: {
        author: {
            name: "Hentai Collection",
            icon_url: "https://em.wattpad.com/5805a8cecaf4d55abeff1a8e6873b79468109dd2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4e333637417933573857343377513d3d2d352e313563366635633462363231326664373334343932313935373033362e6a7067"
        },
        description: "I recommend the hentai, " + months[random],
        color: 9807270,
        fields: []
        }
        })
    }
    
    if (theMessage.startsWith("?help")){

       message.channel.send({embed: {
        author: {
            name: "Hentai Collection",
            icon_url: "https://em.wattpad.com/5805a8cecaf4d55abeff1a8e6873b79468109dd2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4e333637417933573857343377513d3d2d352e313563366635633462363231326664373334343932313935373033362e6a7067"
        },
        description: "?search - gets a random hentai from Darkherozero83's hentai collection.",
        color: 9807270,
        fields: []
        }
        })
    }
        
});   

bot.on('ready', () => {
    bot.user.setGame('do ?help for help.')
});

bot.login(process.env.BOT_TOKEN);
