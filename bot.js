const Discord = require('discord.js');
const bot = new Discord.Client();
const mysql = require("mysql");

var con = mysql.createConnection({
    host: "sql9.freemysqlhosting.net",
    user: process.env.SQL_NAME,
    password: process.env.SQL_PASSWORD,
    database: "sql9316030"
});

con.connect(err => {
    if(err) throw err;
    console.log("Connected to database.");
});

function generateCookie(){
    return Math.floor(Math.random() * (30-20 + 1)) + 20;
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}

bot.on('message', async message => {
    const personA = message.guild.members.random();
    const personB = message.guild.members.random();

    theMessage = message.content.toLowerCase();

    if(message.author.bot) return;


    if (theMessage.startsWith("?yes") && message.author.id == "416429218960769026"){
        var theRoles = ["DJ", "pickles and N U T E L L A", "IPRE", "veemo","Guardian of the Shrine"];
        var itemNumber = theMessage.slice(5, 6)
        var role = message.guild.roles.find(role => role.name === theRoles[itemNumber]);

        message.author.addRole(role);
    }

    if (theMessage.startsWith("?no") && message.author.id == "416429218960769026"){
        var theRoles = ["DJ", "pickles and N U T E L L A", "IPRE", "veemo","Guardian of the Shrine"];
        var itemNumber = theMessage.slice(4, 5)
        var role = message.guild.roles.find(role => role.name === theRoles[itemNumber]);

        message.author.removeRole(role);
    }

    if (theMessage.startsWith("?dandlesucks") && message.author.id == "416429218960769026"){
        var role = message.guild.roles.find(role => role.name === theRoles[itemNumber]);

        message.mentions.users.first().addRole(message.guild.roles.find(role => role.name === "veemo"));

    }

    if (theMessage.startsWith("?ship")){
        if (personA == personB){
            personB = message.guild.members.random();
        }
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "Under the christmas tree, you see " + personA + " and " + personB + " kissing under the mistletoe.",
            color: 15158332,
            fields: []
            }
       })
    }

    if(theMessage.startsWith("?cookie help")){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "Hello there! Feeling lucky and hungry? Well, use the command '?cookie roll' to roll! You might win a cookie.",
            color: 15158332,
            fields: []
            }
       })
    }

    if(message.content.startsWith("?cookie roll")){
        var d = new Date();
        var currentDate = d.toLocaleTimeString();
        var chars = currentDate.split(" ").join(":").split(":");
        var currentTime = ((parseInt(chars[0], 10) * 2) * 3600) + (parseInt(chars[1], 10) * 60) + parseInt(chars[2], 10);

        con.query(`SELECT * FROM xp WHERE id = '${message.author.id}'`, (err, rows) => {

            if(!rows[0]){
                if (err) throw err;
                    
                let sql;
            
                if (rows.length < 1){
                    sql = `INSERT INTO xp (id,xp) VALUES ('${message.author.id}', ${currentTime})`;
                } else {
                    sql = `UPDATE xp SET xp = ${currentTime} WHERE id = '${message.author.id}'`;
                }
            
                con.query(sql);

                var diceRoll = Math.floor(Math.random() * Math.floor(5)) + 1;
                var computerRoll = Math.floor(Math.random() * Math.floor(5)) + 1;


                if (computerRoll == diceRoll){
                    message.channel.send({embed: {
                        author: {
                            name: "The boxed Cookie Trader!",
                            icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                        },
                        description: "CONGRATULATIONS " + message.author.id + "! Here comes the clown. Boo hoo, he took the cookie. He replaced it with a potato.",
                        color: 15158332,
                        fields: []
                    }
                    })
                } else {
                    message.channel.send({embed: {
                        author: {
                            name: "The boxed Cookie Trader!",
                            icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                        },
                        description: "Darn, you didn't get it! Try agian in 2 hours! You got a " + diceRoll + " and the bot got a " + computerRoll,
                        color: 15158332,
                        fields: []
                    }
                    })
                }
            } else {

                let xp = rows[0].xp;

                var timeDiff = (7200 - (currentTime-xp));

                if (timeDiff < 7200 && !(timeDiff < 0) && !(timeDiff > 7200)) {
                    var sec_num = parseInt(timeDiff, 10); // don't forget the second param
                    var hours   = Math.floor(sec_num / 3600);
                    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
                    var seconds = sec_num - (hours * 3600) - (minutes * 60);
    
                    if (hours   < 10) {hours   = "0"+hours;}
                    if (minutes < 10) {minutes = "0"+minutes;}
                    if (seconds < 10) {seconds = "0"+seconds;}
    
                    if (message.author.id == ""){
                        message.channel.send({embed: {
                            author: {
                                name: "The boxed Cookie Trader!",
                                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                            },
                            description: "Sorry, your access has been disabled.",
                            color: 15158332,
                            fields: []
                            }
                       })
                    } else {
                        message.channel.send({embed: {
                            author: {
                                name: "The boxed Cookie Trader!",
                                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                            },
                            description: "Sorry, you have " + hours+':'+minutes+':'+seconds + " remaining until you can roll again.",
                            color: 15158332,
                            fields: []
                            }
                       })
                    }
                } else {
                    if (err) throw err;
                    
                    let sql;
                
                    if (rows.length < 1){
                        sql = `INSERT INTO xp (id,xp) VALUES ('${message.author.id}', ${currentTime})`;
                    } else {
                        sql = `UPDATE xp SET xp = ${currentTime} WHERE id = '${message.author.id}'`;
                    }
                
                    con.query(sql);

                    var diceRoll = Math.floor(Math.random() * Math.floor(5)) + 1;
                    var computerRoll = Math.floor(Math.random() * Math.floor(5)) + 1;

                    if (message.author.id == "416429218960769026"){
                        message.channel.send({embed: {
                            author: {
                                name: "The boxed Cookie Trader!",
                                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                            },
                            description: "CONGRATULATIONS <@" + message.author.id + ">! Here comes the clown. Boo hoo, he took the cookie. He replaced it with a potato.",
                            color: 15158332,
                            fields: []
                        }
                        })
                    } else if (computerRoll == diceRoll){
                        message.channel.send({embed: {
                            author: {
                                name: "The boxed Cookie Trader!",
                                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                            },
                            description: "CONGRATULATIONS <@" + message.author.id + ">! Here comes the clown. Boo hoo, he took the cookie. He replaced it with a potato.",
                            color: 15158332,
                            fields: []
                        }
                        })
                    } else {
                        message.channel.send({embed: {
                            author: {
                                name: "The boxed Cookie Trader!",
                                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                            },
                            description: "Darn, you didn't get it! Try again in 2 hours! You got a " + diceRoll + " and the bot got a " + computerRoll,
                            color: 15158332,
                            fields: []
                        }
                        })
                    }
                }
            }
        });
    }
});   

bot.on('ready', () => {
    bot.user.setGame('Feeling jolly!')
});


bot.login(process.env.BOT_TOKEN);
