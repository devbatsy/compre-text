import { __c, __sC, __SYD  , SYD_VAR , __p , __g , __u} from "../../../sydneyDom_v2.js";
import {tab1_switch_function} from "../../routeFiles/routeComponent.js";

__SYD.notifyMainPanel = () =>{
    const check = __p(['chatMainPanel' , 'topLevelDisplay'],"0") === "2"

    return __c(
        "div",
        {
            style:`display:${check ? 'flex' : 'none'};column-gap:17.5px;height:100%;width:100%;padding:0px;padding-top:unset;padding-bottom:unset;color:${SYD_VAR.plum};position:relative;background:#fff;padding:20px;row-gap:20px;flex-direction:column;` + __sC['b_rad_l1']() + __sC['signUp_model_shadow']()
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

                    __SYD.display_mobile_menu_icon("notify_main_menuDisplay"),

                    __SYD.notify_main_menuDisplay()
                ]
            ),

            __c(
                'span',
                {
                    style:`padding:8px;font-size:16px;font-weight:500;color:${SYD_VAR.gold};text-transform:uppercase;`
                },
                [
                    'notification'
                ]
            ),
        ]
    )
}


__SYD.notify_main_menuDisplay = () =>{
    const check = __p(['chatMainPanel' , 'displayTab1'] , true);

    const check_2 = __p(['notify_main_menuDisplay' , 'display_menu_tab'] , false);
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
                stateName:'notify_main_menuDisplay',
                state:{display_menu_tab:false}
            },
            events:{
                onblur: e =>{
                    const state = __g('notify_main_menuDisplay');
                    state.display_menu_tab = false;
                    __u('notify_main_menuDisplay' , {type:'a' , value:state});
                }
            }
        }
    )
}