const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = "*";

bot.on('ready', function (){
    bot.user.setActivity("Garder les viewers");
    console.log(`Connecté sous le nom de Gryf_Bot!`);
});

bot.login(process.env.TOKEN)


bot.on('message', message =>{
    if (message.content === prefix + "help"){
		Text.channel.send("Liste des commandes: \n -*help \n -*ping");
		console.log("Et un viewer d'aidé");
	}
	
	if (message.content === prefix + "ping"){;
		message.reply("pong!");
		console.log("Ping Pong!");
	}

	if (message.content === "putain"){;
		message.delete();
		message.reply("Oh on se calme !")
		console.log("Mot vilain maitrisé!")
	}

	
});
