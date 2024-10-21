import { __c, __sC, __SYD  , SYD_VAR , __p , __g , __u, __sS } from "../../../sydneyDom_v2.js";
import { newfetch } from "../../routeFiles/globFuncLib.js";
import {tab1_switch_function} from "../../routeFiles/routeComponent.js";

__sS([
    {
        nameTag:"homeBtn",
        style:{
            height:'100px',
            width:'50%',
            minWidth:"120px",
            maxWidth:"max-content",
            background:'red',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            fontWeight:"500",
            // fontSize:"18px",
            textTransform:"capitalize",
            borderRadius:"25px",
            background:"#FFEED7",
            boxShadow:"1px 1px 0px rgba(0,0,0,.3)",
            padding:"10px",
            columnGap:"10px"
        }
    }
])


__SYD.homeMainPanel = () =>{
    const check = __p(['chatMainPanel' , 'topLevelDisplay'],"0") === "0"

    return __c(
        "div",
        {
            style:`display:${check ? 'flex' : 'none'};height:100%;width:100%;padding:0px;padding-top:unset;padding-bottom:unset;color:${SYD_VAR.plum};position:relative;background:#fff;padding:20px;row-gap:20px;flex-direction:column;overflow:hidden;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                "div",
                {
                    style:`height:fit-content;padding:8px 0;display:flex;flex-direction:row;justify-content:space-between;align-items:center;font-size:17px;text-transform:capitalize;font-weight:500;position:relative;border-bottom:1px solid ${SYD_VAR.plum}`
                },
                [
                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:18px;font-weight:700;color:${SYD_VAR.gold};text-transform:uppercase;`
                        },
                        [
                            'App title'
                        ]
                    ),

                    __SYD.display_mobile_menu_icon("home_main_menuDisplay"),

                    __SYD.home_main_menuDisplay()
                ]
            ),
            __c(
                'span',
                {
                    style:`padding:8px;font-size:16px;font-weight:500;color:${SYD_VAR.gold};text-transform:uppercase;`
                },
                [
                    'home'
                ]
            ),

            __SYD.home_actions(),
            __SYD.home_profile_edit_tab(),
            __SYD.home_activate_acc_edit_tab()
        ],
        {
            createState:{
                stateName:"homeMainPanel",
                state:{
                    currentFloatTab:"null"
                }
            }
        }
    )
}


__SYD.home_main_menuDisplay = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['home_main_menuDisplay' , 'display_menu_tab'] , false);
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
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};`,
                    class:"hover_menu_icon"
                },
                [
                    "home"
                ],{events:{onclick:(e) =>{tab1_switch_function("0",e)}}}
            ),

            __SYD.chat_mobile_btn(),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};`,
                    class:"hover_menu_icon"
                },
                [
                    "notification"
                ],{events:{onclick:(e) =>{tab1_switch_function("2",e)}}}
            ),

            __c(
                'p',
                {
                    style:`font-weight:500;text-transform:capitalize;color:${SYD_VAR.plum_light_grey};`,
                    class:"hover_menu_icon"
                },
                [
                    "settings"
                ],{events:{onclick:(e) =>{tab1_switch_function("3",e)}}}
            ),
        ],
        {
            createState:{
                stateName:'home_main_menuDisplay',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('home_main_menuDisplay');
                    state.display_menu_tab = false;
                    __u('home_main_menuDisplay' , {type:'a' , value:state});
                }
            }
        }
    )
}


__SYD.home_actions = () =>{
    return __c(
        "div",
        {
            style:`padding:10px;width:100%;background:unset;display:flex;column-gap:50px;padding-top:30px;justify-content:flex-start;row-gap:30px;flex-wrap:wrap;`
        },
        [
            __SYD.home_profile_btn(),
            __SYD.home_account_btn(),
            __SYD.home_edit_language_btn()
        ]
    )
}

__SYD.home_profile_btn = () =>{
    return __c(
        "div",
        {
            style:__sC['homeBtn']() + `color:${SYD_VAR.plum_light};`,
            class:"click hoverBtn"
        },
        [
            "profile",
            __c(
                "i",
                {
                    style:`color:${SYD_VAR.plum_light};font-size:20px;` + __sC['icon_style_20'](),
                    class:"fa-solid fa-id-card"
                }
            ),
        ],
        {
            events:{
                onclick: () =>{
                    const state = __g("homeMainPanel");
                    state.currentFloatTab = "profile";
                    __u("homeMainPanel" , {type:"a" , value:state})
                }
            }
        }
    )
}

__SYD.home_account_btn = () =>{
    return __c(
        "div",
        {
            style:__sC['homeBtn']() + `color:${SYD_VAR.plum_light};opacity:${__p(["home_account_btn" , "accLocked"] , true) ? "1" : ".4"};cursor:${__p(["home_account_btn" , "accLocked"] , true) ? "pointer" : "not-allowed"}`,
            class:"click hoverBtn"
        },
        [
            "account",
            __c(
                "i",
                {
                    style:`color:${SYD_VAR.plum_light};font-size:20px;` + __sC['icon_style_20'](),
                    class:"fa-solid fa-file-invoice"
                }
            ),
        ],
        {
            events:{
                onclick: () =>{
                    console.log(__p(["home_account_btn" , "accLocked"]))
                    if(__p(["home_account_btn" , "accLocked"] , true))
                    {
                        const state = __g("homeMainPanel");
                        state.currentFloatTab = "activate";
                        __u("homeMainPanel" , {type:"a" , value:state})
                    }
                    
                }
            },
            createState:{
                stateName:"home_account_btn",
                state:{accLocked:true}
            }
        }
    )
}

