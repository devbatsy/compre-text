import { __sS, __SYD, SYD_VAR  , __c , __g , __u , __sC, __p, __v} from "../../sydneyDom_v2.js"

import {newfetch , getText_main_screen, disable_search_tab_add_contact} from "./globFuncLib.js"
import "./variables.js"
import "./socket.js"
import { initUser } from "./__init.js"

import "../loader/loader-c.js"

import "../loader/line_loader.js"

__sS([
    {
        nameTag:'b_rad_l',
        style:{
            borderRadius:'30px'
        }
    }
])

__sS([
    {
        nameTag:'b_rad_l1',
        style:{
            borderRadius:'10px'
        }
    }
])

__sS([
    {
        nameTag:'b_rad_l2',
        style:{
            borderRadius:'7px'
        }
    }
])

__sS([
    {
        nameTag:'b_rad_18',
        style:{
            borderRadius:'18px'
        }
    }
])


__sS([
    {
        nameTag:"container",
        style:{
            height:'100vh',
            width:'100vw',
            background:'#fbeedb',
            position:'relative',
            overflow:'hidden',
            fontFamily:'jose'
        }
    }
])

__sS([
    {
        nameTag:"signUp_model_design_input",
        style:{
            height:'40px',
            minHeight:'40px',
            width:'100%',
            background:'unset',
            borderBottom:'1px solid #2D1A30',
            padding:'5px',
            borderRadius:'0px;'
        }
    },
    {
        nameTag:'signUp_model_shadow',
        style:{
            boxShadow:'1px 2px 3px rgba(0,0,0,.3)'
        }
    },
    {
        nameTag:'signUp_model_shadow_nerfed',
        style:{
            boxShadow:'1px 1px 2px rgba(0,0,0,.15)'
        }
    }
])

__sS([
    {
        nameTag:'icon_style_20',
        style:{
            minHeight:'20px',
            minWidth:'20px',
            maxHeight:'20px',
            maxWidth:'20px'
        }
    }
])

__sS([
    {
        nameTag:'icon_style_18',
        style:{
            minHeight:'18px',
            minWidth:'18px',
            maxHeight:'18px',
            maxWidth:'18px'
        }
    }
])

//REUSE COMPONENTS
__SYD.max_3 = ({text = '' , color = '#2D1A30' , width = '' , fontFamily = 'inherit'} = {}) =>{
    return __c(
        'div',
        {
            style:`font-size:25px;color:${color};font-weight:500;text-transform:capitalize;width:${width};font-family:${fontFamily};`,
            class:'capitalize_first_letter'
        },
        [
            text
        ]
    )
}

__SYD.notFoundText = (text = "Search not found!") =>{
    return __c("p" , {style:`color:${SYD_VAR.plum_light_grey};`},[`${text}`])
}
//REUSE COMPONENTS

__SYD.display_mobile_menu_icon = (componentName) =>{
    const compName = componentName
    const check_menu = __p(['chatMainPanel' , 'displayTab1'] , true);

    return __c(
        "i",
        {
            style:`display:${!check_menu ? 'flex' : 'none'};font-size:18px;font-weight:900;color:${SYD_VAR.sand};min-height:30px;min-width:30px;height:30px;width:30px;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);align-items:center;justify-content:center;border-radius:50%;`,
            class:"fa-solid fa-grip-vertical"
        },[],{
            events:{
                onclick:e =>{
                    const state = __g(compName);
                    state.display_menu_tab = state.display_menu_tab ? false : true;
                    __u(compName , {type:'a' , value:state});

                    __v[compName].focus();
                }
            }
        }
    )
}


