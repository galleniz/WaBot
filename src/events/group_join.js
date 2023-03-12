
class GroupJoin {
    constructor(client){
        this.client = client;
    }
    on(...args){
        console.log("New group added.");
        
    }
}
module.exports = GroupJoin;