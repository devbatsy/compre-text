class addGroup{
    constructor({groupID = ""})
    {
        this.isAdmin = false;
        this.groupPrivID = groupID;
        this.deletedMessageID = new Array();

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}

module.exports = addGroup;