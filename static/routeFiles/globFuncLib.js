import {__v , __p , __u , __g} from "../../sydneyDom_v2.js";

export const verifyInputParameters = () =>
{
    let verification = new Array();

    switch(true)
    {
        case __v['nameInput'] !== undefined:{
            verification.push(verifyNameInput(__v['nameInput'].value))
        };
    }

    switch(true)
    {
        case __v['emailInput'] !== undefined:{
            verification.push(verifyEmailInput(__v['emailInput'].value))
        };
    }

    switch(true)
    {
        case __v['passwordInput'] !== undefined:{
            verification.push(verifyPasswordInput(__v['passwordInput'].value));
        };
    }

    return verification.every(val =>{return val === true})
}

export function verifyNameInput(input)
{
    let verified = input.length > 5;

    if(!verified)
    {
        __v['nameInput'].parentElement.setAttribute("class" , "nameError")
    }else{
        __v['nameInput'].parentElement.setAttribute("class" , "")
    }

    return verified;
}


export function verifyEmailInput(input)
{
    let verified = new Array();

    verified.push(/@/.test(input))
    verified.push(/\.\w{1,}/.test(input))
    verified.push(!/\s/.test(input));

    if(!verified.every(val =>{return val === true}))
    {
        __v['emailInput'].parentElement.setAttribute("class" , "emailError")
    }else{
        __v['emailInput'].parentElement.setAttribute("class" , "")
    }

    return verified.every(val =>{return val === true});
}

export function verifyPasswordInput(input)
{
    let verified = new Array();

    verified.push(/\w{1,}/.test(input));
    verified.push(/\d{1,}/.test(input));
    verified.push(!/\s/.test(input));
    verified.push(input.length > 6);
    
    if(!verified.every(val =>{return val === true}))
    {
        __v['passwordInput'].parentElement.setAttribute("class" , "passwordError")
    }else{
        __v['passwordInput'].parentElement.setAttribute("class" , "")
    }

    return verified.every(val =>{return val === true})
}




//fetch request functions

export const newfetch = async ({
method = "get",
route = '/',
body = {}
} = {}) =>{
    const header = new Headers();
    header.append("Content-Type", "application/json")

    const request = new Request(route , {
        method:method,
        body:JSON.stringify(body),
        headers:header
    });

    const response = await fetch(request);

    const jsonResponse = await response.json();

    return {
        response:response,
        jsonResponse:jsonResponse
    }
}

export const copyToClipboard = (text , responseText) =>{
    try{
        navigator.clipboard.writeText(text);
        alert(responseText)
    }catch(err)
    {
        alert("Error occured while copying text")
    }
    
}


export const getClientName_pubID = () =>
{
    const accessName = __p(['chat_main_tab3_chat_screen' , 'chat_screen_mode'],"");
    let profileName = "";
    let userPubId = "";
    let roomId = ""
    if(accessName.length > 0)
    {
        const object = __p(['chatMainPanel' , accessName  === 'group' ? "contactGroupArray" : 'contactChatArray'] , [])[__p(['chat_main_tab3_chat_screen','currentChatIndex'],0)]
        if(object !== undefined)
        {
            profileName = object.friendName
            userPubId = object.friendPubID;
            roomId = object.pubID;
        }
        
    }    //chat_main_tab3_chat_screen

    return {profileName:profileName , userPubId:userPubId , accessName:accessName , roomID:roomId}
}

export const getText_main_screen = (i) =>{
    const accessName = __p(['chatMainPanel' , 'chat_screen_mode'],"") === "group" ? "contactGroupArray" : "contactChatArray";

    const currentIndex = __p(['chat_main_tab3_chat_screen' , 'currentChatIndex'],0);

    const contactChats = __p(['chatMainPanel' , accessName],[])[currentIndex].chats[i];

    return {
        text : contactChats.textContent,
        time:contactChats.timeSent.dateString,
        read:contactChats.read
    }
}


export const disable_search_tab_add_contact = () =>{
    if(__p(['chatMainPanel' , 'queryType_desktop_tab'],false))
    {
        const state = __g('chat_main_tab_2');
        state.display_search_tab = false;
        __u("chat_main_tab_2" , {type:"a" , value:state})

        const state2 = __g('search_display_result');
        state2.children = [];
        __u("search_display_result" , {type:'a' , value:state2})
    }else{
        const state = __g('chatApp_tab_two_group_tab_mobile');
        state.displaySearchResultTab = false;
        __u('chatApp_tab_two_group_tab_mobile' , {type:'a' , value:state});

        const state2 = __g('chat_main_tab_2_nav_mobile');
        state2.display = true;
        __u('chat_main_tab_2_nav_mobile' , {type:'a' , value:state2});

        const state3 = __g('search_display_result_group');
        state3.children = [];
        __u("search_display_result_group" , {type:'a' , value:state3})

        const state4 = __g('chatApp_tab_two_people_tab_mobile');
        state4.displaySearchResultTab = false;
        __u('chatApp_tab_two_people_tab_mobile' , {type:'a' , value:state4});

        const state5 = __g('search_display_result_people');
        state5.children = [];
        __u("search_display_result_people" , {type:'a' , value:state5})
    }
}