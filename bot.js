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
    if (message.content.startsWith("!threeway")) {
        message.channel.send(vartom + "'s fantasy harem involves " + varnom + " and " + varhom + ".");
    }
    
    if (message.content.startsWith("!mercedes")) {
        message.channel.send("Mercedes found somebody to love and it was " + vartom + ".");
    }

    if (message.content.startsWith("!ethan")) {
        message.channel.send("Ethan will be eternally forever alone. Contact him at @setchichan if you need a fourth wheel.");
    }

    if (message.content.startsWith("!emily")) {
        message.channel.send("Emily cought " + vartom + " writing her a love letter.");
    }

    if (message.content.startsWith("!olivia")) {
        message.channel.send("Olivia takes out the gag ball. She wants to put it on " + vartom + ".");
    }

    if (message.content.startsWith("!daniil")) {
        message.channel.send("Daniil confessed to " + vartom + " and died.");
    }

    if (message.content.startsWith("!merissa")) {
        message.channel.send("Merissa sent something kinky to " + vartom + ".");
    }

    if (message.content.startsWith("!brian")) {
        message.channel.send("Brian found (generic love message) and loved " + vartom + ".");
    }

    //General Commands
    if (message.content.startsWith("!propose")) {
        message.reply(" and proposed to " + vartom + " and took their hand in marraige.");
    }

    if (message.content.startsWith("!valentines")) {
        message.channel.send(vartom + " got a kiss from " + varnom + ". How sweet <3~");
    }

    if (message.content.startsWith("!naughty")) {
        message.channel.send(vartom + " and " + varnom + " were doing something **naughty** under the light of the moon. :rose: ");
    }

    if (message.content.startsWith("!lonely")) {
        message.channel.send("Don't worry... " + vartom + " is thinking about you.");
    }

    //Mentions
    if (message.content.startsWith("mercedes")) {
        message.channel.send("<@196593261828243456> got annoyed you pinged her.");
    }

    if (message.content.startsWith("ethan")) {
        message.channel.send("<@416429218960769026> wants to ruin your relationship.");
    }

    if (message.content.startsWith("marissa")) {
        message.channel.send("<@268519886328692737> lewded everything on this discord.");
    }

    if (message.content.startsWith("death")) {
        message.channel.send("<@297867268161798144> is gagging the children.");
    }

    if (message.content.startsWith("olivia")) {
        message.channel.send("ONI-CHAN!~");
    }
    
    if (message.content.startsWith("yes")) {
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
    bot.user.setGame('Hentai Love')
})


bot.login(process.env.BOT_TOKEN);
