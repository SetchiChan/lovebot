const Discord = require('discord.js');
const bot = new Discord.Client();

const newUser = [];

const PREFIX = "'";
const TOKEN = "x";

bot.on('message', async message => {
    const vartom = message.guild.members.random();
    const varnom = message.guild.members.random();
    const varhom = message.guild.members.random();

    //Easter Event

    const Ethan = '416429218960769026';
    const Mercedes = '196593261828243456';
    const Daniel = '408822490022805504';
    const Olivia = '408822490022805504';
    const Dylan = '494974507283513362';
    const Marissa ='268519886328692737';

    if(message.content.startsWith("!status")){
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
    
    //Earth-Chan
    if (message.isMentioned(bot.user)) {
        message.reply({embed: {
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: "Yes? Oh! Please use !command to see the available commands!",
            color: 59431,
            fields: []
            }
       })
    }
    
    if(message.content.startsWith("!command")){
        message.reply({embed: {
            color: 59431,
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: 'Oh hey human! I see youre new here to this universe! Let me introduce you to some of my friends!',
            fields: [
                {
                    name: 'Love-Kun!',
                    value: 'He is pretty weird. He tends to be very perverted at times. Baka baka. Anyways, you can check out his command set by doing "!lovekun help"',
                },
                {
                    name: 'Chrome-Chan!',
                    value: 'Chrome-Chan is very smart. She knows like almost everything. She does... seem pretty mean at times... but you might get to like her. Use "!chromechan help" for her command set.',
                },
                {
                    name: 'Duolingo-Chan!',
                    value: 'Duolingo-Chan is very persistant for me to learn Spaceanese. I have too afterall... She will take Moon-Kun from me... Use "!duolingochan help" to check out her command set!',
                },
                {
                    name: 'And Finally... Me! Earth-Chan!',
                    value: 'Hey human! You live on me! Ill show you this universe and Ill try my best to guide you! Use "!earthchan help" to get my command list!',
                },
                {
                    name: 'Oh yeah, some general commands too!',
                    value: '"!command" shows available bot commands. "!status" shows the current status of all the bots here!',
                },
                {
                    name: '(PLEASE TYPE ALL COMMANDS IN LOWERCASE FORM SO IT WILL WORK)',
                    value: '.',
                },
            ],
        }
        }); 
    }

    if (message.content.startsWith("!earthchan help")) {
        message.reply({embed: {
            color: 59431,
            author: {
                name: "Earth-Chan",
                icon_url: "https://vignette.wikia.nocookie.net/virtualyoutuber/images/f/f2/EarthChan.jpg/revision/latest?cb=20180527004331"
            },
            description: 'Hey I see you want to explore this world! Here are my commands!',
            fields: [
                {
                    name: '!flirt earthchan [BROKEN/WIP]',
                    value: 'But Im a planet human... I dont think you can do that...',
                },
                {
                    name: 'MORE COMMANDS COMING SOON!',
                    value: '.',
                },
            ],
        }
        }); 
    }

    //Love-Chan
    if (message.content.startsWith("!lovekun help")) {
        message.reply({embed: {
            color: 15077906,
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: 'Hey there you naughty. Here are my commands~ UwU <3',
            fields: [
                {
                    name: '!lovekun ship',
                    value: 'Ships 2 lucky users on the discord...',
                },
                {
                    name: '!lovekun marriage',
                    value: 'Ships 2 lucky users on the discord...',
                },
                {
                    name: '!lovekun kink [BROKEN/WIP]',
                    value: 'The comand explains itself love~',
                },
                {
                    name: '!lovekun ethan',
                    value: 'Ships with nobody. again. He dosent deserve love.',
                },
                {
                    name: '!lovekun mercedes',
                    value: 'Who knows. Maybe destiny will find you two together.',
                },
                {
                    name: '!lovekun marissa',
                    value: 'Should I say more?',
                },
                {
                    name: '!lovekun daniel',
                    value: 'Hes lucky that I even put him here.',
                },
                {
                    name: 'MORE COMMANDS COMING SOON!',
                    value: '(Please mention me if you want to be added.)',
                },
            ],
        }
        }); 
    }

    if(message.content.startsWith("!lovekun ship")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: vartom + " and " + varnom + " kissing in a tree. K I S S I N G~",
            color: 15077906,
            fields: []
            }
       })
    }

    if(message.content.startsWith("!lovekun marriage")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "I pronounce " + vartom + " and " + varhom + " husband and wife (you choose!) Wow congratulations to them.",
            color: 15077906,
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
            fields: []
            }
       })
    }

    if(message.content.startsWith("!lovekun daniel")){
        message.channel.send({embed: {
            author: {
                name: "Love-Kun",
                icon_url: "https://pm1.narvii.com/6739/5589806a476247d5bd3052a4690bc19d176373cev2_hq.jpg"
            },
            description: "Daniel felt weird... It's like he was falling in love with " + vartom + ".",
            color: 15077906,
            fields: []
            }
       })
    }

    //Duolingo-Chan Stuff
    if (message.content.startsWith("!duolingochan help")) {
        message.reply({embed: {
            color: 9043806,
            author: {
                name: "Duolingo-Chan",
                icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
            },
            description: 'Ruega por tu vida en Español',
            fields: [
                {
                    name: '!duolingochan open [WIP]',
                    value: 'Time for your spanish lessons...',
                },
                {
                    name: 'MORE COMMANDS COMING SOON!',
                    value: '.',
                },
            ],
        }
        }); 
    }

    if(message.content.startsWith("!duolingochan open")){
        if (message.author.id == Ethan){
            message.channel.send({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Hey Ethan. Sup.",
                color: 9043806,
                fields: []
                }
           })
        } else if (message.author.id == Mercedes){
            message.channel.send({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Hey Mercedes. Wanna learn some korean you koreaboo.",
                color: 9043806,
                fields: []
                }
           })
        } else if (message.author.id == Marissa){
            message.channel.send({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Marissa... you missed an Italian lesson... You know what comes next.",
                color: 9043806,
                fields: []
                }
           })
        } else if (message.author.id == Olivia){
            message.channel.send({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Next time you miss a lesson Olivia... You'll meet Ethan's closet next time.",
                color: 9043806,
                fields: []
                }
           })
        } else if (message.author.id == Daniel){
            message.channel.send({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Daniel... hope you enjoy your note on the door...",
                color: 9043806,
                fields: []
                }
           })
        } else if (message.author.id == Dylan){
            message.channel.send({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Dylan. Congrats! You passed your spanish class!",
                color: 9043806,
                fields: []
                }
           })
        } else {
            message.reply({embed: {
                author: {
                    name: "Duolingo-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Hey, I noticed you're not signed up with Duolingo. Please contact Ethan if you'd like to join!",
                color: 9043806,
                fields: []
                }
           })
        }
    }

    //Google-Chan

    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    if (message.content.startsWith("!chromechan help")) {
        message.reply({embed: {
            color: 15924992,
            author: {
                name: "Chrome-Chan",
                icon_url: "https://i.imgur.com/yTGegZ7.png"
            },
            description: 'Lemme eat your ram.',
            fields: [
                {
                    name: '!chromechan open [WIP]',
                    value: 'Lets eat up all that tasty ram you have there!',
                },
                {
                    name: 'MORE COMMANDS COMING SOON!',
                    value: '.',
                },
            ],
        }
        }); 
    }

    if(message.content.startsWith("!chromechan task")){
        message.reply({embed: {
            color: 15924992,
            author: {
                name: "Ethan-Kun",
            },
            description: '(Dev note: Discord users will have status updated in the future. Once completed, your "personality" will alter how you interact with the bots and other users.)',
            fields: [],
        }
        }); 

        var finalnumber = getRandomInt(4);

            if (finalnumber == 0) {
                message.reply({embed: {
                    color: 15924992,
                    author: {
                        name: "Chrome-Chan",
                        icon_url: "https://i.imgur.com/yTGegZ7.png"
                    },
                    description: 'You fucked up.',
                    image: {
                        "url": "https://i.imgur.com/0rQMlJW.jpg"
                      },
                    fields: [],
                }
                }); 
            } else if (finalnumber == 1){
                trueorfales = true;
                message.reply({embed: {
                    color: 15924992,
                    author: {
                        name: "Chrome-Chan",
                        icon_url: "https://i.imgur.com/yTGegZ7.png"
                    },
                    description: 'You were seen trying to search for something... Chrome-Chan suggested something else.',
                    image: {
                        "url": "https://i.imgur.com/urIsap2.jpg"
                      },
                    fields: [],
                }
                }); 
            } else if (finalnumber == 3){
                trueorfales = true;
                message.reply({embed: {
                    color: 15924992,
                    author: {
                        name: "Chrome-Chan",
                        icon_url: "https://i.imgur.com/yTGegZ7.png"
                    },
                    description: '*You steal chrome-chans last ram stick.',
                    image: {
                        "url": "https://i.imgur.com/RbiX5v2.jpg"
                      },
                    fields: [],
                }
                }); 
            } else {
                message.reply({embed: {
                    color: 15924992,
                    author: {
                        name: "Ethan-Kun",
                    },
                    description: 'Yeah, if you are seeing this. This is an error.',
                    fields: [],
                }
            });
        }
    }


    //reset
    if(message.content.startsWith("!resetvar")){
        trueorfales = false;
        message.reply("reseted!");
    }

    if(message.content.startsWith("!chromechan open")){
        if (message.author.id == Ethan){
            message.channel.send({embed: {
                author: {
                    name: "Chrome-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Woo! Installed.",
                color: 15924992,
                fields: []
                }
           })
        } else {
            message.channel.send({embed: {
                author: {
                    name: "Chrome-Chan",
                    icon_url: "https://i.ytimg.com/vi/qRE_yx_S5nY/maxresdefault.jpg"
                },
                description: "Sorry user! A͏̫n̴̬̘̭̟̬̞ è̻̖̙͎͓̥ṟ̭̙͍͘r͏̱ǫ̩͍̼̟̹̯̜r̯̪͈͖̘ ̸͉̬͔̠̯h̭̰͟ͅa̡͍͎̖̠̜͉s̺̰̙̬̻ ̡̖o҉̠̜͍͔c̳͖͈̗͕͟ͅͅc͖̺ṳ̹͟r̨͚̯͕e̛͚̲̼̪̝̦̮d͈̤̩̤̻̳̱.̠̻̥̦͜",
                color: 15924992,
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
       });
    }

});     

bot.on('ready', () => {
    bot.user.setGame('Welcome to the internet!')
})


bot.login(process.env.BOT_TOKEN);
