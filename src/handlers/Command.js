const fs = require("fs");
const prefix = "!";

class Command {
    constructor(client){
        client.handlers.set("event", this);
        fs.readdirSync("./src/commands/").forEach((cmdN) => {
          cmdN = cmdN.replace(".js","")
          const cmd = require("../commands/" + cmdN);
          if (cmd.name){
            client.commands.set(cmd.name,cmd);
          }
          console.log(cmd);
  
        });
        
    }
}
module.exports = Command;