__SYD.chatAppfrontier_group_info = ({compName , accessKey} = {}) =>{
    const object = __p(["chatMainPanel" , "contactGroupArray"] , [])[accessKey];

    console.log(object)

    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;border-bottom:1px solid ${SYD_VAR.plum_light_grey}`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:40px;min-width:40px;max-height:40px;max-width:40px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:5px;display:flex;flex-direction:column;row-gap:5px;"
                },
                [
                    __c(
                        "span",
                        {
                            style:`height:15px;width:15px;position:absolute;bottom:0;right:0;background:${SYD_VAR.rose};border-radius:50%;display:flex;justify-content:center;align-items:center;font-size:10px;color:${SYD_VAR.sand}`
                        },["5"]
                    ),


                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __SYD.norm_text_component({value:`${object.friendName
                            }` , style:`color:${SYD_VAR.plum};max-width:100px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;`}),
                            __c("p" , {style:'font-size:11px;font-weight:300'},['Today 9:52 PM']),
                        ]
                    ),


                    __SYD.norm_2_text_component({value:`${object.chats[object.chats.length-1].textContent}` , style:`max-width:120px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:${SYD_VAR.plum_light_grey}`})
                ]
            )
        ],
        {
            events:{
                onclick:e =>{
                    enter_message_tab();

                    const state = __g("chat_main_tab3_chat_screen");
                    state.chat_screen_mode = 'group';
                    __u('chat_main_tab3_chat_screen' , {type:"a" , value:state})
                }
            }
        }   
    )
}





__SYD.chatAppfrontier_people_info = ({accessKey} = {}) =>{
    const object = __p(["chatMainPanel" , "contactChatArray"] , [])[accessKey];
    let lastMessageTime = "";
    let unseenMessage = "0";
    let recentMessage = "No messages"

    switch(object.chats.length > 0)
    {
        case true:
            lastMessageTime = object.chats[object.chats.length-1].timeSent.dateString;
            unseenMessage = object.chats.filter(val =>{return !val.read}).length;
            recentMessage = object.chats[object.chats.length-1].textContent
    }

    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;border-bottom:1px solid ${SYD_VAR.plum_light_grey}`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:40px;min-width:40px;max-height:40px;max-width:40px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:5px;display:flex;flex-direction:column;row-gap:5px;"
                },
                [
                    __c(
                        "span",
                        {
                            style:`height:15px;width:15px;position:absolute;bottom:0;right:0;background:${SYD_VAR.rose};border-radius:50%;display:${unseenMessage === 0 ? "none" : "flex"};justify-content:center;align-items:center;font-size:10px;color:${SYD_VAR.sand}`
                        },[`${unseenMessage}`]
                    ),


                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __SYD.norm_text_component({value:`${object.friendName
                            }` , style:`color:${SYD_VAR.plum};max-width:100px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;`}),
                            __c("p" , {style:'font-size:11px;font-weight:500'},[`${lastMessageTime}`]),
                        ]
                    ),


                    __SYD.norm_2_text_component({value:`${recentMessage}` , style:`max-width:120px;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:${SYD_VAR.plum_light_grey}`})
                ]
            )
        ],
        {
            events:{
                onclick: async (e) =>{
                    enter_message_tab();

                    const state = __g("chat_main_tab3_chat_screen");
                    state.chat_screen_mode = 'contact';
                    state.currentChatIndex = accessKey
                    __u('chat_main_tab3_chat_screen' , {type:"a" , value:state});

                    const response = await newfetch({
                        method:"POST",
                        route:"/chatroom/contact/message/read",
                        body:{roomID:__p(['chatMainPanel' , "contactChatArray"],[])[accessKey].pubID , userID:clientPubID}
                    })

                    const state2 = __g("chatMainPanel");
                    let index = state2.contactChatArray[accessKey].chats.length;

                    for(let i = index-1; i >= 0; i--)
                    {
                        if(!state2.contactChatArray[accessKey].chats[i].read)
                        {
                            state2.contactChatArray[accessKey].chats[i].read = true;
                        }else break;
                    }

                    __u('chatMainPanel' , {type:"a" , value:state2});
                }
            }
        }   
    )
}






__SYD.chatAppfrontier_top_user_profile = () =>{
    const accessName = __p(['chat_main_tab3_chat_screen' , 'chat_screen_mode'],"");
    let profileName = "";
    let isOnline = false;
    if(accessName.length > 0)
    {
        const object = __p(['chatMainPanel' , accessName  === 'group' ? "contactGroupArray" : 'contactChatArray'] , [])[__p(['chat_main_tab3_chat_screen','currentChatIndex'],0)];
        if(object !== undefined)
        {
            profileName = object.friendName
            isOnline = object.isOnline;
        }
        
    }    //chat_main_tab3_chat_screen

    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;`
        },
        [
            __c(
                'div',
                {
                    style:`min-height:45px;min-width:45px;max-height:45px;max-width:45px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:15px;display:flex;flex-direction:column;row-gap:5px;justify-content:center;"
                },
                [
                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __c("p" , {style:'width:fit-content;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;text-transform:capitalize;'},[`${profileName}`]),
                        ]
                    ),


                    __c("p" , {style:`font-size:12px;width:fit-content;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;color:${SYD_VAR.plum_light_grey}`},[
                        __c('span' , {style:''},[`${isOnline ? "online" : "offline"}`]),
                        // " - Last Seen , ",
                        // __c('span' , {style:''},["2:02pm"]),
                    ]),
                ]
            )
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
    )
}





