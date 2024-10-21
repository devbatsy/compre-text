import { __c, __SYD , __sC, SYD_VAR, __sS, __p, __g, __u, __v} from "../../../sydneyDom_v2.js";
import { getClientName_pubID, newfetch } from "../../routeFiles/globFuncLib.js";
import { getSocket } from "../../routeFiles/socket.js";

__sS({
    nameTag:'tab3_screen_tab',
    style:{
        height:'100%',
        width:'100%',
        position:'absolute',
        top:'0',
        left:'0',
        background:'inherit',
        borderRadius:'inherit'
    }
})


let initDisplay = false;

__SYD.chat_main_tab_3 = () =>{
    const check = __p(['chatMainPanel' , 'displayTab3_text_display_area'],false) || __p(['chatMainPanel' , 'queryType_desktop_tab'],false)
    return __c(
        "div",
        {
            style:`display:${check ? 'block' : 'none'};height:100%;width:100%;background:${'#fff'};position:relative;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __SYD.chat_main_tab3_blank_screen(),
            __SYD.chat_main_tab3_chat_screen(),
        ],
        {
            createState:{
                stateName:'chat_main_tab_3',
                state:{
                    current_mini_display:"0"
                }
            }
        }
    )
}

__SYD.chat_main_tab3_blank_screen = () =>{
    const check = __p(['chat_main_tab_3' , 'current_mini_display'] , "0") === "0"
    return __c(
        "div",
        {
            style:__sC['tab3_screen_tab']() + `display:${check ? 'flex':'none'};justify-content:center;align-items:center;`
        },
        [
            __c(
                'p',
                {
                    style:`font-size:25px;font-weight:700;color:${SYD_VAR.plum_light_grey};text-transform:capitalize;`
                },
                [
                    'chat conversations will appear here'
                ]
            )
        ]
    )
}


__SYD.chat_main_tab3_chat_screen = () =>{
    const check = __p(['chat_main_tab_3' , 'current_mini_display'] , "0") === "1";

    return __c(
        "div",
        {
            style:__sC['tab3_screen_tab']() + `display:${check ? 'flex':'none'};flex-direction:column;row-gap:10px;padding:15px 20px;justify-content:flex-end;position:relative;overflow:hidden;`
        },
        [
            __SYD.chat_main_tab3_chat_screen_top_tab(),
            __SYD.chat_main_tab3_main_text_main_display_screen(),
            __SYD.chat_main_tab3_chat_text_message_tab(),
            __SYD.room_chat_client_profile_display()
        ],
        {
            createState:{
                stateName:"chat_main_tab3_chat_screen",
                state:{
                    chat_screen_mode:"",
                    currentChatIndex:0
                }
            }
        }
    )
}


__SYD.chat_main_tab3_chat_screen_top_tab = () =>{
    return __c(
        "div",
        {
            style:`position:relative;min-height:60px;height:60px;width:100%;display:flex;justify-content:space-between;border-bottom:1px solid ${SYD_VAR.plum_light_grey}`
        },
        [
            __SYD.chatAppfrontier_top_user_profile(),
            __SYD.chat_main_tab3_chat_screen_top_tab_icons(),
            __SYD.room_chat_tab3_chatMenu_tab()
        ]
    )
}


__SYD.chat_main_tab3_chat_screen_top_tab_icons = () =>{
    return __c(
        "div",
        {
            style:"padding:5px;display:flex;column-gap:20px;align-items:center;min-width:fit-content;"
        },
        [
            __c(
                "i",
                {
                    style:`font-size:18px;color:${SYD_VAR.plum_light};` + __sC['icon_style_18'](),
                    class:"fa-solid fa-arrow-left"
                },[],{
                    events:{
                        onclick:exit_message_tab
                    }
                }
            ),
            __c(
                "i",
                {
                    style:`font-size:18px;color:${SYD_VAR.plum_light};` + __sC['icon_style_18'](),
                    class:"fa-solid fa-magnifying-glass"
                }
            ),

            __c(
                "i",
                {
                    style:`min-height:30px;min-width:30px;height:30px;width:30px;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);align-items:center;justify-content:center;display:flex;border-radius:50%;font-size:18px;font-weight:900;color:${SYD_VAR.sand};`,
                    class:"fa-solid fa-ellipsis-vertical"
                },[],{
                    events:{
                        onclick:e =>{
                            const state = __g('room_chat_tab3_chatMenu_tab');
                            state.display_menu_tab = state.display_menu_tab ? false : true;
                            __u('room_chat_tab3_chatMenu_tab' , {type:'a' , value:state});

                            __v['room_chat_tab3_chatMenu_tab'].focus()
                        }
                    }
                }
            ),
        ]
    )
}



__SYD.chat_main_tab3_main_text_main_display_screen = () =>{

    const accessName = __p(['chatMainPanel' , 'chat_screen_mode'],"") === "group" ? "contactGroupArray" : "contactChatArray";

    const currentIndex = __p(['chat_main_tab3_chat_screen' , 'currentChatIndex'],0);

    const renderElem = () =>{
        const getChildren = __p(['chatMainPanel' , accessName],[]);
        const render = new Array()

        if(currentIndex !== -1)
        {
            switch(getChildren.length > 0)
            {
                case true:
                    const current = getChildren[currentIndex];
                    switch(current.chats.length === 0)
                    {
                        case true:
                            // console.log("no chat to load")
                        break;
                        default:
                            for(let i = 0; i < current.chats.length; i++)
                            {
                                const chatObject = current.chats[i];
                                if(chatObject.senderPubID === clientPubID)
                                {
                                    render.push(
                                        __SYD.UserMsg_tab(i)
                                    )
                                }else{
                                    render.push(
                                        __SYD.clientMsg_tab(i)
                                    )
                                }
                            }
                    }
            }
        }
        return render;
    }

    return __c(
        "div",
        {
            style:"height:100%;width:100%;overflow:scroll;display:flex;row-gap:25px;flex-direction:column;padding-right:3px;padding-bottom:30px;padding-top:20px;"
        },
        [
            // __SYD.clientMsg_tab(),
            // __SYD.clientMsg_tab(),
            // __SYD.UserMsg_tab(),
            // __SYD.clientMsg_tab(),
            // __SYD.UserMsg_tab(),
            // __SYD.clientMsg_tab(),
            // __SYD.UserMsg_tab(),
            ...renderElem()
        ]
    )
}





//Lower message Texting Tab
__SYD.chat_main_tab3_chat_text_message_tab = () =>{
    return __c(
        "div",
        {
            style:"height:fit-content;min-height:50px;width:100%;display:flex;align-items:flex-end;column-gap:10px;z-index:100;"
        },
        [
            __SYD.chat_main_tab3_chat_text_message_tab_msg_box(),
            __SYD.chat_main_tab3_chat_text_message_tab_send_icon()
        ]
    )
}





__SYD.chat_main_tab3_chat_text_message_tab_msg_box = () =>{
    return __c(
        "div",
        {
            style:`min-height:40px;height:fit-content;width:100%;background:${SYD_VAR.sand};display:flex;column-gap:5px;padding:8px 10px;align-items:center;align-items:flex-end;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "i",
                {
                    style:`font-size:20px;color:${SYD_VAR.plum_light_grey};` + __sC['icon_style_20'](),
                    class:"fa-solid fa-face-laugh"
                }
            ),

            __c(
                "textarea",
                {
                    style:"height:20px;min-height:100%;width:100%;padding-left:10px;font-size:16px;font-family:jose;background:unset;resize:none;max-height:80px;",
                    class:'chat_main_tab3_chat_text_message_tab_msg_box_input',
                    placeholder:'Type your message here...',
                    // oninput:'this.style.height = "";this.style.height = this.scrollHeight + "px"'
                },[],
                {
                    type:"chat_main_tab3_chat_text_message_tab_msg_box",
                    events:{
                        oninput:e =>{
                            switch(true)
                            {
                                case e.target.value.includes("\n") || e.target.value.includes("\r\n"):
                                    e.target.style.height = "";
                                    e.target.style.height = e.target.scrollHeight + "px";
                                break;
                                default:
                                    e.target.style.height = "20px";
                            }

                        },

                        onfocus:e =>{
                            // console.log(window.innerWidth , window.innerHeight)
                            if(window.innerWidth < window.innerHeight)
                            {
                                if(document.fullscreenElement){
                                    document.exitFullscreen();
                                    initDisplay = true;
                                }
                            }
                        },

                        onblur:e =>{
                            // console.log(window.innerWidth , window.innerHeight)
                            if(window.innerWidth < window.innerHeight)
                            {
                                if(initDisplay){
                                    document.documentElement.requestFullscreen();
                                    initDisplay = false
                                }
                            }
                        }
                    }
                }
            )
        ]
    )
}



