const prefix = "!";

class Command {
    constructor(options) {
        this.options = options;
        this.beta = options.beta || false;
        this.react = options.react || "nothing";
        this.name = options.name;
        this.reactable = this.react !== "nothing" || options.reactable;
    }

    async tryRun(message, client) {
        console.log(message.body);

        const [cmd, ...args] = message.body.slice(prefix.length).split(/ +/);
        args.body = message.body;
        const author = {
            from: message.from,
            name: message._data.notifyName
        };

        const chat = await message.getChat();

        if (this.reactable) {
            message.react(this.react);
        }

        try {
            this.run(args, author, chat, message, client);
        } catch (err) {
            console.error(`Error while executing "${this.name}"`);
            console.log(err);
        }
    }

    async run(args, author, chat, message, client) {
        throw new Error("No run field command");
    }
}

module.exports = Command;