const { cipherText } = require("../_g__function_lib/cipher_de_cipher");

class userInit{
    constructor({pubID , appSetting , contact , group = [] , registeredUsers = {}} = {})
    {
        this.pubID = pubID;
        this.appSetting = appSetting;
        this.contactFunc = () =>{
            const result = new Array();

            contact.forEach(val =>{
                let friendName = ""
                for(let i = 0; i < registeredUsers.length; i++)
                {
                    if(registeredUsers[i].pubID === cipherText(val.friendPrivID))
                    {
                        friendName = registeredUsers[i].username;
                        break;
                    }
                }
                result.push(
                    {
                        pubID:val.chatRoomPubID,
                        friendPubID:cipherText(val.friendPrivID),
                        friendName:friendName,
                        blocked:val.isBlocked,
                        chats:[]
                    }
                )
            })

            return result;
        };

        this.contacts = this.contactFunc()
        this.groups = new Array();

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            delete newobj['contactFunc'];

            return newobj;
        }
    }
}

module.exports = userInit;