__SYD.chat_main_tab3_chat_text_message_tab_send_icon = () =>{
   return __c(
        'i',
        {
            style:`color:${SYD_VAR.sand};font-size:18px;min-height:35px;min-width:35px;display:flex;justify-content:center;align-items:center;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);border-radius:50%;`,
            class:`fa-solid fa-paper-plane`
        },[],
        {
            events:{
                onclick: async (e) =>{

                    getSocket().send(JSON.stringify({msg:"hello Server"}))
                    
                    const pending_message = __v["chat_main_tab3_chat_text_message_tab_msg_box"].value;

                    __v["chat_main_tab3_chat_text_message_tab_msg_box"].value = "";

                    const accessName = __p(['chatMainPanel' , 'chat_screen_mode'],"") === "group" ? "contactGroupArray" : "contactChatArray";

                    const currentIndex = __p(['chat_main_tab3_chat_screen' , 'currentChatIndex'],0);

                    const response = await newfetch({
                        method:"POST",
                        route:"/chatroom/contact/message/send",
                        body:{
                            senderID:clientPubID,
                            // recieverID:getClientName_pubID().userPubId,
                            message:pending_message,
                            roomID:getClientName_pubID().roomID
                        }
                    })

                    console.log(response , " response")

                    const state = __g('chatMainPanel');
                    state[accessName][currentIndex].chats.push(
                        JSON.parse(response.jsonResponse.data).parcel
                    )
                    __u('chatMainPanel' , {type:"a" , value:state})
                }
            }
        }
    )
}



