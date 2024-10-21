const body_parser = require("body-parser");
const url_encoded = body_parser.urlencoded({extended:false})
const express = require("express");
const path = require("path");

//IMPORT WEBSOCKET 
const {wss} = require("./socket_init")
//IMPORT WEBSOCKET 

//ROUTER DEFINITION
const router = express.Router();
//ROUTER DEFINITION

//FUNCTION IMPORTS 
const {sendChatRoomPage} = require('./sendSitePrompt_lib')
//FUNCTION IMPORTS 

//Import user creation Function
const {createNewUser} = require("../_g__function_lib/createUser")
//Import user creation Function

// Import signUp Auth
const {verify_email} = require("../_g__function_lib/signup_email_auth")
// Import signUp Auth

// Import Login Auth
const {verifyLoginCred} = require("../_g__function_lib/login_email_password_auth")
// Import signUp Auth

//Import get search result
const {getSearch} = require("../_g__function_lib/getSearchResult")
//Import get search result

//Import add contact function
const {addContact} = require("../_g__function_lib/addContact_friend")
//Import add contact function

//Import user init function
const {sendUserData} = require("../_g__function_lib/sendUserInitData")
//Import user init function

//Import send pending message
const {sendPendingMsg} = require("../_g__function_lib/sendPendingMsg")
//Import send pending message

//Import read contact
const {readContact} = require("../_g__function_lib/init_read_contact")
//Import read contact

//Import connected Users
const { readConnectedUsers } = require("../socket_users/connected");
//Import connected Users

//Import stripe payment
const {stripePayment} = require("../admin_files/stripe_p")
//Import stripe payment

//Import activate account
const {activateAcc} = require("../_g__function_lib/activateAcc")
//Import activate account


//Intialise firebase 
const firebaseInit = require("../firebase/firebase_setup");
const { read } = require("fs");
const {write_doc_collection , read_doc_collection} = require("../firebase/db_access_file")(firebaseInit);
//Intialise firebase 

router


//send sign up page
.get('/signup' , (req,res) =>{
    res.sendFile(path.join(__dirname , '../static/signUp/signUp.html'))
})
//send sign up page


//User email address verification for sign up
.post("/signup/user/auth" , async (req,res) =>{
    const bodyData = req.body;

    const authResponse = await verify_email({signUpInfo:bodyData , write:write_doc_collection , read:read_doc_collection});

    res.status(authResponse.ok ? 200 : 400).json({data:authResponse.msg});
})
//User email address verification for sign up


//send login page
.get('/login' , (req,res) =>{
    res.sendFile(path.join(__dirname , '../static/login/login.html'))
})
//send login page


//User email address and password verification for login
.post("/login/user/auth" , async (req,res) =>{
    const bodyData = req.body;

    const authResponse = await verifyLoginCred({cred:bodyData , read:read_doc_collection});

    res.status(authResponse.ok ? 200 : 400).json({data:authResponse.msg});

    // res.status(200).json({data:'Login Credentials Verified'});
})
//User email address and password verification for login


//create new User database and send to chat room
.post("/chatroom" , url_encoded , async (req,res) =>{

    if(req.body.username)
    {

        const authResponse = await verifyLoginCred({cred:req.body , read:read_doc_collection});

        let pubID;

        let authResult;

        if(!authResponse.ok)
        {
            const createdUser = await createNewUser({signUpInfo:req.body , write:write_doc_collection , read:read_doc_collection});

            pubID = createdUser.msg;

            authResult = createdUser.ok;
        }else{
            pubID = authResponse.msg;

            authResult = authResponse.ok;
        }

        if(authResult)
        {
            //After user database has been created
            console.log(read_doc_collection)
            sendChatRoomPage({res:res , renderData:{clientPublicId:pubID}})
            // After user database has been created
        }else{
            res.send("Account creation failed , please try again")
        }
        

    }else
    {
        sendChatRoomPage({res:res , renderData:{clientPublicId:req.body.pubID}})
    }

    //After user database has been created
    // sendChatRoomPage({res:res})
    //After user database has been created
})
//create new User database and send to chat room


//Search contacts route
.post("/chatroom/search" , async (req , res) =>{
    const response = await getSearch({read:read_doc_collection , searchObject:req.body});

    res.status(response.ok ? 200 : 400).json({data:JSON.stringify(response.msg)});
})
//Search contacts route


//add contact to friend List
.post("/chatroom/contact/add" , async (req,res) =>{
    if(req.body.user === req.body.contact)
    {
        res.status(400).json({data:"Cannot add self as friend"});
    }else{
        const response = await addContact({read:read_doc_collection , write:write_doc_collection , body:req.body});

        res.status(response.ok ? 200 : 400).json({data:JSON.stringify(response.msg)});
    }
    
})
//add contact to friend List


//send user init
.post("/init/user_info" , async (req,res) =>{
    const response = await sendUserData({renderData:req.body , read:read_doc_collection});

    res.status(response.ok ? 200 : 400).json({data:JSON.stringify(response.msg)});
})
//send user init


.post("/chatroom/contact/message/send" , async (req,res) =>{
    //if user is online , then mark message as read
    const response = await sendPendingMsg({
        sender:req.body.senderID,
        roomID:req.body.roomID,
        msg:req.body.message,
        read:read_doc_collection,
        write:write_doc_collection
    });

    res.status(response.ok ? 200 : 400).json({data:JSON.stringify({msg:response.msg.msg , parcel:response.msg.senderParcel})});
})


.post("/chatroom/contact/message/read" , async (req , res) =>{

    const response = await readContact({
        roomPubID:req.body.roomID,
        userPubID:req.body.userID,
        read:read_doc_collection,
        write:write_doc_collection
    })

    const connectedUsers = readConnectedUsers();
    if(Object.keys(connectedUsers).some(val =>{return val === response.recieverID}))
    {
        connectedUsers[response.recieverID].send(JSON.stringify({
            post:"socket_reciept",
            msg:{status:"read" , roomID:req.body.roomID}
        }))
    }

    res.status(response.ok ? 200 : 400).json({data:JSON.stringify({msg:response.msg})});
})


.post("/chatroom/activate/link" , async (req,res) =>{

    const response = await stripePayment({
        pubiD:req.body.userPubID ,
        productData:{
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'Account Activation',
              },
              unit_amount: 10000, // amount in cents
            },
            quantity: 1,
          },
    });

    res.status(response.ok ? 200 : 400).json({data:JSON.stringify({msg:response.msg})});

})

.get("/activate/account/redirect" , (req,res) =>{
    const body_req = req.query;

    if(body_req.type === "05")
    {
        const pubID = body_req.id.split("__id")[0];
        switch(true)
        {
            case body_req.id.split("__id").length > 1:
                async function run()
                {
                    const response = await activateAcc({pubID:pubID , read:read_doc_collection , write:write_doc_collection});

                    console.log(response)

                    let timeout = setTimeout(() => {
                        res.render(path.join(__dirname , '../static/redirect/redirect.ejs') , {paymentStatus:"payment was successful , your account has been activated" , pubID:pubID});

                        clearTimeout(timeout)
                    }, 1000);
                    
                }

                run()
                
            break;
            default:
                res.send("Invalid public ID")
        }
        
    }else{
        const pubID = body_req.id.split("__id")[0];
        switch(true)
        {
            case body_req.id.split("__id").length > 1:
                res.render(path.join(__dirname , '../static/redirect/redirect.ejs') , {paymentStatus:"payment failed , account not activated" , pubID:pubID});
            break;
            default:
                res.send("Invalid public ID")
        }
    }
})


module.exports = router;