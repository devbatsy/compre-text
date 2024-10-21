const { cipherText } = require("../_g__function_lib/cipher_de_cipher");

class chatroom{
    constructor({languageObject = {} , roomPrivID})
    {
        this.language = languageObject;
        this.privID = roomPrivID;
        this.pubID = cipherText(roomPrivID);
        this[`${Object.keys(languageObject)[0]}`] = [];
        this[`${Object.keys(languageObject)[1]}`] = [];

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}

module.exports = chatroom;