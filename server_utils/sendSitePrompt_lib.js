const path = require("path");


//send chat room page function
const sendChatRoomPage = async ({
    res = {} , renderData = {}
} = {}) =>{
    
    res.render(path.join(__dirname , '../static/chatApp/room.ejs') , renderData);

}
//send chat room page function







module.exports = {
    sendChatRoomPage:sendChatRoomPage
}