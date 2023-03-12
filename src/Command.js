const prefix = "!";

class Command {
    constructor(options){
        this.options = options;
        this.beta = options.beta || false;
        this.react = options.react || "nothing";
        this.name = options.name;
    }
    async tryRun(message, client){
        console.log(message.body);
 

        const [cmd, ...args] = message.body.slice(prefix.length).split(/ +/).map(str => str);
        args.body = message.body;
        let author = {
            from: message.from,
            name: message._data.notifyName
        }
      
        let chat = await message.getChat();

        if (this.react !== "nothing")
            message.react(this.react)


        this.run(args, author, chat, message, client);
    }
    async run(args, author, chat, message, client){
        throw "No run field command";
    }
}
module.exports = Command;