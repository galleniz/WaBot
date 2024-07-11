const Command = require("../Command")
const cleverbot = require("cleverbot-free")
var map = new Map()


/**
 * Represents a command for interacting with a chatbot.
 * @extends Command
 */
class AICommand extends Command {
    constructor() {
        super({
            name: "chatbot",
            react: "🤖",
        });
    }

    /**
     * Executes the chatbot command.
     * @param {Array} args - The arguments passed to the command.
     * @param {Author} author - The author of the command.
     * @param {Chat} chat - The chat where the command was executed.
     * @param {Object} msg - The message object representing the command.
     */
    async run(args, author, chat, msg) {
        var a = map.get(author.from) || [];
        a.push(args.join(" "));
        try {
            await cleverbot(args.join(" "), a).then(re => {
                a.push(re);
                msg.reply(re);
            });
        } catch {
            msg.reply("Cleverbot se tardó mucho en responder. (error: 40xWAI timeout)");
        }
        map.set(author.from, a);
    }
}

module.exports = new AICommand();
