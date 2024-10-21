import { __c, __p, __SYD , __g , __u, SYD_VAR} from "../../../sydneyDom_v2.js";

import {copyToClipboard , getClientName_pubID} from "../../routeFiles/globFuncLib.js"

__SYD.room_chat_client_profile_display = () =>{
    const check = __p(['room_chat_client_profile_display' , 'slideDisplay'] , false);
    return __c(
        "div",
        {
            style:`outline:none;transform:translateX(${check ? "0%" : "calc(100% + 5px)"});position:fixed;top:0;right:0;height:100%;width:100%;max-width:400px;background:${'#fff'};z-index:300;box-shadow:0 0 3px rgba(0,0,0,.4);padding:35px;`,
            class:"transition_sideProfile",
            tabindex:"2"
        },
        [
            __SYD.exit_room_chat_client_profile_display(),
            __SYD.client_profile_name_about_tab()
        ],
        {
            createState:{
                stateName:"room_chat_client_profile_display",
                state:{
                    slideDisplay:false
                }
            },
            events:{
                onblur: e =>{
                    const state = __g('room_chat_client_profile_display');
                    state.slideDisplay = false;
                    __u('room_chat_client_profile_display' , {type:"a" , value:state})
                }
            }
        }
    )
}


__SYD.exit_room_chat_client_profile_display = () =>{
    return __c(
        "i",
        {
            style:`position:absolute;top:15px;left:15px;height:20px;width:20px;font-size:20px;color:${SYD_VAR.rose}`,
            class:"fa-solid fa-circle-xmark"
        },[],{
            events:{
                onclick: e =>{
                    const state = __g('room_chat_client_profile_display');
                    state.slideDisplay = false;
                    __u('room_chat_client_profile_display' , {type:"a" , value:state})
                }
            }
        }
    )
}


__SYD.client_profile_name_about_tab = () =>{

    return __c(
        "div",
        {
            style:"padding:10px;display:flex;row-gap:10px;flex-direction:column;width:100%;align-items:center;justify-content:center;"
        },
        [
            __c(
                'div',
                {
                    style:`min-height:80px;min-width:80px;max-height:80px;max-width:80px;border-radius:50%;background-color:${SYD_VAR.sand};background-image:url("../assets/testImage.jpg")`
                },[],
                {
                    genericStyle:['bg_cover']
                }
            ),

            __SYD.norm_text_component({value:`${getClientName_pubID().profileName}` , style:`text-transform:capitalize;color:${SYD_VAR.plum_light_grey}`}),

            __c(
                "div",
                {},
                [
                    __SYD.norm_2_text_component({value:`~ ${getClientName_pubID().userPubId.slice(0,12).split("-").join(" ")}` , style:`display:${getClientName_pubID().accessName === 'group' ? 'none' : 'block'};cursor:pointer;color:${SYD_VAR.plum_light_grey};` , class_:"text_hover"}),
                ],
                {
                    events:{
                        onclick:() =>{
                            copyToClipboard(getClientName_pubID().userPubId , "contact PublicID copied")
                        }
                    }
                }
            ),

            __SYD.norm_2_text_component({value:`Group members: ${0}` , style:`display:${getClientName_pubID().accessName === 'group' ? 'block' : 'none'};font-family:monospace;color:${SYD_VAR.plum_light_grey}`}),
        ]
    )
}