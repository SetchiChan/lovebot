const Discord = require('discord.js');
const Storage = require('discord-storage').Storage;
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
    const vartom = message.guild.members.random();
    const varnom = message.guild.members.random();
    const varhom = message.guild.members.random();

    if(message.content.startsWith("?lovekun mercedes")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "Merecedes's perfect match is... " + vartom + ".",
            color: 15077906,
            fields: []
            }
       })
    }
});     

bot.once('ready', () => {
    bot.storage = new Storage(bot, '509890599093141516');
    bot.storage.sync().then(() => {
        channels.get('509890599093141516').send('Im gonna evolve');
    });
});

bot.on('ready', () => {
    bot.user.setGame('WIP...')
})

bot.login(process.env.BOT_TOKEN);
