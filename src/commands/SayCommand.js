const Command = require("../Command")

class SayCommand extends Command
{
    constructor()
    {
        super({
            name: "say",
            react: "🧷",

        })
    }
    run(args, author, chat, msg){
        chat.sendMessage(args.join(" "))
    }
}
module.exports = new SayCommand();
