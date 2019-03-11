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
    if (message.content.startsWith("!bunny")) {
        message.channel.send("The Easter Bunny made " + vartom + " and " + varnom + " fall in love.");
    }
    
    if (message.content.startsWith("!mercedes")) {
        message.channel.send("Mercedes opened the easter egg and found a note within it. It read that she will fall in love with " + vartom + ".");
    }

    if (message.content.startsWith("!ethan")) {
        message.channel.send("Even though my birthday is on April, everyone will forget it anyways. Also nothing new here.");
    }

    if (message.content.startsWith("!emily")) {
        message.channel.send("Emily stairs into " + vartom + " eyes, then throws the easter bunny at them!");
    }

    if (message.content.startsWith("!olivia")) {
        message.channel.send("Olivia did a threeway with the easter bunny and " + vartom + ".");
    }

    if (message.content.startsWith("!daniil")) {
        message.channel.send("Daniil killed the easter bunny and gave the corpse to " + vartom + ".");
    }

    if (message.content.startsWith("!merissa")) {
        message.channel.send("Merissa sent the lewd bunny to " + vartom + ".");
    }

    if (message.content.startsWith("!brian")) {
        message.channel.send("Brian x " + vartom + ". (I was lazy to give you one brian)");
    }

    if (message.content.startsWith("!dylan")) {
        message.channel.send("Dylan-sama gave their eggs to " + vartom + " and they ate them.");
    }

    //General Commands
    if (message.content.startsWith("!easterkink")) {
        message.reply(" wants to have " + vartom + " eggs if you know what I mean.");
    }

    if (message.content.startsWith("!easterkinkwitholivia")) {
        message.reply(" wants to have <@408822490022805504>'s juicy eggs");
    }

    if (message.content.startsWith("!easterhunt")) {
        message.reply(" spent their time with " + varnom + " on a easter night~. Ew love.");
    }

    if (message.content.startsWith("!naughtyeaster")) {
        message.channel.send(vartom + " had " + varnom + "'s chocolate bunny if you know what I mean. *wink* ");
    }

    //Mentions
    if (message.content.startsWith("mercedes")) {
        message.channel.send("<@196593261828243456> got egged.");
    }

    if (message.content.startsWith("ethan")) {
        message.channel.send("<@416429218960769026> is always forgotten.");
    }

    if (message.content.startsWith("marissa")) {
        message.channel.send("<@268519886328692737> lewded the easter bunny. oh gOD. NOO NOT THE R34.");
    }

    if (message.content.startsWith("death")) {
        message.channel.send("<@297867268161798144> is gagging the easter bunny.");
    }

    if (message.content.startsWith("olivia")) {
        message.channel.send("Bunny-Sama~ give me your big juicy egg-sama~");
    }
    
    //Easter Event

    const userId = message.guild.members.find(m => m.id === "416429218960769026");

    if(message.author.id == '416429218960769026'){
        message.channel.send("Ooof!")
    }

    if (message.content.startsWith("!startevent"))
    message.channel.send({embed: {
        title: "Easter Egg Hunt!: Challange #1",
        description: "@everyone This is a test message for challanges. Please ignore this.",
        color: 44678,
        fields: []
        }
   })

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
    bot.user.setGame('Laying the Easter Love')
})


bot.login(process.env.BOT_TOKEN);
