import { __c, __sC, __SYD  , SYD_VAR , __p , __g , __u, __v} from "../../../sydneyDom_v2.js";
import {tab1_switch_function} from "../../routeFiles/routeComponent.js";

__SYD.settingMainPanel = () =>{
    const check = __p(['chatMainPanel' , 'topLevelDisplay'],"0") === "3"

    return __c(
        "div",
        {
            style:`display:${check ? 'flex' : 'none'};column-gap:17.5px;height:100%;width:100%;padding:0px;padding-top:unset;padding-bottom:unset;color:${SYD_VAR.plum};position:relative;background:#fff;padding:20px;row-gap:20px;flex-direction:column;user-select:none;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
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

                    __SYD.display_mobile_menu_icon("setting_main_menuDisplay"),

                    __SYD.setting_main_menuDisplay()
                ]
            ),

            __c(
                'span',
                {
                    style:`padding:8px;font-size:16px;font-weight:500;color:${SYD_VAR.gold};text-transform:uppercase;`
                },
                [
                    'settings'
                ]
            ),

            __SYD.setting_display()
        ],
        {
            createState:{
                stateName:"settingMainPanel",
                state:{i:16}
            }
        }
    )
}


__SYD.setting_main_menuDisplay = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['setting_main_menuDisplay' , 'display_menu_tab'] , false);
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
                stateName:'setting_main_menuDisplay',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('setting_main_menuDisplay');
                    state.display_menu_tab = false;
                    __u('setting_main_menuDisplay' , {type:'a' , value:state});
                }
            }
        }
    )
}


__SYD.setting_display = () =>{
    return __c(
        "div",
        {
            style:`height:100%;width:100%;margin-top:15px;background:${SYD_VAR.sand};display:flex;flex-direction:column;row-gap:30px;padding:15px 10px;` + __sC['b_rad_l1']()
        },
        [
            __SYD.setLanguagePref(),
            __SYD.edit_font_size(),
            __SYD.enable_fullscreen_setting_btn(),
            __SYD.delete_account(),
        ]
    )
}

__SYD.setLanguagePref = () =>{
    return __c(
        "div",
        {
            style:"display:flex;column-gap:15px;align-items:center;text-transform:capitalize"
        },
        [
            __c(
                "i",
                {
                    style:`color:${SYD_VAR.plum};font-size:20px;` + __sC['icon_style_20'](),
                    class:"fa-solid fa-language"
                }
            ),
            __c(
                "div",
                {
                    style:'display:flex;column-gap:20px;align-items:center;text-transform:capitalize;flex-wrap:no-wrap;'
                },
                [
                    __SYD.norm_2_text_component({value:"App language" , style:`color:${SYD_VAR.plum};font-weight:500;`}),// " "
                    __SYD.googleTranslatePort()
                ]
            )
            
        ]
    )
}



__SYD.delete_account = () =>{
    return __c(
        "div",
        {
            style:`margin-top:20px;background:${'#d7276a'};padding:15px;width:fit-content;cursor:pointer;` + __sC['b_rad_18'](),
            class:"click"
        },
        [
            __SYD.norm_text_component({value:'Delete Account' , style:'font-weight:900;'})
        ]
    )
}



__SYD.edit_font_size = () =>{
    return __c(
        "div",
        {
            style:"display:flex;column-gap:15px;align-items:center;text-transform:capitalize"
        },
        [
            __c(
                "i",
                {
                    style:`color:${SYD_VAR.plum};font-size:20px;` + __sC['icon_style_20'](),
                    class:"fa-solid fa-text-width"
                }
            ),
            __c(
                "div",
                {
                    style:'display:flex;column-gap:20px;align-items:center;text-transform:capitalize;flex-wrap:no-wrap;'
                },
                [
                    __SYD.norm_2_text_component({value:"font size" , style:`color:${SYD_VAR.plum};font-weight:500;`}),// " "
                    __SYD.font_size_edit()
                ]
            )
            
        ]
    )
}

__SYD.font_size_edit = () =>{
    const check = __p(['font_size_edit' , 'current'],"1")
    return __c(
        "div",
        {
            style:`height:3px;width:100px;background:${'rgb(45, 26, 48)'};position:relative;`
        },
        [
            __c(
                "div",
                {
                    style:`height:12px;width:12px;min-height:12px;min-width:12px;border-radius:50%;background:${SYD_VAR.rose};position:absolute;top:50%;transform:translateY(-50%) translateX(-50%);border:${check === '0' ? `2px solid ${SYD_VAR.plum}` : 'transparent'}`,
                    class:"click"
                },[],{events:{
                    onclick:() =>{
                        const state = __g('font_size_edit');
                        state.current = "0";
                        __u('font_size_edit' , {type:'a' , value:state});

                        recallApp(["14px","12px","10px"])
                    }
                }}
            ),

            __c(
                "div",
                {
                    style:`height:16px;width:16px;min-height:16px;min-width:16px;border-radius:50%;background:${SYD_VAR.rose};position:absolute;top:50%;left:50%;transform:translateY(-50%) translateX(-50%);border:${check === '1' ? `2px solid ${SYD_VAR.plum}` : 'transparent'}`,
                    class:"click"
                },[],{events:{
                    onclick:() =>{
                        const state = __g('font_size_edit');
                        state.current = "1";
                        __u('font_size_edit' , {type:'a' , value:state});

                        recallApp(["16px","14px","12px"])
                    }
                }}
            ),

            __c(
                "div",
                {
                    style:`height:20px;width:20px;min-height:20px;min-width:20px;border-radius:50%;background:${SYD_VAR.rose};position:absolute;top:50%;left:100%;transform:translateY(-50%) translateX(-50%);border:${check === '2' ? `2px solid ${SYD_VAR.plum}` : 'transparent'}`,
                    class:"click"
                },[],{events:{
                    onclick:() =>{
                        const state = __g('font_size_edit');
                        state.current = "2";
                        __u('font_size_edit' , {type:'a' , value:state});

                        recallApp(["18px","16px","14px"])
                    }
                }}
            )
        ],
        {
            createState:{
                stateName:'font_size_edit',
                state:{
                    current:"1"
                }
            }
        }
    )
}



__SYD.enable_fullscreen_setting_btn = () =>{
    return __c(
        "div",
        {
            style:"display:flex;column-gap:15px;align-items:center;text-transform:capitalize"
        },
        [
            __c(
                "i",
                {
                    style:`color:${SYD_VAR.plum};font-size:20px;` + __sC['icon_style_20'](),
                    class:"fa-solid fa-maximize"
                }
            ),
            __c(
                "div",
                {
                    style:'display:flex;column-gap:20px;align-items:center;text-transform:capitalize;flex-wrap:no-wrap;'
                },
                [
                    __SYD.norm_2_text_component({value:"Enable fullscreen " , style:`color:${SYD_VAR.plum};font-weight:500;`}),// " "

                    __c(
                        "div",
                        {
                            style:`position:relative;height:30px;width:50px;border:3px solid ${SYD_VAR.plum};background:${SYD_VAR.plum};border-radius:15px;overflow:hidden;`,
                            class:'click'
                        },
                        [
                            __c(
                                'div',
                                {
                                    style:`position:absolute;top:50%;left:2px;transform:translateY(-50%);height:22px;width:22px;border-radius:50%;background:${SYD_VAR.plum_light};transition:all linear .3s;`,
                                },[],{type:'fullSc_bulb'}
                            )
                        ]
                    )
                ],
                {
                    events:{
                        onclick:() =>{
                            toggleFullScreen()
                        }
                    }
                }
            )
            
        ]
    )
}




function recallApp(arr)
{
    document.querySelectorAll('.edit1').forEach(val =>{
        val.style.fontSize = arr[0]
    })

    document.querySelectorAll('.edit2').forEach(val =>{
        val.style.fontSize = arr[1]
    })

    document.querySelectorAll('.edit3').forEach(val =>{
        val.style.fontSize = arr[2]
    })
}

function toggleFullScreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();

      __v['fullSc_bulb'].style.right = '2px';
      __v['fullSc_bulb'].style.left = 'unset';

      document.body.style.overflow = "hidden";
    } else if (document.exitFullscreen) {
      document.exitFullscreen();

      __v['fullSc_bulb'].style.left = '2px'
      __v['fullSc_bulb'].style.right = 'unset'

      document.body.style.overflow = "visible";
    }
  }

//<i class="fa-solid fa-text-width"></i>