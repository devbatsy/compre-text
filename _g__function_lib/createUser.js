//schema Imports
const newUser = require("../db_schema/userSchema");
const registeredUser = require("../db_schema/registeredUser");
//schema Imoprts;

const createNewUser = async ({signUpInfo = {} , write , read} = {}) =>{
    let status = {
        ok:false,
        msg:'user creation successful'
    }
    try{
        const newUserObject = new newUser({
            language:signUpInfo.language_preference,
            profileObj:{
                username:signUpInfo.username,
                email:signUpInfo.email,
                password:signUpInfo.password
            }
        }).getObject();
    
        const user_registration = new registeredUser({pubID:newUserObject.pubID , email:signUpInfo.email , password:signUpInfo.password , username:signUpInfo.username}).getObject();
    
        //write user main data to DB
        await write({data:{
            collection:"UsersMain",
            document:newUserObject.privID,
            data:newUserObject
        }})
        //write user main data to DB
    
        //read registered users DB
        const readRegisteredUsers = await read({data:{
            collection:"registerdUsers",
            document:"Users",
        }})
        //read registered users DB
    
        //add new registered user
        readRegisteredUsers.push(
            user_registration
        )
        //add new registered user
    
        //write updated regsitered users
        await write({data:{
            collection:"registerdUsers",
            document:"Users",
            data:readRegisteredUsers
        }})
        //write updated regsitered users

        //Update status Object
        status.ok = true;

        status.msg = newUserObject.pubID
        //Update status Object
    }catch(err)
    {
        status.ok = false
        status.msg = 'user creation failed'
    }

    return status;
}

module.exports = {createNewUser:createNewUser};