const initUserInfo = require("../db_schema/user_init_connectSchema");
const {d_cipher_text} = require("./cipher_de_cipher");

const {readConnectedUsers, writeConnectedUsers, writeConnectedUsers_cache} = require("../socket_users/connected")

const sendUserData = async ({
    renderData = {} , read = {}
} = {}) =>{

    const status = {
        ok:true,
        msg:{}
    }
    try{
        //read Request User Info
        const userData = await read({data:{
            collection:"UsersMain",
            document:d_cipher_text(renderData.pubID),
        }})
        //read Request User Info

        //read registered users
        const registeredUsers = await read({data:{
            collection:"registerdUsers",
            document:"Users",
        }})
        //read registered users

        const newUserInit_data = new initUserInfo({pubID:userData.pubID , appSetting:userData.appSettings , contact:userData.contacts , group:userData.groups , registeredUsers:registeredUsers , read:read}).getObject();


        async function readcontactChats()
        {
            const connectedUsers = readConnectedUsers();
            let friends_room_id = [];
            for(let i = 0; i < newUserInit_data.contacts.length; i++)
            {
                const roomId = newUserInit_data.contacts[i].pubID

                const roomData = await read({data:{
                    collection:"ChatRooms",
                    document:d_cipher_text(roomId),
                }})

                newUserInit_data.contacts[i].chats = roomData[d_cipher_text(renderData.pubID)];
                newUserInit_data.contacts[i]['isOnline'] = Object.keys(connectedUsers).some(val =>{return val === newUserInit_data.contacts[i].friendPubID});

                if(newUserInit_data.contacts[i]['isOnline'])
                {
                    connectedUsers[newUserInit_data.contacts[i].friendPubID].send(JSON.stringify({
                        post:"friendOnline",
                        msg:{roomID:roomId}
                    }))
                }
                
                friends_room_id.push([roomId , newUserInit_data.contacts[i].friendPubID])
            }

            writeConnectedUsers_cache({name:renderData.pubID , data:friends_room_id})
        }

        await readcontactChats();

        newUserInit_data.username = userData.profile.userName;

        // console.log(newUserInit_data.contacts)

        status.msg = newUserInit_data;
    }catch(err)
    {
        status.ok = false;
        status.msg = "An error occured"
    }

    return status;
        
}


module.exports = {
    sendUserData:sendUserData
};