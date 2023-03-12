
class GroupLeave {
    constructor(client){
        this.client = client;
    }
    on(...args){
        console.log("group leaved.");
    }
}
module.exports = GroupLeave;