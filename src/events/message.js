const prefix = "!";

class Message {
    constructor(client){
        this.client = client;
    }
    on(...args){

        let message = args[0];
        if (message.type !== "chat")
            return;
        if (!message.body.startsWith(prefix))
            return;
        let client = this.client;
            
        const [cmd, ...a] = message.body.slice(prefix.length).split(/ +/).map(str => str);
        console.log(cmd);
        const command = client.commands.get(cmd)
        console.log(command)
        console.log(client.commands)
        console.log(command.tryRun)
        command.tryRun(message,client)

    }
}
module.exports = Message;