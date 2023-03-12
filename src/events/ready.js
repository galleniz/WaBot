
class Ready {
    constructor(client){
        this.client = client;
    }
    on(...args){
        console.log("Client as ready!");
    }
}
module.exports = Ready;