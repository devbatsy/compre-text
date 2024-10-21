import { __c, __SYD , __sC , SYD_VAR , __p, __g, __u, __v} from "../../../sydneyDom_v2.js";

import {newfetch} from "../../routeFiles/globFuncLib.js"

__SYD.chat_main_tab_2 = () =>{
    const check = __p(['chatMainPanel' , 'queryType_desktop_tab'],false);
    return __c(
        "div",
        {
            style:`height:100%;min-width:250px;width:30%;max-width:300px;display:${check ? 'flex' : 'none'};row-gap:25px;flex-direction:column;position:relative;` + __sC['b_rad_l1']()
        },
        [
            __SYD.chatApp_tab_two_search_tab_desktop(),
            __SYD.chatApp_tab_two_group_tab_desktop(),
            __SYD.chatApp_tab_two_peope_tab_desktop(),
            __SYD.search_display_result()
        ],
        {
            createState:{
                stateName:"chat_main_tab_2",
                state:{
                    display_search_tab:false
                }
            }
        }
    )
}


__SYD.search_display_result = () =>{
    const check = __p(['chat_main_tab_2' , 'display_search_tab'],false);

    const renderElem = () =>{
        const getChildren = __p(['search_display_result' , 'children'],[]);
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
                            compName:"search_display_result",
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
            style:`height:calc(100% - (25px + 50px));width:100%;background:#fff;position:absolute;top:calc(50px + 25px);display:${check ? "flex" : "none"};row-gap:25px;flex-direction:column;overflow:scroll;padding:8px;padding-top:40px;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __SYD.line_loader("search_tabTwo_desktop"),
           ...renderElem(),
            __c(
                "i",
                {
                    style:`position:absolute;top:10px;left:5px;height:20px;width:20px;font-size:20px;color:${SYD_VAR.rose}`,
                    class:"fa-solid fa-circle-xmark"
                },[],{
                    events:{
                        onclick: async (e) =>{
                            const state = __g('chat_main_tab_2');
                            state.display_search_tab = false;
                            __u("chat_main_tab_2" , {type:"a" , value:state})

                            const state2 = __g('search_display_result');
                            state2.children = [];
                            __u("search_display_result" , {type:'a' , value:state2})
                        }
                    }
                }
            )
        ],
        {
            createState:{
                stateName:"search_display_result",
                state:{children:[]}
            }
        }
    )
}


__SYD.chatApp_tab_two_search_tab_desktop = () =>{
    return __c(
        "div",
        {
            style:"min-height:50px;width:100%;background:#fff;display:flex;column-gap:5px;padding:8px 10px;align-items:center;" + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "input",
                {
                    style:"height:100%;width:100%;padding:0 10px;font-size:16px;font-family:jose;",
                    class:'chatApp_tab_two_search_tab_desktop_input',
                    placeholder:'Search Contacts or groups'
                },[],{type:"tab_two_search_input"}
            ),
            __c(
                "i",
                {
                    style:`font-size:20px;color:${SYD_VAR.plum_light_grey};` + __sC['icon_style_20'](),
                    class:"fa-solid fa-magnifying-glass-arrow-right"
                },[],
                {
                    events:{
                        onclick: async (e) =>{
                            if(/\w{1,}/.test(__v["tab_two_search_input"].value))
                            {
                                __v['search_tabTwo_desktop'].style.display = "block"

                                const state = __g('chat_main_tab_2');
                                state.display_search_tab = true;
                                __u("chat_main_tab_2" , {type:"a" , value:state});
    
                                const state2 = __g('search_display_result');
                                state2.children = [];
                                __u("search_display_result" , {type:'a' , value:state2})
    
                                const response = await newfetch({
                                    method:"POST",
                                    route:"/chatroom/search",
                                    body:{searchParam:__v["tab_two_search_input"].value}
                                })

                                __v['search_tabTwo_desktop'].style.display = "none"
    
                                // if(response.response.status === 200)
                                // {
                                    const data = JSON.parse(response.jsonResponse.data);
    
                                    const state3 = __g('search_display_result');
                                    state3.children = data;
                                    __u("search_display_result" , {type:'a' , value:state3})
                                // }
                            }
                        }
                    }
                }
            ),
        ]
    )
}

__SYD.chatApp_tab_two_group_tab_desktop = () =>{
    const check = __p(['chat_main_tab_2' , 'display_search_tab'],false);

    const renderElem = () =>{
        const getChildren = __p(['chatMainPanel' , 'contactGroupArray'],[]);
        const render = new Array()

        switch(getChildren.length === 0)
        {
            case true:
                render.push(__SYD.notFoundText("Search and add groups"));
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
            style:`min-height:200px;width:100%;background:#fff;padding:8px;padding-right:12px;display:${!check ? "flex" : "none"};flex-direction:column;row-gap:10px;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "p",
                {
                    style:`font-size:17px;text-transform:capitalize;font-weight:500;`
                },
                [
                    'groups'
                ]
            ),
            __c(
                "div",
                {
                    style:"height:100%;width:100%;overflow:scroll;display:flex;flex-direction:column;row-gap:inherit;padding-right:3px;",
                    class:'tab_two_desktop_scroll_tab'
                },
                [
                    ...renderElem()
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.chatAppfrontier_group_info(),
                    // __SYD.notFoundText("Search and add groups")

                ]
            )
        ],
        {
            createState:{
                stateName:"chatApp_tab_two_group_tab_desktop",
                state:{children:[]}
            }
        }
    )
}

__SYD.chatApp_tab_two_peope_tab_desktop = () =>{
    const check = __p(['chat_main_tab_2' , 'display_search_tab'],false);

    const renderElem = () =>{
        const getChildren = __p(['chatMainPanel' , 'contactChatArray'],[])
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
            style:`height:100%;width:100%;background:#fff;padding:8px;padding-right:12px;display:${!check ? "flex" : "none"};flex-direction:column;row-gap:10px;overflow:scroll;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "p",
                {
                    style:`font-size:17px;text-transform:capitalize;font-weight:500;`
                },
                [
                    'chat'
                ]
            ),

            __c(
                "div",
                {
                    style:"height:100%;width:100%;overflow:scroll;display:flex;flex-direction:column;row-gap:inherit;padding-right:3px;",
                    class:"tab_two_desktop_scroll_tab"
                },
                [
                    ...renderElem()
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.chatAppfrontier_people_info(),
                    // __SYD.notFoundText("Search and add contacts")
                ]
            )
        ],
        {
            createState:{
                stateName:"chatApp_tab_two_peope_tab_desktop",
                state:{children:[]}
            }
        }
    )
}