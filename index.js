const { Client } = require('whatsapp-web.js');

const client = new Client();
client.commands = new Map();
client.handlers = new Map();
client.initialize();
client.resetCommands= function (){
    client.commands = new Map();
    client.handlers = new Map();
    
    let events =  new (require("./src/handlers/Event"))(client)
    let cmds =  new (require("./src/handlers/Command"))(client)
    
};

client.resetCommands();
