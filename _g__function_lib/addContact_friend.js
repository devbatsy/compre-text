const {d_cipher_text} = require("./cipher_de_cipher");

const newUserContact = require("../db_schema/addContactSchema");

const newChatRoom = require("../db_schema/chatroomSchema");

const {readConnectedUsers} = require("../socket_users/connected")

const {v4:uuidv4} = require("uuid")

const addContact = async ({
    read = {},
    write = {},
    body = {}
} = {}) =>{
    let {user , contact} = body;
    
    const status = {
        ok:false,
        msg:""
    }

    const privKeys = {
        user:d_cipher_text(user),
        contact:d_cipher_text(contact)
    }

    let clientsData = {
        user:{},
        contact:{}
    }

    //fetch user info
    clientsData.user = await read({data:{
        collection:"UsersMain",
        document:privKeys.user,
    }})
    //fetch user info

    if(!clientsData.user.contacts.some(val =>{return val.friendPrivID === privKeys.contact}))
    {

        const connectedUsers = readConnectedUsers()

        //fetch contact info
        clientsData.contact = await read({data:{
            collection:"UsersMain",
            document:privKeys.contact,
        }})
        //fetch contact info


        //Create chatRoom for Users
        const chatRoomPrivID = uuidv4().split("-").join("");

        const languageObject = {};
        languageObject[`${privKeys.user}`] = clientsData.user.appSettings.language;
        languageObject[`${privKeys.contact}`] = clientsData.contact.appSettings.language;

        const chat_room = new newChatRoom({
            languageObject:languageObject,
            roomPrivID:chatRoomPrivID
        }).getObject()
        //Create chatRoom for Users

        //write chatroom to database
        write({data:{
            collection:"ChatRooms",
            document:chatRoomPrivID,
            data:chat_room
        }})
        //write chatroom to database
        //CHAT ROOM CREATED HERE


        const newContactObject_user = new newUserContact({
            contactID:privKeys.contact,
            chat_room:chatRoomPrivID
        }).getObject();

        const newContactObject_contact = new newUserContact({
            contactID:privKeys.user,
            chat_room:chatRoomPrivID
        }).getObject();

        clientsData.user.contacts.push(newContactObject_user);

        clientsData.contact.contacts.push(newContactObject_contact);

        //write users info
        write({data:{
            collection:"UsersMain",
            document:privKeys.user,
            data:clientsData.user
        }})
        //write users info

        //write contact info
        write({data:{
            collection:"UsersMain",
            document:privKeys.contact,
            data:clientsData.contact
        }})
        //write contact info

        if(Object.keys(connectedUsers).some(val =>{return val === contact}))
        {
            connectedUsers[contact].send(JSON.stringify({
                post:"addedToFriend"
            }))
        }

        status.ok = true;
        status.msg = "friend added successfully"
    }else{
        status.msg = "you are already friends"
    }

    return status;

}


module.exports = {
    addContact:addContact
};