const Command = require("../Command")
const cleverbot = require("cleverbot-free")
var map = new Map()


class AICommand extends Command
{
    constructor()
    {
        super({
            name: "chatbot",
            react: "🤖",

        })
    }
    async run(args, author, chat, msg){
        var a = map.get(author.from) || []
        a.push(args.join(" "))
        try {
            await cleverbot(args.join(" "),a).then(re=>{
                a.push(re);
                msg.reply(re);
            })
        } catch {
            msg.reply("Ha ocurrido un error en: AICommand.js:20 (Error: too much MS), trata de nuevo más tarde.")
        }
        map.set(author.from,a);
    

    }
}
module.exports = new AICommand();
