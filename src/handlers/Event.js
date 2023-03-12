const fs = require("fs");

class EventHandler {
    constructor(client){
        client.handlers.set("event", this);
        fs.readdirSync("./src/events/").forEach((event) => {
          event = event.replace(".js","")

          let even = require('../events/' + event)
          let realEvent = new even(client)
          realEvent.client = client;

          client.on(event, (a,b,c,d,f)=> {realEvent.on(a,b,c,d,f)})
        });
        
    }
}
module.exports = EventHandler;