__SYD.search_result_component_addUser = ({accessKey , compName , accessName = 'children'} = {}) =>{
    let object = {username:"contact name" , imageSrc:"" , pubID:""};
    if(compName)
    {
        object = __p([compName , accessName] , [])[accessKey];

    }
    return __c(
        "div",
        {
            style:`padding:7px 0;font-size:14px;display:flex;align-items:center;cursor:pointer;position:relative;border-radius:10px;`+__sC['signUp_model_shadow_nerfed']()//border-bottom:1px solid ${SYD_VAR.plum_light_grey};
        },
        [
            __c(
                "i",
                {
                    style:`min-height:30px;min-width:30px;height:30px;width:30px;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);align-items:center;justify-content:center;display:${object.pubID === clientPubID ? "none" : "flex"};border-radius:50%;font-size:16px;font-weight:900;color:${SYD_VAR.sand};position:absolute;right:8px;top:50%;transform:translateY(-50%);padding:20px;`,
                    class:"fa-solid fa-user-plus"
                }
            ),
            __c(
                'div',
                {
                    style:`min-height:45px;min-width:45px;max-height:45px;max-width:45px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("${object.imageSrc}")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __c(
                "div",
                {
                    style:"position:relative;height:100%;width:100%;margin-left:15px;display:flex;flex-direction:column;row-gap:5px;justify-content:center;align-items:flex-start;"
                },
                [
                    __c(
                        "div",
                        {
                            style:"display:flex;justify-content:space-between;text-transform:capitalize;"
                        },
                        [
                            __c("p" , {style:'width:fit-content;max-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;'},[`${object.pubID === clientPubID ? "You" : object.username}`]),
                        ]
                    ),
                ]
            )
        ],
        {
            events:{
                onclick: async () =>{
                    const response = await newfetch({
                        method:"POST",
                        route:"/chatroom/contact/add",
                        body:{
                            user:clientPubID,
                            contact:object.pubID
                        }
                    });

                    // alert(response.jsonResponse.data);
                    // console.log(response.response.status)

                    let timeOut = setTimeout(() => {
                        if(response.response.status !== 400)
                        {
                            initUser();
                        }

                        disable_search_tab_add_contact()
                        clearTimeout(timeOut)
                    }, 2000);//get new contact info
                }
            }
        }
    )
}






__SYD.clientMsg_tab = (i) =>{
    const check = __p(['chat_main_tab3_chat_screen' , 'chat_screen_mode'],'') === 'group';

    return __c(
        'div',
        {
            style:"height:fit-content;width:100%;display:flex;justify-content:flex-start;padding:5px 0;position:relative;",
            class:"clientMsg_tab"
        },
        [
            __c(
                "div",
                {
                    style:`padding: 10px;display:flex;flex-direction:column;width:fit-content;row-gap:5px;background:${"lightgrey"};border-radius:20px;border-top-left-radius:unset;max-width:min(70% , 300px);box-shadow:-1px 1px 0px rgba(0,0,0,.3);`
                },
                [
                    __SYD.norm_3_text_component({value:'sender\'s name' , style:`color:${SYD_VAR.rose};display:${check ? 'block' : 'none'};font-weight:500;text-transform:capitalize;`}),
                    __c(
                        'p',
                        {
                            style:`position:relative;width:fit-content;`
                        },
                        [
                            __SYD.norm_text_component({value:`${getText_main_screen(i).text}` , style:`color:${SYD_VAR.plum};`}),
                            // __c("br") ,
                            //  __c("br") ,
                            //   __SYD.norm_text_component({value:"contact message here" , style:`color:${SYD_VAR.plum}`}),
                            __c("p" , {style:'position:absolute;top:calc(100% + 13px);left:3px;font-size:11px;font-weight:500;width:max-content;'},[`${getText_main_screen(i).time}`]),
                        ]
                    )
                ]
            ),
        ]
    )
}



__SYD.UserMsg_tab = (i) =>{
    return __c(
        'div',
        {
            style:`height:fit-content;width:100%;display:flex;justify-content:flex-end;padding:5px 0;position:relative;margin-right:3px;`,
            class:"clientMsg_tab"
        },
        [
            __c(
                'p',
                {
                    style:`padding: 10px;background:lightgrey;position:relative;width:fit-content;border-radius:20px;border-top-right-radius:unset;max-width:min(70% , 300px);color:${SYD_VAR.sand};background:${SYD_VAR.plum_light};box-shadow:1px 1px 0px rgba(0,0,0,.3);`
                },
                [
                    __SYD.norm_text_component({value:`${getText_main_screen(i).text}` , style:`color:${SYD_VAR.sand}`}),

                    __c("p" , {style:`color:${SYD_VAR.plum};position:absolute;top:calc(100% + 3px);right:18px;font-size:11px;font-weight:500;width:max-content;`},[`${getText_main_screen(i).time}`]),
                    
                    __c(
                        'span',
                        {
                            style:`height:10px;width:10px;border-radius:50%;background:${getText_main_screen(i).read ? SYD_VAR.plum_light : "lightgrey"};position:absolute;top:calc(100% + 3px);right:0px;`
                        }
                    ),
                ]
            )
        ]
    )
}

__SYD.norm_text_component = ({value = "" , style = ""} = {}) =>{
    return __c(
        "p",
        {
            style:`color:${SYD_VAR.sand};font-size:${SYD_VAR.norm_text_size};${style};`,
            class:'edit1' 
        },
        [
            value
        ]
    )
}

__SYD.norm_2_text_component = ({value = "" , style = "" , class_ = ""} = {}) =>{
    return __c(
        "p",
        {
            style:`color:${SYD_VAR.sand};font-size:${SYD_VAR.norm_2_text_size};${style};` ,
            class:`edit2 ${class_}` 
        },
        [
            value
        ],
    )
}

__SYD.norm_3_text_component = ({value = "" , style = ""} = {}) =>{
    return __c(
        "p",
        {
            style:`color:${SYD_VAR.sand};font-size:${SYD_VAR.norm_3_text_size};${style};`,
            class:'edit3' 
        },
        [
            value
        ]
    )
}

__SYD.chat_mobile_btn = () =>{
    // const accLocked = __p(['chatMainPanel' , 'accLocked'] , true);

    return __c(
        'p',
        {
            style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};position:relative`,
            class:"hover_menu_icon"
        },
        [
            "chats",
            // __c(
            //     "i",{style:`display:${__p(['chatMainPanel' , 'accLocked'] , true) ? "block" : "none"};color:${SYD_VAR.gold};transform:translateY(-50%);position:absolute;top:50%;right:30px;height:12px;width:12px;font-size:12px;`,class:"fa-solid fa-lock"}
            // )
        ],{events:{
            onclick:(e) =>{
                if(!__p(['chatMainPanel' , 'accLocked'] , true)) {tab1_switch_function("1",e)};
            }
        }}
    )
}






//FUNCTIONS REALM

function enter_message_tab()
{
    const checkAppMode = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);

    switch(checkAppMode)
    {
        case false:{
            const state = __g('chatMainPanel');
            state.displayTab3_text_display_area = true;
            __u("chatMainPanel" , {type:'a' , value:state})
        }
        case true:
            const state = __g('chat_main_tab_3');
            state.current_mini_display = "1"
            __u("chat_main_tab_3" , {type:'a' , value:state})
        break;
    }
}


export const tab1_switch_function = (i , el) =>{

    // el.target.parentElement.querySelectorAll('.hover_menu_icon').forEach(val =>{
    //     val.style.background = 'transparent'
    // })

    // console.log(el.target)

    // el.target.style.background = 'lightgrey'

    const state = __g('chat_main_tab_1');
    state.tab1_current = i;
    __u('chat_main_tab_1' , {type:'a' , value:state})

    const state2 = __g('chatMainPanel');
    state2.topLevelDisplay = i;
    __u('chatMainPanel' , {type:'a' , value:state2})
    
}


//ACCESS MEANS FOR ALL COMPONENTS IS THE CHAT MODE AND CHAT ID