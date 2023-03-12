
const qrcode = require('qrcode-terminal');
class QR {
    constructor(client){
        this.client = client;
    }
    on(...args){
        let qr = args[0];
        qrcode.generate(qr, { small: true });
    }
}
module.exports = QR;