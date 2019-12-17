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
    if(message.author.bot) return;

    if(message.content.startsWith("?cookie help")){
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

    if(message.content.startsWith("?admin on") && message.author.id == "416429218960769026"){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "Yes, sir? [admin access enabled]",
            color: 15158332,
            fields: []
            }
       })
    } else if(message.content.startsWith("?admin on") && message.author.id != "416429218960769026"){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "YOU ARE NOT THE FATHER!",
            color: 15158332,
            fields: []
            }
       })
    }

    if(message.content.startsWith("?admin cookie disable") && message.author.id == "416429218960769026"){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "User '340630936972689408' has been successfully disabled from using ?cookie roll",
            color: 15158332,
            fields: []
            }
       })
    } else if(message.content.startsWith("?admin cookie disable") && message.author.id != "416429218960769026"){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "You do not have administrative privlage.",
            color: 15158332,
            fields: []
            }
       })
    }

    if(message.content.startsWith("?admin cookie enable") && message.author.id == "416429218960769026"){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "User '340630936972689408' can now use ?cookie roll",
            color: 15158332,
            fields: []
            }
       })
    } else if(message.content.startsWith("?admin cookie enable") && message.author.id != "416429218960769026"){
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "You do not have administrative privlage.",
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

                var diceRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
                var computerRoll = Math.floor(Math.random() * Math.floor(6)) + 1;


                if (computerRoll == diceRoll){
                    message.channel.send({embed: {
                        author: {
                            name: "The boxed Cookie Trader!",
                            icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                        },
                        description: "CONGRATULATIONS " + message.author.id + "!, you got yourself a free cookie. Dm ethan or just ping him for your free snack. Butt.",
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

                if (timeDiff < 7200) {
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

                    var diceRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
                    var computerRoll = Math.floor(Math.random() * Math.floor(6)) + 1;


                    if (computerRoll == diceRoll){
                        message.channel.send({embed: {
                            author: {
                                name: "The boxed Cookie Trader!",
                                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
                            },
                            description: "CONGRATULATIONS " + message.author.id + "!, you got yourself a free cookie. Dm ethan or just ping him for your free snack. Butt.",
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
                }
            }
        });
    }
});   

bot.on('ready', () => {
    bot.user.setGame('Feeling jolly!')
});


bot.login(process.env.BOT_TOKEN);
