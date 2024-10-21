import { __sC, __sS, __SYD , __c , SYD_VAR, __p, __g, __u, __v} from "../../../sydneyDom_v2.js";
import {tab1_switch_function} from "../../routeFiles/routeComponent.js";
import {newfetch} from "../../routeFiles/globFuncLib.js"


__SYD.chat_main_tab_2_mobile = () =>{
    const check = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);
    const check2 = __p(['chatMainPanel' , 'displayTab3_text_display_area'],false);

    return __c(
        "div",
        {
            style:`height:100%;width:100%;background:#fff;overflow:scroll;padding:20px;display:${!check && !check2 ? 'flex' : 'none'};` + __sC['signUp_model_shadow']() + __sC['b_rad_l1']()
        },
        [
            __SYD.chatApp_tab_two_group_tab_mobile(),
            __SYD.chatApp_tab_two_people_tab_mobile(),
        ],
        {
            createState:{
                stateName:'chat_main_tab_2_mobile',
                state:{
                    currentDisplay:"0"
                }
            }
        }
    )
}



//MAIN TABS FOR CONTACT AND GROUPS
__SYD.chatApp_tab_two_group_tab_mobile = () =>{
    const check = __p(['chat_main_tab_2_mobile' , 'currentDisplay'],"0") === "1";

    const check_menu = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_search_result_tab = __p(['chatApp_tab_two_group_tab_mobile' , 'displaySearchResultTab'],false);

    const renderElem = () =>{
        const getChildren = __p(['chatMainPanel' , 'contactGroupArray'],[]);
        const render = new Array()

        switch(getChildren.length === 0)
        {
            case true:
                render.push(__SYD.notFoundText("Search and add groups ..."));
            break;
            default:
                getChildren.forEach((val,i) =>{
                    render.push(
                        __SYD.chatAppfrontier_group_info({
                            // compName:"chatApp_tab_two_peope_tab_desktop",
                            accessKey:i
                        })
                    )
                })       
        }

        return render;
    }

    return __c(
        "div",
        {
            style:`min-height:200px;width:100%;background:#fff;display:${check ? 'flex' : 'none'};flex-direction:column;row-gap:20px;position:relative;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;padding:8px 0;display:flex;flex-direction:${!check_menu ? 'row-reverse' : "row"};justify-content:space-between;align-items:center;font-size:17px;text-transform:capitalize;font-weight:500;position:relative;border-bottom:1px solid ${SYD_VAR.plum};`
                },
                [

                    __SYD.display_mobile_menu_icon("chat_room_menu_tab_mobile_group"),

                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:18px;font-weight:700;color:${SYD_VAR.gold};text-transform:uppercase;`
                        },
                        [
                            'App title'
                        ]
                    ),

                    __SYD.chat_room_menu_tab_mobile_group()
                ]
            ),
            __SYD.chatApp_tab_two_search_tab_mobile_group(),
            __SYD.search_display_result_group(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;display:${!check_search_result_tab ? "flex" : "none"};flex-direction:column;row-gap:inherit;padding-right:3px;padding-top:10px`,
                    class:'tab_two_desktop_scroll_tab'
                },
                [
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.chatAppfrontier_group_info()
                    ...renderElem()

                ]
            )
        ],
        {
            createState:{
                stateName:"chatApp_tab_two_group_tab_mobile",
                state:{
                    displaySearchResultTab:false
                }
            }
        }
    )
}


