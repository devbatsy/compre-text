import { __c , __p, __sC, __sS, __SYD, __v, SYD_VAR} from "../../sydneyDom_v2.js";

import {verifyEmailInput, verifyInputParameters , verifyNameInput, verifyPasswordInput} from "../routeFiles/globFuncLib.js"

__sS([
    {
        nameTag:"signUpMain",
        style:{
            height:'95%',
            width:'90%',
            maxHeight:'500px',
            maxWidth:"1000px",
            position:'absolute',
            top:'50%',
            left:'50%',
            transform:'translate(-50% , -50%)',
            display:'flex',
            justifyContent:'center',
            alignItems:'center',
            background:'#2D1A30'
        }
    },
    {
        nameTag:'signUpMain_sideDesign',
        style:{
            height:'100%'
        }
    }
])

__SYD.signUpMain = () =>{
    return __c(
        'div',
        {
            style:__sC['signUpMain']() + __sC['b_rad_l']() + __sC['signUp_model_shadow']() + `${__p(['signUpMain' , 'size_query'] , false) ? 'height:100%;width:100%;max-height:unset;max-width:unset;border-radius:unset;flex-direction:column;' : ''}`
        },
        [
            !__p(['signUpMain' , 'size_query'] , false) ? __SYD.signUpMain_left_design() : __c('div' , {style:`height:100px;width:100%;background:${SYD_VAR.plum};`}),
            __SYD.signUpMain_right_main_design()
        ],
        {
            createState:{
                stateName:"signUpMain",
                state:{size_query:false}
            },
            mediaQuery:{
                query:[{size:'<800' , prop:{size_query:true}}],
                defState:{size_query:false}
            }
        }
    )
}





__SYD.signUpMain_right_main_design = () =>{
    return __c(
        'div',
        {
            style:__sC['signUpMain_sideDesign']() + __sC['signUp_model_shadow']() + `position:relative;border:4px solid ${SYD_VAR.plum};background:${SYD_VAR.sand};width:100%;border-radius:40px;transform:translateX(5px);height:104%;padding:15px;padding-top:50px;padding-left:50px;display:flex;flex-direction:column;row-gap:20px;align-items:center;justify-content:flex-start;overflow-y:scroll;` + `${__p(['signUpMain' , 'size_query'] , false) ? `width:100%;border-bottom-left-radius:unset;border-bottom-right-radius:unset;transform:unset;padding:20px;padding-top:50px;height:100%;border:unset;border-top:4px solid ${SYD_VAR.signUp_submit_btn_color};` : ''}`,

            id:'signUpMain_right_main_design'
        },
        [
            __SYD.max_3({text:'create account' , width:'100%'}),
            __SYD.google_signup_tab_main(),
            __c('p' , {style:'font-size:20px;font-weight:300;'},['- OR -']),
            __SYD.signUpForm(),
            __c(
                'div',
                {
                    id:'google_translate_element',
                    style:'position:absolute;top:50px;right:15px;'
                },
                [
                    
                ]
            ),
            __c('div',{style:'font-size:12px;position:absolute;top:50px;right:15px;color:red'},['connecting google translate'],{type:'translate_int_text'})
        ]
    )
}

__SYD.google_signup_tab_main = () =>{
    return __c(
        'div',
        {
            style:`padding:7px;border:1px solid ${SYD_VAR.plum};`
        },
        [
            __SYD.google_signup_tab_main_el()
        ]
    )
}


__SYD.google_signup_tab_main_el = () =>{
    return __c(
        'div',
        {
            style:"height:fit-content;padding:2px;display:flex;column-gap:10px;justify-content:center;font-size:13px;align-items:center"
        },
        [
            __c('span',{style:'min-height:25px;min-width:25px;background-image:url("../assets/googleIcon.png")'},[],{genericStyle:['bg_cover']}),
            'sign up with Google'
        ]
    )
}

