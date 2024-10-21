const {getDate} = require("../_g__function_lib/date_to_string")

class chatObject{
    constructor({text , lang , msgID , senderPubID = "" , sendState = false})
    {
        this.ID = msgID;
        this.senderPubID = senderPubID;
        this.textContent = text;
        this.language = lang;
        this.read = sendState;
        this.timeSent = getDate();

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}


module.exports = chatObject;