__SYD.home_edit_language_btn = () =>{
    return __c(
        "div",
        {
            style:__sC['homeBtn']() + `color:${SYD_VAR.plum_light};`,
            class:"click hoverBtn"
        },
        [
            "language",
            __c(
                "i",
                {
                    style:`color:${SYD_VAR.plum_light};font-size:20px;` + __sC['icon_style_20'](),
                    class:"fa-solid fa-language"
                }
            ),
        ],
        {
            events:{
                onclick: () =>{
                    // const state = __g("homeMainPanel");
                    // state.currentFloatTab = "activate";
                    // __u("homeMainPanel" , {type:"a" , value:state})
                }
            }
        }
    )
}

__SYD.home_profile_edit_tab = () =>{
    const check = __p(['homeMainPanel' , 'currentFloatTab'], "null") === "profile";
    return __c(
        "div",
        {
            style:`height:100%;width:100%;background:rgba(45, 26, 48, 0.7);position:absolute;top:0;left:0;display:${check ? "block" : "none"};`
        },
        [
            __c(
                "div",
                {
                    style:`height:100%;max-height:400px;width:90%;max-width:500px;background:#fff;position:absolute;top:50%;left:50%;transform:translate(-50% , -50%);border-radius:15px;display:flex;flex-direction:column;row-gap:15px;border-top:1px solid lightgrey;border-left:1px solid lightgrey;padding:20px;overflow-y:scroll;` + __sC["signUp_model_shadow"]()
                },
                [
                    __SYD.home_exit_panel_tab(),
                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:16px;font-weight:900;color:${SYD_VAR.plum};text-transform:uppercase;`
                        },
                        [
                            'user profile'
                        ]
                    ),
                ]
            )
        ]
    )
}


__SYD.home_activate_acc_edit_tab = () =>{
    const check = __p(['homeMainPanel' , 'currentFloatTab'], "null") === "activate"

    return __c(
        "div",
        {
            style:`height:100%;width:100%;background:rgba(45, 26, 48, 0.7);position:absolute;top:0;left:0;display:${check ? "block" : "none"};user-select: none;`
        },
        [
            __c(
                "div",
                {
                    style:`height:100%;max-height:400px;width:90%;max-width:500px;background:#fff;position:absolute;top:50%;left:50%;transform:translate(-50% , -50%);border-radius:15px;display:flex;flex-direction:column;row-gap:25px;border-top:1px solid lightgrey;border-left:1px solid lightgrey;padding:20px;overflow-y:scroll;` + __sC["signUp_model_shadow"]()
                },
                [
                    __SYD.home_exit_panel_tab(),
                    __c(
                        'span',
                        {
                            style:`padding:8px;font-size:16px;font-weight:900;color:${SYD_VAR.plum};text-transform:uppercase;`
                        },
                        [
                            'activate account'
                        ]
                    ),
                    __c(
                        "div",
                        {
                            style:"height:100%;width:100%;padding:15px 20px;display:flex;flex-direction:column;row-gap:25px;text-transform:capitalize;font-weight:500;font-size:14px;list-style-type:disc;"
                        },
                        [
                            __c("li" ,{style:""} , ["you will be charged $--- for the activation of your account"]),

                            __c("li" ,{style:""} , ["payment will be made with stripe payment gateway"]),

                            __c("li" ,{style:""} , ["click the activate button to proceed"]),

                            __c(
                                "div",
                                {
                                    style:`padding:15px 20px;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);border-radius:15px;color:${SYD_VAR.sand};font-weight:600;align-self:flex-end;margin-top:30px;font-size:16px;`,
                                    class:"click"
                                },
                                [
                                    "Activate with stripe"
                                ],
                                {
                                    events:{
                                        onclick: async (e) =>{
                                            // e.target.style.pointerEvents = "none";
                                            // e.target.style.opacity = ".4";

                                            console.log("i came here")

                                            const paymentLink = await newfetch({
                                                method:"POST",
                                                route:"chatroom/activate/link",
                                                body:{userPubID:clientPubID}
                                            }) 

                                            console.log(paymentLink.response.status)
                                            if(paymentLink.response.status == 200)
                                            {
                                                location.assign(JSON.parse(paymentLink.jsonResponse.data).msg);
                                            }else{
                                                alert(JSON.parse(paymentLink.jsonResponse.data).msg)
                                            }
                                            
                                        }
                                    }
                                }
                            )
                        ]
                    )
                ]
            )
        ]
    )
}

__SYD.home_exit_panel_tab = () =>{
    return __c(
        "i",
        {
            style:`position:absolute;top:5px;left:5px;height:20px;width:20px;font-size:20px;color:${SYD_VAR.rose}`,
            class:"fa-solid fa-circle-xmark"
        },[],{
            events:{
                onclick: async (e) =>{
                    const state = __g("homeMainPanel");
                    state.currentFloatTab = "null";
                    __u("homeMainPanel" , {type:"a" , value:state})
                }
            }
        }
    )
}