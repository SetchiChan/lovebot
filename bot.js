const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
    const vartom = message.guild.members.random();
    const varnom = message.guild.members.random();
    const varhom = message.guild.members.random();

    //Names
    if (message.content.startsWith("!threetoe")) {
        message.channel.send(vartom + " and " + varnom + " kissed " + varhom + " under the mistletoe.");
    }
    
    if (message.content.startsWith("!mercedes")) {
        message.channel.send("All Mercedes wants for christmas is... " + vartom + ".");
    }

    if (message.content.startsWith("!ethan")) {
        message.channel.send("All Ethan wants for christmas is... <@196593261828243456>.");
    }

    if (message.content.startsWith("!emily")) {
        message.channel.send("All Emily wants for christmas is... " + vartom + ".");
    }

    if (message.content.startsWith("!olivia")) {
        message.channel.send("All Olivia wants for christmas is... " + vartom + ".");
    }

    if (message.content.startsWith("!daniil")) {
        message.channel.send("All Daniil wants for christmas is... " + vartom + ".");
    }

    if (message.content.startsWith("!merissa")) {
        message.channel.send("All Merissa wants for christmas is... " + vartom + ".");
    }

    if (message.content.startsWith("!brian")) {
        message.channel.send("All Brian wants for christmas is... " + vartom + ".");
    }

    //General Commands
    if (message.content.startsWith("!mistletoe")) {
        message.reply(" and the person below them now have to kiss! :tanabata_tree: \n| \n↓");
    }

    if (message.content.startsWith("!hohoho")) {
        message.channel.send("I saw " + vartom + " kissing " + varnom + " under the christmas tree.");
    }

    if (message.content.startsWith("!naughty")) {
        message.channel.send(vartom + " and " + varnom + " were doing something **naughty** under the christmas tree. :rose: ");
    }

    //Mentions
    if (message.content.startsWith("mer")) {
        message.channel.send("<@196593261828243456> went SKEEEEEEE.");
    }

    if (message.content.startsWith("ethan")) {
        message.channel.send("<@416429218960769026> went wants to jingle your bells~.");
    }

    if (message.content.startsWith("marissa")) {
        message.channel.send("<@268519886328692737> lewded the christmas spirit.");
    }

    if (message.content.startsWith("death")) {
        message.channel.send("<@297867268161798144> is loli gagging.");
    }
    
    if (message.content.startsWith("god")) {
       message.channel.send({embed: {
            title: "A wild pokémon has appeared!",
            description: "Guess the pokémon and type p!catch <pokémon> to catch it!",
            color: 44678,
            image: {
                 "url": "https://vignette.wikia.nocookie.net/pokemon/images/f/fc/493Arceus.png/revision/latest?cb=20140329043000"
               },
            fields: []
            }
       })
    }

});     

bot.on('ready', () => {
    bot.user.setGame('Pokémon on 404720 servers!')
})


bot.login(process.env.BOT_TOKEN);