__SYD.signUpForm = () =>{
    return __c(
        'form',
        {
            style:'display:flex;row-gap:20px;flex-direction:column;padding-top:5px;width:100%',
            method:"POST",
            action:"/chatroom"
        },
        [
            __c(
                "div",
                {
                    style:'width:100%;display:flex;flex-direction:column;row-gap:20px;'
                },
                [
                    __c(
                        'div',
                        {
                            style:'position:relative',
                            // class:'nameError'
                        },
                        [
                            __c(
                                'input',
                                {
                                    style:__sC['signUp_model_design_input'](),
                                    placeholder:"User Name",
                                    name:"username",
                                    type:"text"
                                },[],{
                                    type:'nameInput',
                                    events:{
                                        oninput: e =>{
                                            verifyNameInput(e.target.value)
                                        }
                                    }
                                }
                            )      
                        ]
                    ),
        
                    __c(
                        'div',
                        {
                            style:'position:relative',
                            // class:'emailError'
                        },
                        [
                            __c(
                                'input',
                                {
                                    style:__sC['signUp_model_design_input'](),
                                    placeholder:"Email Address",
                                    name:"email",
                                    type:"email"
                                },[],{
                                    type:'emailInput',
                                    events:{
                                        oninput: e =>{
                                            verifyEmailInput(e.target.value)
                                        }
                                    }
                                }
                            )      
                        ]
                    ),
        
                    __c(
                        'div',
                        {
                            style:'position:relative',
                            // class:'passwordError'
                        },
                        [
                            __c(
                                'input',
                                {
                                    style:__sC['signUp_model_design_input'](),
                                    placeholder:"Password",
                                    name:"password",
                                    type:"password"
                                },[],{
                                    type:'passwordInput',
                                    events:{
                                        oninput: e =>{
                                            verifyPasswordInput(e.target.value)
                                        }
                                    }
                                }
                            ),
                            __c('i',{style:'height:20px;width:20px;font-size:20px;text-align:center;position:absolute;top:50%;transform:translateY(-50%);right:10px;cursor:pointer;color:grey;' , class:'fa-solid fa-eye'},[],{
                                events:{
                                    onclick: e =>{
                                        const cont_input = e.target.parentElement.querySelector('input');
        
                                        const attr = cont_input.getAttribute('type');
        
                                        const btn_attr = e.target.getAttribute('class');
        
                                        e.target.setAttribute('class' , btn_attr === 'fa-solid fa-eye' ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye')
        
                                        cont_input.setAttribute('type' , attr === 'password' ? 'text' : 'password')
                                    }
                                }
                            })    
                        ]
                    ),

                    __c(
                        "input",
                        {
                            name:'language_preference',
                            id:"language_preference",
                            style:"display:none",
                            value:"en"
                        },["en"],{type:'language_preference'}
                    )
                ]
            ),

            __SYD.form_registration_button(),

            __c(
                'p',
                {
                    style:'font-size:14px;'
                },
                [
                    'Already have an account? ',
                    __c('a' , {href:''} , ['Log In'])
                ]
            )
        ],
        {
            type:"form"
        }
    )
}


__SYD.form_registration_button = () =>{
    return __c(
        'div',
        {
            style:`margin-top:20px;padding:12px 20px;text-transform:capitalize;background:${SYD_VAR.plum};font-size:14px;font-weight:700;border-radius:5px;color:${SYD_VAR.sand};border:unset;cursor:pointer;display:flex;justify-content:center;width:100%;align-self:center;`,
            // type:'submit',
        },
        [
            'Create Account'
        ],
        {
            events:{
                onclick:async(e) =>{

                    async function sendAuthRequest()
                    {
                        const header = new Headers();
                        header.append("Content-Type", "application/json")

                        const request = new Request("/signup/user/auth" , {
                            method:'post',
                            body:JSON.stringify({email:__v['emailInput'].value}),
                            headers:header
                        })

                        const response = await fetch(request);

                        const jsonResponse = await response.json()
                        
                        switch(response.status === 200)
                        {
                            case true:
                                const form = __v['form'];

                                form.submit();
                            break;
                            default:
                                alert("Email already in use!")
                        }
                    }

                    if(verifyInputParameters())
                    {
                        sendAuthRequest()
                    }
                }
            }
        }
    )
}