__SYD.chatApp_tab_two_people_tab_mobile = () =>{
    const check = __p(['chat_main_tab_2_mobile' , 'currentDisplay'],"0") === "0";

    const check_menu = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_search_result_tab = __p(['chatApp_tab_two_people_tab_mobile' , 'displaySearchResultTab'],false);

    const renderElem = () =>{
        const getChildren = __p(['chatMainPanel' , 'contactChatArray'],[]);
        const render = new Array()

        switch(getChildren.length === 0)
        {
            case true:
                render.push(__SYD.notFoundText("Search and add contacts"));
            break;
            default:
                getChildren.forEach((val,i) =>{
                    render.push(
                        __SYD.chatAppfrontier_people_info({
                            // compName:"chatApp_tab_two_peope_tab_desktop",
                            accessKey:i
                        })
                    )
                })       
        }

        return render;
    }

    return __c(
        "div",
        {
            style:`min-height:200px;width:100%;background:#fff;display:${check ? 'flex' : 'none'};flex-direction:column;row-gap:20px;position:relative;`
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;padding:8px 0;display:flex;flex-direction:${!check_menu ? 'row-reverse' : "row"};justify-content:space-between;align-items:center;font-size:17px;text-transform:capitalize;font-weight:500;position:relative;border-bottom:1px solid ${SYD_VAR.plum}`
                },
                [
                    __SYD.display_mobile_menu_icon("chat_room_menu_tab_mobile_contact"),

                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:18px;font-weight:700;color:${SYD_VAR.gold};text-transform:uppercase;`
                        },
                        [
                            'App title'
                        ]
                    ),

                    __SYD.chat_room_menu_tab_mobile_contact()
                ]
            ),
            __SYD.chatApp_tab_two_search_tab_mobile_people(),
            __SYD.search_display_result_people(),
            __c(
                "div",
                {
                    style:`height:100%;width:100%;display:${!check_search_result_tab ? "flex" : "none"};flex-direction:column;row-gap:inherit;padding-right:3px;padding-top:10px;overflow:scroll`,
                    class:'tab_two_desktop_scroll_tab'
                },
                [
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.chatAppfrontier_people_info(),
                    ...renderElem()

                ]
            )
        ],
        {
            createState:{
                stateName:"chatApp_tab_two_people_tab_mobile",
                state:{
                    displaySearchResultTab:false
                }
            }
        }
    )
}




//search tab for mobile panels

