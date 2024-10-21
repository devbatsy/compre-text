const getSearch = async ({
    read ,
    searchObject = {}
} = {}) =>{
    let registeredUsers = await read({data:{
        collection:"registerdUsers",
        document:"Users",
    }});

    const matchArray = new Array();

    registeredUsers = Array.from(registeredUsers);

    registeredUsers.forEach(currentUser =>{
        if(
            currentUser.email.toLowerCase() === searchObject.searchParam.toLowerCase() ||
            currentUser.username.toLowerCase().includes(searchObject.searchParam.toLowerCase()) || 
            currentUser.pubID.toLowerCase().includes(searchObject.searchParam.toLowerCase().split("-")[1])
        )
        {
            matchArray.push(
                {
                    username:currentUser.username,
                    imageSrc:currentUser.imageSrc,
                    pubID:currentUser.pubID
                }
            )
        }
    });

    return {
        ok:matchArray.length === 0 ? false : true,
        msg:matchArray.length === 0 ? [null] : matchArray
    };
}

module.exports = {
    getSearch:getSearch
}