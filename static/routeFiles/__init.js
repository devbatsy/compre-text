import { __g, __u } from "../../sydneyDom_v2.js";
import { end_loader, loader_text } from "../loader/loader-c.js";
import {newfetch} from "./globFuncLib.js";



export const initUser = async () =>{
    loader_text({text:`fetching chats  ...`});

    const response = await newfetch({
        method:"POST",
        route:"/init/user_info",
        body:{pubID:clientPubID}
    })

    const userInitData = JSON.parse(response.jsonResponse.data);

    //chat_main_tab_1_min_tab_utils_icons

    setUserLanguage(userInitData.appSetting.language);
    setTimeout(() => {
        setUserLanguage(userInitData.appSetting.language);
    }, 500);

    init_friend_list(userInitData.contacts , userInitData.appSetting.accountActivated);
    init_group_list(userInitData.groups)

    loader_text({text:`finished loading chats  ...`});

    end_loader()
    
}

function setUserLanguage(language)
{
    const translateElement = document.getElementById('google_translate_element');

    let selectMainEl = translateElement.getElementsByTagName('select')[0];

    const elementNode = Array.from(selectMainEl.children);

    for(let i = 0; i < elementNode.length; i++)
    {
        if(elementNode[i].value.toLowerCase() === language.toLowerCase())
        {
            elementNode[i].setAttribute('selected' , '');
            selectMainEl.value = elementNode[i].value;
            
            const newEvent = new Event("change" , {
                bubbles:true,
                cancelable:true
            })

            selectMainEl.dispatchEvent(newEvent);

            loader_text({text:`initialising page language to ${language.toLowerCase()} ...`})
            break;
        }
    }
}

function init_friend_list(contact , appState)
{
    const state = __g("chatMainPanel");
    state.contactChatArray = contact;
    __u('chatMainPanel' , {type:"a" , value:state})

    const state2 = __g("chat_main_tab_1_min_tab_utils_icons");
    state2.accLocked = !appState;
    __u("chat_main_tab_1_min_tab_utils_icons" , {type:"a" , value:state2})

    const state3 = __g("chatMainPanel");
    state3.accLocked = !appState;
    __u('chatMainPanel' , {type:"a" , value:state3})

    //home_account_btn
    const state4 = __g("home_account_btn");
    state4.accLocked = !appState;
    __u('home_account_btn' , {type:"a" , value:state4})
}


function init_group_list(groups)
{
    const state = __g("chatMainPanel");
    state.contactGroupArray = groups;
    __u('chatMainPanel' , {type:"a" , value:state})
}