//CHAT MENU TAB COMPONENT , PARAMS INCLUDE VIEW PROFILE , BLOCK , EXPORT CHAT
__SYD.room_chat_tab3_chatMenu_tab = () =>{
    const check = __p(['room_chat_tab3_chatMenu_tab' , 'display_menu_tab'] , false);

    const checkScreenMode = __p(['chat_main_tab3_chat_screen','chat_screen_mode'],"");

    return __c(
        "div",
        {
            style:`display:${check ? 'flex' : 'none'};position:absolute;top:100%;right:0;padding:25px 10px;row-gap:20px;flex-direction:column;background:#fff;z-index:999;width:200px;outline:none;` + __sC['signUp_model_shadow']() + __sC['b_rad_l1'](),
            tabindex:"1",
            class:'dropDownEntryAnimation'
        },
        [
            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};`,
                    class:"hover_menu_icon"
                },
                [
                    checkScreenMode === "group" ? "group info" : "view profile"
                ],
                {
                    events:{
                        onclick: e =>{
                            const state = __g('room_chat_client_profile_display');
                            state.slideDisplay = true;
                            __u('room_chat_client_profile_display' , {type:"a" , value:state});
        
                            __v['room_chat_client_profile_display'].focus();
                        }
                    }
                }
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};`,
                    class:"hover_menu_icon"
                },
                [
                    "export chat"
                ]
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};`,
                    class:"hover_menu_icon"
                },
                [
                    "block"
                ]
            ),
        ],
        {
            createState:{
                stateName:'room_chat_tab3_chatMenu_tab',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('room_chat_tab3_chatMenu_tab');
                    state.display_menu_tab = false;
                    __u('room_chat_tab3_chatMenu_tab' , {type:'a' , value:state});
                }
            }
        }
    )
}




function exit_message_tab()
{
    const checkAppMode = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);

    const state = __g("chat_main_tab3_chat_screen");
    state.currentChatIndex = -1;
    __u("chat_main_tab3_chat_screen" , {type:"a" , value:state})


    switch(checkAppMode)
    {
        case true:
            const state = __g('chat_main_tab_3');
            state.current_mini_display = "0"
            __u("chat_main_tab_3" , {type:'a' , value:state})
        break;
        case false:{
            const state = __g('chatMainPanel');
            state.displayTab3_text_display_area = false
            __u("chatMainPanel" , {type:'a' , value:state})
        }
    }
    
}
