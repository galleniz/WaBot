const { Client } = require('whatsapp-web.js');
const EventHandler = require("./src/handlers/Event");
const CommandHandler = require("./src/handlers/Command");

const client = new Client();
client.commands = new Map();
client.handlers = new Map();

client.initialize();
client.resetCommands = function() {
    client.commands = new Map();
    client.handlers = new Map();
    
    new EventHandler(client);
    new CommandHandler(client);
};

client.resetCommands();