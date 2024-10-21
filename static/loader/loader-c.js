import {
    createElement,
    virtualDom,
    mount,
    styleComponent,
    setStyle,
    sydDOM,
    getState,
    preState,
    useState,
    SYD_VAR,
    __c,
    __p,
    __g,
    __u
} from "../../sydneyDom_v2.js"

setStyle([
    {
        nameTag:'loader_style',
        style:{
            height:'100%',
            width:'100%',
            position:'fixed',
            top:'0',
            left:'0',
            zIndex:'1500',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            flexDirection:"column",
            rowGap:"10px"
        }
    }
])

sydDOM.loader = () =>{
    return createElement(
        'div',
        {
            style:styleComponent.loader_style() + `background:${SYD_VAR.sand};display:${ __p(['loader' , 'end'] , false) ? "none" : "flex"};`
        },
        [
            createElement(
                'div',
                {
                    style:`height:50px;width:50px;background:${SYD_VAR.rose};border-radius:50%`,
                    class:'loader chat_app_main_loader'
                },
                [
                    createElement('div',{class:'loader_elem1'}),
                    createElement('div',{class:'loader_elem2'}),
                ]
            ),

            __c(
                "p",
                {
                    style:`font-weight:500;color:${SYD_VAR.plum};font-size:14px;text-transform:capitalize;`
                },
                [
                    __p(['loader' , 'text_content'] , "Loading App ...")
                ]
            )

        ],
        {
            createState:{
                stateName:"loader",
                state:{
                    end:false,
                    text_content:"Loading App ..."
                }
            }
        }
    )
}

export const loader_text = ({text = ""} = {}) =>{
    const state = __g("loader");
    state.text_content = text;
    __u("loader" , {type:"a" , value:state})
}

export const end_loader = () =>{
    let timeout = setTimeout(() => {
        const state = __g("loader");
        state.end = true;
        __u("loader" , {type:"a" , value:state});

        clearTimeout(timeout)
    }, 1000);
    
}