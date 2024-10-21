class registeredUsers{
    constructor({pubID , email , password , username})
    {
        this.pubID = pubID;
        this.email = email;
        this.password = password;
        this.username = username
        this.imageSrc = ""

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}

module.exports = registeredUsers;