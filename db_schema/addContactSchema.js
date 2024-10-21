const {cipherText} = require("../_g__function_lib/cipher_de_cipher");

class addContact{
    constructor({chat_room , encryptKey = "" , contactID , contactName})//keys template = {user1 : user1PrivId , user2 : user2PrivId}
    {
        this.isBlocked = false;
        this.group_in_common = new Array();
        this.chatRoomPrivId = chat_room.split("-").join("");
        this.chatRoomPubID = cipherText(this.chatRoomPrivId)
        this.encryptionKey = encryptKey;
        this.friendPrivID = contactID;
        // this.friendUsername = contactName;

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}

module.exports = addContact;