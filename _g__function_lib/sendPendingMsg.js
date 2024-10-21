const { d_cipher_text, cipherText } = require("./cipher_de_cipher");

const {v4:uuidv4} = require("uuid");

const chatObject = require("../db_schema/chatObjectSchema");

const {readConnectedUsers} = require("../socket_users/connected");

//Import claude ai translator
const {translateText} = require("../claude_ai/translator");
//Import claude ai translator

const sendPendingMsg = async ({
    sender = "",
    // reciever = "",
    roomID = "",
    msg = "",
    read = {},
    write = {}
}) =>{
    const status = {
        ok:false,
        msg:{
            receiverParcel:{},
            senderParcel:{},
            msg:"msg sent successfully"
        }
    }
    try{
        const privKeys = {
            senderPrivKey:d_cipher_text(sender),
            roomPrivKey:d_cipher_text(roomID),
            recieverPrivKey:""
        }
    
        const chatRoom = await read({data:{
            collection:"ChatRooms",
            document:privKeys.roomPrivKey,
        }});
    
        privKeys.recieverPrivKey = Object.keys(chatRoom.language).filter(val =>{return val !== privKeys.senderPrivKey})[0];
    
        const messageID = uuidv4().split("-").join("");
    
        const newMessage__sender = new chatObject({text:msg , lang:chatRoom.language[privKeys.senderPrivKey] , msgID:messageID , senderPubID:sender , sendState:false}).getObject();
    
        //TRANSLATE THE SENDERS MESSAGE TO RECIEVERS LANGUAGE 
        //Sender's message = msg , Reciever's language is given by "chatRoom.language[privKeys.recieverPrivKey]"
        //pass msg and the language to a function and get the translation

        console.log("came here ")

        let translatedText = msg;
        switch(chatRoom.language[privKeys.senderPrivKey] !== chatRoom.language[privKeys.recieverPrivKey])
        {
            case true:
                translatedText = await translateText(`${msg}`, chatRoom.language[privKeys.recieverPrivKey]);
        }

        console.log(`translating : ${msg} to ${translatedText}`)
    
        const newMessage__reciever = new chatObject({text:translatedText , lang:chatRoom.language[privKeys.recieverPrivKey] , msgID:messageID , senderPubID:sender , sendState:false}).getObject();
    
        // console.log(newMessage__reciever)
    
        // console.log(newMessage__sender)

        //client Online Check
        const connectedUsers = readConnectedUsers();

        switch(true)
        {
            case Object.keys(connectedUsers).some(val =>{return val === cipherText(privKeys.recieverPrivKey)}):
                connectedUsers[cipherText(privKeys.recieverPrivKey)].send(JSON.stringify({
                    post:"UserChat",
                    data:newMessage__reciever
                }));

                newMessage__sender["read"] = true;

        }
        //client Online Check

        chatRoom[privKeys.recieverPrivKey].push(
            newMessage__reciever
        )
    
        chatRoom[privKeys.senderPrivKey].push(
            newMessage__sender
        )

        //update chatRoom Info
        await write({data:{
            collection:"ChatRooms",
            document:privKeys.roomPrivKey,
            data:chatRoom
        }}) 
        //update chatRoom Info

        status.ok = true;
        status.msg.receiverParcel = newMessage__reciever
        status.msg.senderParcel = newMessage__sender
    }catch(err)
    {
        status.ok = false;
        status.msg = "message send failed"
    }

    // console.log(chatRoom)
    return status;
}


module.exports = {sendPendingMsg:sendPendingMsg};