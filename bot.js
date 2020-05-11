const Discord = require('discord.js');
const bot = new Discord.Client();
const mysql = require("mysql");

var con = mysql.createConnection({
    host: process.env.SQL_HOST,
    user: process.env.SQL_NAME,
    password: process.env.SQL_PASSWORD,
    database: process.env.SQL_DATABASE
});

con.connect(err => {
    if(err) throw err;
    console.log("Connected to database.");
});

bot.on('message', async message => {
    const personA = message.guild.members.random();
    const personB = message.guild.members.random();

    theMessage = message.content.toLowerCase();

    if(message.author.bot) return;

    if (theMessage.startsWith("?admin xp add") && message.author.id == "416429218960769026"){

        message.channel.send({embed: {
            author: {
                name: "SCP-079 [Admin Handler]",
                icon_url: "https://vignette.wikia.nocookie.net/villains/images/b/b8/SCP-079HD.jpg/revision/latest?cb=20180428210516"
            },
            description: "Successfully added 300 XP to " + message.author,
            color: 9807270,
            fields: []
            }
       })

       message.channel.send({embed: {
        author: {
            name: "Croiter the Banker",
            icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScl1wfECzdCt8R_hoaH0rg33RxYM-RaW26IphvGKGVK2MiaMlrHA&s"
        },
        description: message.author + "\n\nYou have leveled up to level 2! You have recieved 25 Credits to spend in ?shop",
        color: 9807270,
        fields: []
        }
        })
    } 
    else if (theMessage.startsWith("?admin xp add"))
    {
        message.channel.send({embed: {
            author: {
                name: "SCP-079 [Admin Handler]",
                icon_url: "https://vignette.wikia.nocookie.net/villains/images/b/b8/SCP-079HD.jpg/revision/latest?cb=20180428210516"
            },
            description: message.author + ", You are not an admin of this bot.",
            color: 9807270,
            fields: []
            }
       })
    }
    
    if (theMessage.startsWith("?summon olivia")){

       message.channel.send({embed: {
        author: {
            name: "THE OVERSEERER",
            icon_url: "https://vignette.wikia.nocookie.net/zimwiki/images/d/d2/Girdog.png/revision/latest/scale-to-width-down/340?cb=20080313164837"
        },
        description: <@408822490022805504>, "YOU HAVE BEEN SUMMONED BY THE OVERSEERER!",
        color: 9807270,
        fields: []
        }
        })
    }

    if (theMessage.startsWith("?shop")){

       message.channel.send({embed: {
        author: {
            name: "Croiter the Banker",
            icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScl1wfECzdCt8R_hoaH0rg33RxYM-RaW26IphvGKGVK2MiaMlrHA&s"
        },
        description: message.author + "\n\nSorry! The shop is is construction right now.",
        color: 9807270,
        fields: []
        }
        })
    } 

    if (theMessage.startsWith("?admin event duel") && message.author.id == "416429218960769026"){

        message.channel.send({embed: {
            author: {
                name: "Zeen the Crucible Master",
                icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSMXOY-1KOQE-5zLxpeDVjCSTZmPbdD3JoaUT_NoyD4BGp8vk&s"
            },
            description: "It's event time Platners! <@416429218960769026> and " + personA + " have been selected to fight for 600 XP. \n\nYou can either pick to steal or share. If both Platners decide to share, each player will recieve 300 XP. If one Platner decides to steal, and the other shares, the person who steals will recieve the 600 XP. If both Platners steal, no XP will be distributed. \n\nBoth Platners have recieved a dm to decide. Do not message your answer in this channel. Once both players select an option, a winner will be decided. Expires in 1 hour.\n\n['Bot Note: In Development Command. Testing is enabled.']",
            color: 15158332,
            fields: [
                {
                    name: '?duel share',
                    value: '50% Chance to recieve half the XP and 50% chance to lose it all.',
                },
                {
                    name: '?duel steal',
                    value: '50% Chance to recieve all the XP and 50% chance to lose it all.',
                },
            ]
            }
       })
    } 
    else if (theMessage.startsWith("?admin event duel"))
    {
        message.channel.send({embed: {
            author: {
                name: "SCP-079 [Admin Handler]",
                icon_url: "https://vignette.wikia.nocookie.net/villains/images/b/b8/SCP-079HD.jpg/revision/latest?cb=20180428210516"
            },
            description: message.author + ", You are not an admin of this bot.",
            color: 9807270,
            fields: []
            }
       })
    }

    if (theMessage.startsWith("?duel share"))
    {
        message.channel.send({embed: {
            author: {
                name: "Zeen the Crucible Master",
                icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSMXOY-1KOQE-5zLxpeDVjCSTZmPbdD3JoaUT_NoyD4BGp8vk&s"
            },
            description: message.author + "Do not respond in this channel! \n\n['Bot Note: In Development Command. Testing is enabled.']",
            color: 15158332,
            fields: []
            }
       })
    } 

    if (theMessage.startsWith("?duel steal"))
    {
        message.channel.send({embed: {
            author: {
                name: "Zeen the Crucible Master",
                icon_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwSMXOY-1KOQE-5zLxpeDVjCSTZmPbdD3JoaUT_NoyD4BGp8vk&s"
            },
            description: message.author + "Do not respond in this channel! \n\n['Bot Note: In Development Command. Testing is enabled.']",
            color: 15158332,
            fields: []
            }
       })
    } 

    if (theMessage.startsWith("?xp"))
    {
        message.channel.send({embed: {
            author: {
                name: "REDACTED",
                icon_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Blank_square.svg/1024px-Blank_square.svg.png"
            },
            description: message.author + "You currently have: 0 XP.",
            color: 15158332,
            fields: []
            }
       })
    } 
        
});   

bot.on('ready', () => {
    bot.user.setGame('IN DEV BOT!')
});

bot.login(process.env.BOT_TOKEN);
