class newChatRoom{
    constructor({roomID})
    {
        this.roomID = roomID;
        this.chatObjectArray = new Array();

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}


module.exports = newChatRoom;