
class Loading_screen {
    constructor(client){
        this.client = client;
    }
    on(...args){
        let [percent, message] = args;
        console.log("Loading",percent,message)
    }
}
module.exports = Loading_screen;