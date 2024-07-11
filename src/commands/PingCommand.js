const Command = require("../Command");

/**
 * Represents a command that responds with the latency between the bot and the server.
 * @extends Command
 */
class PingCommand extends Command {
    constructor() {
        super({
            name: "ping",
            react: "🏓",
        });
    }

    run(args, author, chat, msg) {
        const latency = Date.now() - msg.timestamp;
        msg.reply(`pong!\n${latency}`);
    }
}

module.exports = new PingCommand();
