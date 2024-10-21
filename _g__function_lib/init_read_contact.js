const {d_cipher_text, cipherText} = require("./cipher_de_cipher")

const readContact = async ({
    roomPubID = "",
    userPubID = "",
    read = {},
    write = {}
}) =>{
    const status = {ok:true , msg:"success" , recieverID:""}
    try{
        const chatRoom = await read({data:{
            collection:"ChatRooms",
            document:d_cipher_text(roomPubID),
        }});
    
        contactPrivKey = Object.keys(chatRoom.language).filter(val =>{return val !== d_cipher_text(userPubID)})[0];
    
        for(let i = chatRoom[contactPrivKey].length-1; i >= 0;  i--)
        {
            if(!chatRoom[contactPrivKey][i].read)
            {
                chatRoom[contactPrivKey][i].read = true
            }else
            {
                break
            }
        }

        for(let i = chatRoom[d_cipher_text(userPubID)].length-1; i >= 0;  i--)
        {
            if(!chatRoom[d_cipher_text(userPubID)][i].read)
            {
                chatRoom[d_cipher_text(userPubID)][i].read = true
            }else
            {
                break
            }
        }
    
        await write({data:{
            collection:"ChatRooms",
            document:d_cipher_text(roomPubID),
            data:chatRoom
        }});
        status.recieverID = cipherText(contactPrivKey)
    }catch(err)
    {
        status.ok = false;
        status.msg = "failed"
    }

    return status;

}

module.exports = {
    readContact:readContact
}