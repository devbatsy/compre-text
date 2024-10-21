import { __c, __SYD , SYD_VAR , __sC, __p, __g, __u} from "../../../sydneyDom_v2.js";

__SYD.chat_main_tab_2_nav_mobile = () =>{
    const tab_check = __p(['chat_main_tab_2_nav_mobile' , 'currentNavMode'] , "0")
    const mainCheck = __p(['chatMainPanel' , 'queryType_desktop_tab'],false)
    const mainCheck2 = __p(['chatMainPanel' , 'displayTab3_text_display_area'],false);
    const toggle = __p(['chat_main_tab_2_nav_mobile' , 'display'],true);
    
    return __c(
        "div",
        {
            style:`height:fit-content;width:fit-content;background:${SYD_VAR.sand};position:absolute;bottom:10px;left:50%;transform:translateX(-50%);padding:5px 15px;display:${!mainCheck && !mainCheck2 && toggle ? 'flex' : 'none'};column-gap:40px;align-items:center;` + __sC['b_rad_18']() + __sC['signUp_model_shadow']()
        },
        [
            __c(
                'div',
                {
                    style:'padding:8px 0;display:flex;justify-content:center;width:100%;cursor:pointer;flex-direction:column;row-gap:8px;align-items:center;font-weight:900;',
                    class:`${tab_check === '0' ? 'selected_icon' : 'not_selected_icon'}`
                },
                [
                    __c(
                        'i',
                        {
                            style:`color:${SYD_VAR.plum_light};font-size:20px;` + __sC['icon_style_20'](),
                            class:`fa-solid fa-user`
                        }
                    ),      
                    "Chats"
                ],
                {
                    events:{
                        onclick:() =>{
                            nav_tab_switch_function('0')
                        }
                    }
                }
            ),

            __c(
                'div',
                {
                    style:'padding:8px 0;display:flex;justify-content:center;align-items:center;width:100%;cursor:pointer;flex-direction:column;row-gap:8px;font-weight:900;',
                    class:`${tab_check === '1' ? 'selected_icon' : 'not_selected_icon'}`
                },
                [
                    __c(
                        'i',
                        {
                            style:`color:${SYD_VAR.plum_light};font-size:20px;` + __sC['icon_style_20'](),
                            class:`fa-solid fa-people-group`
                        }
                    ),   
                    "Group"   
                ],
                {
                    events:{
                        onclick:() =>{
                            nav_tab_switch_function('1')
                        }
                    }
                }
            ),
        ],
        {
            createState:{
                stateName:'chat_main_tab_2_nav_mobile',
                state:{
                    currentNavMode:"0",
                    display:true
                }
            }
        }
    )
}

function nav_tab_switch_function(val)
{

    const state = __g('chat_main_tab_2_nav_mobile');
    state.currentNavMode = val;
    __u('chat_main_tab_2_nav_mobile' , {type:'a' , value:state});

    const state2 = __g('chat_main_tab_2_mobile');
    state2.currentDisplay = val;
    __u('chat_main_tab_2_mobile' , {type:'a' , value:state2});


}