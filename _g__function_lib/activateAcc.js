const { d_cipher_text } = require("./cipher_de_cipher");

const activateAcc = async ({
    pubID = "" , read = {} , write = {}
}) =>{
    const clientID = d_cipher_text(pubID);

    const status = {
        ok:true,
        msg:"success"
    }

    try{
        const userData = await read({data:{
            collection:"UsersMain",
            document:clientID,
        }})

        userData.appSettings.accountActivated = true;

        await write({data:{
            collection:"UsersMain",
            document:clientID,
            data:userData
        }})
    }catch(err)
    {
        console.log(err.message , " this occured at the redirect activation of user account");
        status.ok = false;
        status.msg = "failed"
    }

    return status;

}

module.exports = {
    activateAcc : activateAcc
}