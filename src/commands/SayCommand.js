const Command = require("../Command")

/**
 * Represents a command that allows the bot to say a message in the chat.
 * @extends Command
 */
class SayCommand extends Command {
    constructor() {
        super({
            name: "say",
            react: "🧷",
        });
    }

    /**
     * Executes the "say" command.
     * @param {string[]} args - The arguments passed to the command.
     * @param {string} author - The author of the command.
     * @param {Chat} chat - The chat where the command was executed.
     * @param {Message} msg - The message object associated with the command.
     */
    run(args, author, chat, msg) {
        chat.sendMessage(args.join(" "));
    }
}

module.exports = new SayCommand();
