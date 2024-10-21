const verifyLoginCred = async ({cred = {} , read} = {}) =>{
    let authBool = false;

    const reqEmail = cred.email;

    const reqPassword = cred.password;

    let userPubID;

    //read registered users DB
    let readRegisteredUsers = await read({data:{
        collection:"registerdUsers",
        document:"Users",
    }})
    //read registered users DB

    readRegisteredUsers = Array.from(readRegisteredUsers);

    for(let i = 0; i < readRegisteredUsers.length; i++)
    {
        const currentUserData = readRegisteredUsers[i];

        if(currentUserData.email.toLowerCase() === reqEmail.toLowerCase() && currentUserData.password.toLowerCase() === reqPassword)
        {
            authBool = true;
            userPubID = currentUserData.pubID;
            break;
        }
    }

    return {
        ok:authBool,
        msg:authBool ? userPubID : "credentials auth failed"
    }
}

module.exports = {verifyLoginCred:verifyLoginCred};