const verify_email = async ({signUpInfo = {} , write , read} = {}) =>{
    const reqEmail = signUpInfo.email;

    let authBool = true;

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

        if(currentUserData.email.toLowerCase() === reqEmail.toLowerCase())
        {
            authBool = false;
            break;
        }
    }

    return {
        ok:authBool,
        msg:authBool ? "auth successfull" : "email auth failed"
    }
}

module.exports = {
    verify_email:verify_email
}