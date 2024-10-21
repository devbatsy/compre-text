import {__g, __p, __u} from "../../sydneyDom_v2.js"

import { initUser } from "./__init.js";

const socketConnectionLink = "wss://compre-text.uc.r.appspot.com/";
let ws;

export const getSocket = () =>{
    return ws;
}

let closedInterval;

function setSocket()
{
    ws = new WebSocket(socketConnectionLink);
}

function init_sockect_events()
{
    ws.addEventListener("open" , () =>{
        console.log("user is connected successfully");

        ws.send(JSON.stringify({
            myID:clientPubID,
            post:"init_connection"
        }))


        message_routes();

        
    })




    ws.addEventListener("close" , () =>{
        console.log("connection closed , attempting reconnection")
        closedInterval = setInterval(() => {
            ws.close()

            
            ws = new WebSocket(socketConnectionLink);

            ws.addEventListener("open" , () =>{
                console.log("user is connected successfully");
                clearInterval(closedInterval);

                ws.send(JSON.stringify({
                    myID:clientPubID,
                    post:"init_connection"
                }))

                initUser();//reinitialise user

                message_routes()

                init_sockect_events()
            });

            ws.addEventListener("close" , () =>{
                ws.close()
            })
        }, 3000);
    })




}


function message_routes()
{
    ws.addEventListener("message" , ({data}) =>{
        const parsed = JSON.parse(data);

        switch(parsed.post)
        {
            case "UserChat":
                const state = __g("chatMainPanel");
                let chat_contact_index = 0;
                for(let i = 0; i < state.contactChatArray.length; i++)
                {
                    if(state.contactChatArray[i].friendPubID === parsed.data.senderPubID)
                    {
                        chat_contact_index = i;
                        break;
                    }
                }

                state.contactChatArray[chat_contact_index].chats.push(
                    parsed.data
                );

                if(__p(['chat_main_tab3_chat_screen' , 'currentChatIndex'],-999) === chat_contact_index && __p(['chatMainPanel' , 'displayTab3_text_display_area'],false))
                {
                    let index = state.contactChatArray[chat_contact_index].chats.length;

                    for(let i = index-1; i >= 0; i--)
                    {
                        if(!state.contactChatArray[chat_contact_index].chats[i].read)
                        {
                            state.contactChatArray[chat_contact_index].chats[i].read = true;
                        }else break;
                    }
                }
                __u("chatMainPanel" , {type:'a' , value:state});

                // alert(`recieved new message from ${state.contactChatArray[chat_contact_index].friendName}`)

            break;
            case "socket_reciept":{
                const state = __g("chatMainPanel");

                for(let i = 0; i < state.contactChatArray.length; i++)
                {
                    if(state.contactChatArray[i].pubID === parsed.msg.roomID)
                    {
                        for(let j = state.contactChatArray[i].chats.length-1; j >= 0;  j--)
                        {
                            console.log(state.contactChatArray[i].chats[j].read)
                            if(!state.contactChatArray[i].chats[j].read)
                            {
                                state.contactChatArray[i].chats[j].read = true
                            }else
                            {
                                break
                            }
                        }
                        break;
                    }
                }

                __u("chatMainPanel" , {type:'a' , value:state});
            }
            break;
            case "friendOnline":{
                
                const state = __g("chatMainPanel");

                for(let i = 0; i < state.contactChatArray.length; i++)
                {
                    if(state.contactChatArray[i].pubID === parsed.msg.roomID)
                    {
                        state.contactChatArray[i].isOnline = true;
                        break;
                    }
                }

                __u("chatMainPanel" , {type:'a' , value:state});

            }
            break;
            case "friendOffline":{
                
                const state = __g("chatMainPanel");

                for(let i = 0; i < state.contactChatArray.length; i++)
                {
                    if(state.contactChatArray[i].pubID === parsed.msg.roomID)
                    {
                        state.contactChatArray[i].isOnline = false;
                        break;
                    }
                }

                __u("chatMainPanel" , {type:'a' , value:state});

            }
            break;
            case "addedToFriend":
                let timeOut = setTimeout(() => {
                    initUser();
                    clearTimeout(timeOut)
                }, 3000);
                
        }
    })
}
try{
    if(clientPubID !== undefined)
        {
            setSocket()
            init_sockect_events();
        }
}catch(err)
{
    console.log(err.message)
}


// window.addEventListener("click" , ()=>{
//     ws.close()
// })