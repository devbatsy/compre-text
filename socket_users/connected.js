const socketConnectedUsers = {

}

const tempSocketUsers_cache = {

}

module.exports = {
    readConnectedUsers:() =>{
        // console.log(Object.keys(socketConnectedUsers))
        return socketConnectedUsers;
    },

    readConnectedUsers_cache:() =>{
        // console.log(Object.keys(socketConnectedUsers))
        return tempSocketUsers_cache;
    },

    writeConnectedUsers:({name = "" , data = {}}) =>{
        socketConnectedUsers[`${name}`] = data
    },

    writeConnectedUsers_cache:({name = "" , data = {}}) =>{
        tempSocketUsers_cache[`${name}`] = data
    },

    deleteConnectedUsers:({name = ""}) =>{
        delete socketConnectedUsers[`${name}`]
        delete tempSocketUsers_cache[`${name}`]

        console.log(Object.keys(socketConnectedUsers).length , " connected users")

        console.log(Object.keys(tempSocketUsers_cache).length , " users cache")
    },
}