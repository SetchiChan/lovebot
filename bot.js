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

    const Ethan = '416429218960769026';
    const Mercedes = '';
    const Daniel = '';
    const Olivia = ''
    const Dylan = '';
    const Marissa ='';

    if(message.content.startsWith("!Status")){
        message.channel.send({embed: {
            color: 0x0099ff,
            title: 'Status of All Characters',
            description: 'You can see who is alive or dead here!',
            thumbnail: {
                url: 'https://images.pexels.com/photos/953214/pexels-photo-953214.jpeg?cs=srgb&dl=backgrounds-blank-blue-953214.jpg&fm=jpg',
            },
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
    
    //Earth-chan
    if(message.content.startsWith("!lovekun ship")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "Hey there love birds~ " + vartom + " and " + varnom + " are perfect together. <3",
            color: 44678,
            fields: []
            }
       })
    }

    if (message.isMentioned(client.user)) {
        message.reply({embed: {
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: "Yes? Oh! Please use !command to see the available commands!",
            color: 44678,
            fields: []
            }
       })
    }
    
    //Love-Chan
    if(message.content.startsWith("!command")){
        message.channel.send({embed: {
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: "Oh sorry... but Ethan didn't fix this yet. My bad.",
            fields: []
            }
       })
    }

    if(message.content.startsWith("!lovekun ethan")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "Hmm, Ethan is a thot. He has no love.",
            color: 15077906,
            image: {
                 "url": "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
               },
            fields: []
            }
       })
    }

    if(message.content.startsWith("!lovekun mercedes")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "Merecedes's perfect match is... " + vartom + ".",
            color: 15077906,
            image: {
                 "url": "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
               },
            fields: []
            }
       })
    }

    if(message.content.startsWith("!lovekun marissa")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "Marissa's pet is " + vartom + ".",
            color: 15077906,
            image: {
                 "url": "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
               },
            fields: []
            }
       })
    }

    //Duolingo-Chan Stuff
    if(message.content.startsWith("!openduolingo")){
        if (message.author.id == Ethan){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Welcome to Duolingo Daniel!",
                color: 44678,
                image: {
                     "url": "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                   },
                fields: []
                }
           })
        } else if (message.author.id == '408822490022805504'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Olivia, welcome to the Duolingo app. I am currently being built by my master. Please wait until he has finished my core functions.",
                color: 44678,
                fields: []
                }
            })
        } else if (message.author.id == '268519886328692737'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Marissa, welcome to the Duolingo app. I am currently being built by my master. Please wait until he has finished my core functions.",
                color: 44678,
                fields: []
                }
            })
        } else if (message.author.id == '196593261828243456'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Hello Mercedes, welcome to the Duolingo app. I am currently being built by my master. Please wait until he has finished my core functions.",
                color: 44678,
                fields: []
                }
            })
        } else if (message.author.id == '340630936972689408'){
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Welcome to Duolingo Daniel!",
                color: 44678,
                image: {
                     "url": "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                   },
                fields: []
                }
           })
        } else {
            message.channel.send({embed: {
                title: "Duolingo-Chan",
                description: "Welcome to Duolingo Daniel!",
                color: 44678,
                image: {
                     "url": "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                   },
                fields: []
                }
           })
        }
    }

    //Google-Chan
    if(message.content.startsWith("!openchrome")){
        if (message.author.id == '416429218960769026'){
            message.channel.send({embed: {
                title: "Google-Chan",
                description: "Thank you ethan for installing Google Chrome!",
                color: 44678,
                image: {
                     "url": "https://i.imgur.com/yTGegZ7.png"
                   },
                fields: []
                }
           })
        } else {
            message.reply({embed: {
                title: "Google-Chan",
                description: "Hello new user! Welcome to Google!",
                color: 44678,
                image: {
                     "url": "https://i.imgur.com/yTGegZ7.png"
                   },
                fields: []
                }
           })
        }
    }

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
       })
    }

});     

bot.on('ready', () => {
    bot.user.setGame('Welcome to the internet!')
})


bot.login(process.env.BOT_TOKEN);
