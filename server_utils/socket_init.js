const websocket = require('ws');

const {socketRoutes} = require("../socket_users/routes");

const {deleteConnectedUsers, readConnectedUsers, readConnectedUsers_cache} = require("../socket_users/connected")

let wss;

const init_wss = (server) =>{
    wss = new websocket.Server({server})

    wss.on("connection" , (ws) =>{

        console.log("socket connected")

        ws.on("message" , data =>{
            try{
                const parsed = JSON.parse(data.toString());

                socketRoutes({postRoute:parsed.post , msg:parsed , ws:ws})
            }catch(err)
            {
                console.log("An error occured with incoming socket message")
                console.log(err.message)
            }
        })

        ws.on("close" , () =>{
            const connectedUsers = readConnectedUsers();
            const cache_connectedUsers = readConnectedUsers_cache();
            const closedUser = Object.keys(connectedUsers).filter(val =>{return connectedUsers[val] == ws});

            try{
                if(cache_connectedUsers[closedUser[0]])
                {
                    // console.log(cache_connectedUsers[closedUser[0]] , ' disconnected user friends')

                    cache_connectedUsers[closedUser[0]].forEach(param =>{
                        if(Object.keys(connectedUsers).some(val =>{return val === param[1]}))
                        {
                            connectedUsers[param[1]].send(
                                JSON.stringify({
                                    post:"friendOffline",
                                    msg:{roomID:param[0]}
                                })
                            )
                        }
                    })   
                }
            }catch(err)
            {
                console.log(err.message)
            }

            deleteConnectedUsers({name:closedUser[0]});
        })
    });

}

module.exports = {
    init_wss:init_wss,
    wss:wss
}