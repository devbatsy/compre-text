// IMPORT TEMP USER OBJECT
const {readConnectedUsers , writeConnectedUsers} = require("./connected")
// IMPORT TEMP USER OBJECT


const socketRoutes = ({postRoute = "" , ws = {} , msg = {}}) =>{
    switch(postRoute)
    {
        case "init_connection":
            writeConnectedUsers({name:msg.myID , data:ws});

            readConnectedUsers();
    }
}


module.exports = {
    socketRoutes:socketRoutes
}