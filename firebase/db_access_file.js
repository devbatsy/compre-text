let firebaseInit_var;

module.exports = (initFunc) =>{
    firebaseInit_var = initFunc();

    const function_object = {};

    function_object['write_doc_collection'] = write_doc_collection;

    function_object['read_doc_collection'] = read_doc_collection;

    // data:{
    //     collection:"products",
    //     document:"products"
    // }

    return function_object;
}

async function write_doc_collection({data = {}} = {})//collection = {collectionName , documentName , data}
{
    try{
        const collection = firebaseInit_var.fireStoreDB.collection(`${data.collection}`).doc(`${data.document}`);

        const uploadedData = await collection.set({data:data.data});
    }catch(err)
    {
        console.log(err.message)
    }
    
}


async function read_doc_collection({data = {}} = {})
{
    try{
        const collection = firebaseInit_var.fireStoreDB.collection(`${data.collection}`).doc(`${data.document}`);

        const docs = await collection.get();
    
        return docs.data().data;
    }catch(err)
    {
        console.log(err.message)
    }
}