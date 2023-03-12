
class Call {
    constructor(client){
        this.client = client;
    }
    on(...args){
        console.log("Someone is calling me!");
        
    }
}
module.exports = Call;