const {v4:uuidv4} = require("uuid");
const {cipherText} = require("../_g__function_lib/cipher_de_cipher")
class User{
    constructor({language = "en" , profileObj = {}} = {})
    {
        this.privID = uuidv4().split("-").join("");
        this.pubID = cipherText(this.privID);
        this.contacts = new Array();
        this.groups = new Array();
        this.credentials = new Array(profileObj.email , profileObj.password);
        this.profile = {
            profileImgLink:"",
            userName:profileObj.username
        }
        this.appSettings = {
            theme:"default",
            font:"medium",
            language:language,
            accountActivated:activateAlgorithm({id:this.privID , mode:false})
        }

        this.notifications = new Array();

        this.getObject = () =>{
            const newobj = {};
            Object.assign(newobj , this)

            delete newobj['getObject'];

            return newobj;
        }
    }
}

function activateAlgorithm({id , mode} = {})
{
    // const binVector = 

    return false
}

module.exports = User