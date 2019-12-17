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

    if(message.content.startsWith("?cookie")){
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
        message.channel.send({embed: {
            author: {
                name: "The boxed Cookie Trader!",
                icon_url: "https://66.media.tumblr.com/cc15193e1eade70634202626f5a4d590/tumblr_p1fltrOC6F1ua0iw3o1_640.png"
            },
            description: "Sorry, this command isn't available to you yet! Estimated time until availability: null",
            color: 15158332,
            fields: []
            }
       })
    }
});   

bot.on('ready', () => {
    bot.user.setGame('Feeling jolly!')
});


bot.login(process.env.BOT_TOKEN);
