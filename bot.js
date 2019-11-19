const Discord = require('discord.js');
const bot = new Discord.Client();
const Storage = require('discord-storage').Storage;

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.once('ready', () => {
	bot.storage = new Storage(bot, '537127370423926844');
	bot.storage.sync().then(() => {
		bot.channel.get('537127370423926844').send("AHHH?");
	});
});

bot.on('ready', bot => {
    con.connect(err => {
        if(err) throw err;
        bot.channels.get('').send(err);
    });
})

bot.on('message', async message => {
    const randomMember = message.guild.members.random();

    if(message.content.startsWith("?status")){
        message.channel.send({embed: {
            color: 0x0099ff,
            title: 'Status of All Characters',
            description: 'You can see who is alive or dead here!',
            fields: [
                {
                    name: 'Earth-Chan',
                    value: 'Imortal Object',
                },
                {
                    name: 'Love-Chan',
                    value: 'Imortal Object',
                },
                {
                    name: 'Duolingo-Chan',
                    value: 'Alive',
                },
                {
                    name: 'Chrome-Chan',
                    value: 'Alive',
                },
                {
                    name: 'More Characters will be added...',
                    value: '...',
                },
            ],
        }
        });     
    }

    if(message.content.startsWith("?testserver")){
        message.channel.send("I am running on " + bot.guilds.size);
    }


    if(message.content.startsWith("?guide")){
        message.channel.send({embed: {
            color: 0x0099ff,
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            title: 'Guide',
            description: 'Hey human! So if you need help with the heck this is, you can read this.',
            fields: [
                {
                    name: 'Characters',
                    value: 'All characters here are somewhat viable as a partner. They all play their roles (ex: Love-kun is for giving love.) and you are able to grow your relationship with them. Your relationship is indicated by hearts.',
                },
                {
                    name: 'Story',
                    value: 'You are currently in the 1st arc. The story progresses for all partcipants and affects future events. These events can lead to the possible death or change in a bot.',
                },
                {
                    name: 'Personality',
                    value: 'Personality is based of how you treat the characters in this story. Personalites are: Netural, Kind, Mean, Lewd, Insane, Depressed, Disgrace. These affect how bots converse with you.',
                },
                {
                    name: 'Luck',
                    value: 'Luck is used to trigger random dialogue when talking with characters. Can be increased by certain events or items.',
                },
                {
                    name: 'Speechcraft',
                    value: 'Speechcraft can be used to convince characters when you are given a choice. The higher your speechcraft, the higher the chance you can access an option. Can be increased by talking to certain characters.',
                },
            ],
        }
        });     
    }

    if (message.content.startsWith("sssstestcook")){
        editedmessage = message.content.slice (6);

        bot.msgs [message.author.user] = {
            message: editedmessage
        }
        fs.writeFile ("./msgs.json", JSON.stringify(bot.msgs, null, 4), err=> {
            if (err) throw err;
            message.channel.send ("message written");
        });
    }
});     

bot.on('ready', () => {
    bot.user.setGame('IM READY!!!')
})


bot.login(process.env.BOT_TOKEN);
