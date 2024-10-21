import { __sC, __sS, __SYD , __c , SYD_VAR, __p} from "../../../sydneyDom_v2.js";


__sS([
    {
        nameTag:'chatMainPanel',
        style:{
            height:'100%',
            width:'100%',
            display:'flex',
            columnGap:'15px',
            padding:'20px 10px'
        }
    }
])

__SYD.chatMainPanel = () =>{
    return __c(
        'div',
        {
            style:__sC['chatMainPanel']() + `${__p(['chatMainPanel' , 'displayTab1'],true) === false ? 'padding:unset' : ''}`
        },
        [
            __SYD.chat_main_tab_1(),
            __SYD.chat_main_tab_2__chat_main_tab_2__parent(),
            __SYD.homeMainPanel(),
            __SYD.notifyMainPanel(),
            __SYD.settingMainPanel(),
        ],
        {
            createState:{
                stateName:'chatMainPanel',
                state:{
                    displayTab3_text_display_area:false,
                    queryType_desktop_tab:false,
                    displayTab1:true,
                    topLevelDisplay:"0",
                    fontSize:['16px' , '14px' , '12px'],
                    contactChatArray:[],
                    contactGroupArray:[],
                    accLocked:false
                }
            },

            mediaQuery:{
                query:[
                    {size:'>1000' , prop:{queryType_desktop_tab:true , displayTab3_text_display_area:true}},
                    {size:'<600' , prop:{displayTab1:false}}
                ],
                defState:{queryType_desktop_tab:false , displayTab3_text_display_area:false , displayTab1:true}
            }
        }
    )
}


__SYD.chat_main_tab_2__chat_main_tab_2__parent = () =>{
    const check = __p(['chatMainPanel' , 'topLevelDisplay'],"0") === "1"
    return __c(
        'div',
        {
            style:`display:${check ? 'flex' : 'none'};column-gap:17.5px;height:100%;width:100%;padding:0px;padding-top:unset;padding-bottom:unset;color:${SYD_VAR.plum};position:relative;`
        },
        [
            __SYD.chat_main_tab_2(),//shown only on desktop mode
            __SYD.chat_main_tab_3(),//shown only on desktop mode
            __SYD.chat_main_tab_2_mobile(),//shown only on mobile mode
            __SYD.chat_main_tab_2_nav_mobile()
        ]
    )
}