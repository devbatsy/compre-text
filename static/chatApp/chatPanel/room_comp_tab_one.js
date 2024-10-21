import { __c, __p, __sC, __SYD, __u, SYD_VAR , __g} from "../../../sydneyDom_v2.js"


const tab1_switch_function = (i) =>{
    const state = __g('chat_main_tab_1');
    state.tab1_current = i;
    __u('chat_main_tab_1' , {type:'a' , value:state})

    const state2 = __g('chatMainPanel');
    state2.topLevelDisplay = i;
    __u('chatMainPanel' , {type:'a' , value:state2})
    
}

__SYD.chat_main_tab_1 = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    return __c(
        'div',
        {
            style:`height:100%;min-width:70px;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);display:${check ? 'flex' : 'none'};flex-direction:column;align-items:center;padding:20px 0px;row-gap:50px;` + __sC['b_rad_l1']()
        },
        [
            __SYD.profileImage(),
            __SYD.chat_main_tab_1_min_tab_utils_icons(),
            __SYD.logOutUtilsBtn()
        ],
        {
            createState:{
                stateName:'chat_main_tab_1',
                state:{
                    tab1_current:'0'
                }
            }
        }
    )
}





__SYD.profileImage = () =>{
    return __c(
        'div',
        {
            style:`min-height:50px;min-width:50px;max-height:50px;max-width:50px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
        },[],
        {
            genericStyle:['bg_cover']
        }
    )
}



__SYD.logOutUtilsBtn = () =>{
    return __c(
        "i",
        {
            style:`color:${SYD_VAR.sand};font-size:20px;` + __sC['icon_style_20'](),
            class:"fa-solid fa-door-open"
        }
    )
}



__SYD.chat_main_tab_1_min_tab_utils_icons = () =>{
    const tab_check = __p(['chat_main_tab_1' , 'tab1_current'],'0');
    const accLocked = __p(['chat_main_tab_1_min_tab_utils_icons' , 'accLocked'] , true)

    return __c(
        'div',
        {
            style:'height:100%;width:100%;display:flex;flex-direction:column;row-gap:15px;align-items:center;row-gap:8px;padding:15px 0;'
        },
        [
            __c(
                'div',
                {
                    style:'padding:15px 0;display:flex;justify-content:center;width:100%;cursor:pointer',
                    class:` room_icon_tab_def ${tab_check === '0' ? 'room_icon_selected' : ''}`
                },
                [
                    __c(
                        'i',
                        {
                            style:`color:${SYD_VAR.sand};font-size:20px;` + __sC['icon_style_20'](),
                            class:`chat-msg-icon fa-solid fa-house`
                        },
                        [
                            
                        ]
                    )
                ],
                {
                    events:{
                        onclick:() =>{
                            tab1_switch_function('0')
                        }
                    }
                }
            ),


            __c(
                'div',
                {
                    style:`padding:15px 0;display:flex;justify-content:center;width:100%;cursor:pointer;cursor:${__p(['chat_main_tab_1_min_tab_utils_icons' , 'accLocked'] , true) ? "not-allowed" : "pointer"}`,
                    class:` room_icon_tab_def ${tab_check === '1' ? 'room_icon_selected' : ''}`
                },
                [
                    __c(
                        'i',
                        {
                            style:`color:${SYD_VAR.sand};font-size:20px;position:relative;cursor:inherit;` + __sC['icon_style_20'](),
                            class:`chat-msg-icon fa-solid fa-comment-dots`
                        },[
                            __c(
                                "i",{style:`display:${__p(['chat_main_tab_1_min_tab_utils_icons' , 'accLocked'] , true) ? "block" : "none"};color:${SYD_VAR.gold};position:absolute;top:100%;left:100%;height:12px;width:12px;font-size:12px;`,class:"fa-solid fa-lock"}
                            )
                        ]
                    ),
                ],
                {
                    events:{
                        onclick:() =>{
                            if(!__p(['chat_main_tab_1_min_tab_utils_icons' , 'accLocked'] , true)){
                                 tab1_switch_function('1');
                            }
                        }
                    }
                }
            ),
            

            __c(
                'div',
                {
                    style:'padding:15px 0;display:flex;justify-content:center;width:100%;cursor:pointer',
                    class:` room_icon_tab_def ${tab_check === '2' ? 'room_icon_selected' : ''}`
                },
                [
                    __c(
                        'i',
                        {
                            style:`color:${SYD_VAR.sand};font-size:20px;` + __sC['icon_style_20'](),
                            class:`chat-notification-icon fa-solid fa-bell`
                        }
                    ),      
                ],
                {
                    events:{
                        onclick:() =>{
                            tab1_switch_function('2')
                        }
                    }
                }
            ),


            __c(
                'div',
                {
                    style:'padding:15px 0;display:flex;justify-content:center;width:100%;cursor:pointer',
                    class:` room_icon_tab_def ${tab_check === '3' ? 'room_icon_selected' : ''}`
                },
                [
                    __c(
                        'i',
                        {
                            style:`color:${SYD_VAR.sand};font-size:20px;` + __sC['icon_style_20'](),
                            class:`chat-setting-icon fa-solid fa-gear`
                        }
                    ),      
                ],
                {
                    events:{
                        onclick:() =>{
                            tab1_switch_function('3')
                        }
                    }
                }
            ),
        ],
        {
            createState:{
                stateName:"chat_main_tab_1_min_tab_utils_icons",
                state:{accLocked:true}
            }
        }
    )
}