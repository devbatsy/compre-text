import { __c, __m, __sC, __SYD , __v , __g , __u, SYD_VAR} from "../../sydneyDom_v2.js"
import "../routeFiles/routeComponent.js"
import "./roomComponent.js";
import "./chatPanel/room_comp_tab_one.js";
import "./chatPanel/room_comp_tab_two.js";
import "./chatPanel/room_comp_tab_three.js";
import "./chatPanel/roomComp_chat_mobile_contact_group_tab.js"
import "./chatPanel/roomComp_chat_panel_nav_mobile.js";
import "./chatPanel/room_chat_client_profile_display.js"
import "./homePanel/homeComponent.js"
import "./notificationPanel/notifyComponent.js"
import "./settingsPanel/settingComponent.js"
import "../routeFiles/googleTranslate.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']() + `background-color:${SYD_VAR.sand}`
        },
        [
            // __SYD.googleTranslatePort(), //google web translate api switch
            __SYD.chatMainPanel(),
            __SYD.loader()
        ]
    )
}

__SYD.googleTranslatePort = () =>{
    return  __c(
        'div',
        {
            id:'google_translate_element',
            style:'display:flex;'//position:absolute;top:50px;right:15px;
        },
        [
            __c('div',{style:'font-size:12px;position:fixed;top:10px;right:15px;color:red'},['connecting google translate'],{type:'translate_int_text'}),
        ]
    )
}

__m(__SYD.container())