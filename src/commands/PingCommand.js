const Command = require("../Command")

class PingCommand extends Command
{
    constructor()
    {
        super({
            name: "ping",
            react: "🏓",

        })
    }
    run(args, author, chat, msg){
        msg.reply("pong!\n" + Math.floor(Date.now() - msg.timestamp) )
    }
}
module.exports = new PingCommand();