__SYD.chatApp_tab_two_search_tab_mobile_group = () =>{
    return __c(
        "div",
        {
            style:`min-height:50px;width:100%;background:${"#fff"};display:flex;column-gap:5px;padding:8px 10px;align-items:center;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow_nerfed']()
        },
        [
            __c(
                "input",
                {
                    style:"height:100%;width:100%;padding:0 10px;font-size:16px;font-family:jose;background:unset;",
                    class:'chatApp_tab_two_search_tab_desktop_input',
                    placeholder:'Search for groups'
                },[],{type:"search_mobile_group"}
            ),

            __c(
                "i",
                {
                    style:`font-size:20px;color:${SYD_VAR.plum_light_grey};` + __sC['icon_style_20'](),
                    class:"fa-solid fa-magnifying-glass-arrow-right"
                },[],
                {
                    events:{
                        onclick: async () =>{
                            if(/\w{1,}/.test(__v["search_mobile_group"].value))
                            {
                                __v['search_group_mobile'].style.display = "block";
                                
                                const state = __g('chatApp_tab_two_group_tab_mobile');
                                state.displaySearchResultTab = true;
                                __u('chatApp_tab_two_group_tab_mobile' , {type:'a' , value:state})
    
                                const state2 = __g('chat_main_tab_2_nav_mobile');
                                state2.display = false;
                                __u('chat_main_tab_2_nav_mobile' , {type:'a' , value:state2});
    
                                const state3 = __g('search_display_result_group');
                                state3.children = [];
                                __u("search_display_result_group" , {type:'a' , value:state3})
    
                                const response = await newfetch({
                                    method:"POST",
                                    route:"/chatroom/search",
                                    body:{searchParam:__v["search_mobile_group"].value , type:"group"}
                                })

                                __v['search_group_mobile'].style.display = "none";
    
                                // if(response.response.status === 200)
                                // {
                                    const data = JSON.parse(response.jsonResponse.data);
    
                                    const state4 = __g('search_display_result_group');
                                    state4.children = data;
                                    __u("search_display_result_group" , {type:'a' , value:state4})
    
                                // }
                            }
                        }
                    }
                }
            ),
        ],
        {
            createState:{
                stateName:'chatApp_tab_two_search_tab_mobile',
            }
        }
    )
}



__SYD.chatApp_tab_two_search_tab_mobile_people = () =>{
    return __c(
        "div",
        {
            style:`min-height:50px;width:100%;background:${"#fff"};display:flex;column-gap:5px;padding:8px 10px;align-items:center;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow_nerfed']()
        },
        [
            __c(
                "input",
                {
                    style:"height:100%;width:100%;padding:0 10px;font-size:16px;font-family:jose;background:unset;",
                    class:'chatApp_tab_two_search_tab_desktop_input',
                    placeholder:'Search for People'
                },[],{type:"search_mobile_people"}
            ),

            __c(
                "i",
                {
                    style:`font-size:20px;color:${SYD_VAR.plum_light_grey};` + __sC['icon_style_20'](),
                    class:"fa-solid fa-magnifying-glass-arrow-right"
                },[],
                {
                    events:{
                        onclick: async () =>{
                            if(/\w{1,}/.test(__v["search_mobile_people"].value))
                            {
                                __v['search_people_mobile'].style.display = "block";

                                const state = __g('chatApp_tab_two_people_tab_mobile');
                                state.displaySearchResultTab = true;
                                __u('chatApp_tab_two_people_tab_mobile' , {type:'a' , value:state})
    
                                const state2 = __g('chat_main_tab_2_nav_mobile');
                                state2.display = false;
                                __u('chat_main_tab_2_nav_mobile' , {type:'a' , value:state2});
    
                                const state3 = __g('search_display_result_people');
                                state3.children = [];
                                __u("search_display_result_people" , {type:'a' , value:state3})
    
                                const response = await newfetch({
                                    method:"POST",
                                    route:"/chatroom/search",
                                    body:{searchParam:__v["search_mobile_people"].value , type:"people"}
                                })

                                __v['search_people_mobile'].style.display = "none";
    
                                // if(response.response.status === 200)
                                // {
                                    const data = JSON.parse(response.jsonResponse.data);
    
                                    const state4 = __g('search_display_result_people');
                                    state4.children = data;
                                    __u("search_display_result_people" , {type:'a' , value:state4});
    
                                // }else{}
                            }
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:'chatApp_tab_two_search_tab_mobile',
            }
        }
    )
}

//search tab for mobile panels


//search Tab Panels
__SYD.search_display_result_group = () =>{
    const check_search_result_tab = __p(['chatApp_tab_two_group_tab_mobile' , 'displaySearchResultTab'],false);

    const renderElem = () =>{
        const getChildren = __p(['search_display_result_group' , 'children'],[]);
        const render = new Array()

        switch(getChildren[0] === null)
        {
            case true:
                render.push(__SYD.notFoundText());
            break;
            default:
                getChildren.forEach((val,i) =>{
                    render.push(
                        __SYD.search_result_component_addUser({
                            compName:"search_display_result_group",
                            accessKey:i
                        })
                    )
                })
        }

        return render;
    }

    return __c(
        "div",
        {
            style:`height:calc(100% - (25px + 100px));width:100%;background:#fff;position:absolute;top:calc(100px + 25px);display:${check_search_result_tab ? "flex" : "none"};row-gap:25px;flex-direction:column;overflow:scroll;padding:8px;padding-top:40px;z-index:500;` + __sC['b_rad_l1']()// + __sC['signUp_model_shadow']()
        },
        [
            __SYD.line_loader("search_group_mobile"),
            ...renderElem(),
            __c(
                "i",
                {
                    style:`position:absolute;top:5px;left:5px;height:20px;width:20px;font-size:20px;color:${SYD_VAR.rose}`,
                    class:"fa-solid fa-circle-xmark"
                },[],{
                    events:{
                        onclick:() =>{
                            const state = __g('chatApp_tab_two_group_tab_mobile');
                            state.displaySearchResultTab = false;
                            __u('chatApp_tab_two_group_tab_mobile' , {type:'a' , value:state});

                            const state2 = __g('chat_main_tab_2_nav_mobile');
                            state2.display = true;
                            __u('chat_main_tab_2_nav_mobile' , {type:'a' , value:state2});

                            const state3 = __g('search_display_result_group');
                            state3.children = [];
                            __u("search_display_result_group" , {type:'a' , value:state3})
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:"search_display_result_group",
                state:{children:[]}
            }
        }
    )
}


__SYD.search_display_result_people = () =>{
    const check_search_result_tab = __p(['chatApp_tab_two_people_tab_mobile' , 'displaySearchResultTab'],false);

    const renderElem = () =>{
        const getChildren = __p(['search_display_result_people' , 'children'],[]);
        const render = new Array()

        switch(getChildren[0] === null)
        {
            case true:
                render.push(__SYD.notFoundText());
            break;
            default:
                getChildren.forEach((val,i) =>{
                    render.push(
                        __SYD.search_result_component_addUser({
                            compName:"search_display_result_people",
                            accessKey:i
                        })
                    )
                })
        }

        return render;
    }

    return __c(
        "div",
        {
            style:`height:calc(100% - (25px + 100px));width:100%;background:#fff;position:absolute;top:calc(100px + 25px);display:${check_search_result_tab ? "flex" : "none"};row-gap:25px;flex-direction:column;overflow:scroll;padding:8px;padding-top:40px;z-index:500;` + __sC['b_rad_l1']()// + __sC['signUp_model_shadow']()
        },
        [
            __SYD.line_loader("search_people_mobile"),
            ...renderElem(),
            __c(
                "i",
                {
                    style:`position:absolute;top:5px;left:5px;height:20px;width:20px;font-size:20px;color:${SYD_VAR.rose}`,
                    class:"fa-solid fa-circle-xmark"
                },[],{
                    events:{
                        onclick:() =>{
                            const state = __g('chatApp_tab_two_people_tab_mobile');
                            state.displaySearchResultTab = false;
                            __u('chatApp_tab_two_people_tab_mobile' , {type:'a' , value:state});

                            const state2 = __g('chat_main_tab_2_nav_mobile');
                            state2.display = true;
                            __u('chat_main_tab_2_nav_mobile' , {type:'a' , value:state2});

                            const state3 = __g('search_display_result_people');
                            state3.children = [];
                            __u("search_display_result_people" , {type:'a' , value:state3})
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:"search_display_result_people",
                state:{children:[]}
            }
        }
    )
}
//search Tab Panels





//MOBILE MENU FOR CONTACT AND GROUP PAGE COMPONENT

__SYD.chat_room_menu_tab_mobile_contact = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['chat_room_menu_tab_mobile_contact' , 'display_menu_tab'] , false);

    const checkmenuState = __p(['chat_main_tab_1' , 'tab1_current'] , "0");
    

    return __c(
        "div",
        {
            style:`display:${!check && check_2 ? 'flex' : 'none'};position:absolute;top:100%;right:0;padding:25px 10px;row-gap:20px;flex-direction:column;background:#fff;z-index:999;width:200px;outline:none;` + __sC['signUp_model_shadow']() + __sC['b_rad_l1'](),
            tabindex:"1",
            class:'dropDownEntryAnimation'
        },
        [
            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "home"
                ],{events:{onclick:(e) =>{tab1_switch_function("0",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "chats"
                ],{events:{onclick:(e) =>{tab1_switch_function("1",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "notification"
                ],{events:{onclick:(e) =>{tab1_switch_function("2",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "settings"
                ],{events:{onclick:(e) =>{tab1_switch_function("3",e)}}}
            ),
        ],
        {
            createState:{
                stateName:'chat_room_menu_tab_mobile_contact',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('chat_room_menu_tab_mobile_contact');
                    state.display_menu_tab = false;
                    __u('chat_room_menu_tab_mobile_contact' , {type:'a' , value:state});
                }
            }
        }
    )
}

__SYD.chat_room_menu_tab_mobile_group = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['chat_room_menu_tab_mobile_group' , 'display_menu_tab'] , false);

    const checkmenuState = __p(['chat_main_tab_1' , 'tab1_current'] , "0");


    return __c(
        "div",
        {
            style:`display:${!check && check_2 ? 'flex' : 'none'};position:absolute;top:100%;right:0;padding:25px 10px;row-gap:20px;flex-direction:column;background:#fff;z-index:999;width:200px;outline:none;` + __sC['signUp_model_shadow']() + __sC['b_rad_l1'](),
            tabindex:"1",
            class:'dropDownEntryAnimation'
        },
        [
            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "home"
                ],{events:{onclick:(e) =>{tab1_switch_function("0",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "chats"
                ],{events:{onclick:(e) =>{tab1_switch_function("1",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "notification"
                ],{events:{onclick:(e) =>{tab1_switch_function("2",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};` + __sC['b_rad_l2'](),
                    class:"hover_menu_icon"
                },
                [
                    "settings"
                ],{events:{onclick:(e) =>{tab1_switch_function("3",e)}}}
            ),
        ],
        {
            createState:{
                stateName:'chat_room_menu_tab_mobile_group',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('chat_room_menu_tab_mobile_group');
                    state.display_menu_tab = false;
                    __u('chat_room_menu_tab_mobile_group' , {type:'a' , value:state});
                }
            }
        }
    )
}