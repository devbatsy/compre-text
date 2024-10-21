import { __c , __p, __sC, __sS, __SYD, SYD_VAR} from "../../sydneyDom_v2.js"


__SYD.signUpMain_left_design = () =>{
    return __c(
        'div',
        {
            style:__sC['signUpMain_sideDesign']() + 'position:relative;min-width:300px;background-image:url("../assets/left_bg_login.jpg")'
        },
        [
            __c(
                'div',
                {
                    style:`position:absolute;top:50px;left:50%;transform:translateX(-50%);color:${SYD_VAR.sand};text-transform:uppercase;font-size:25px;font-weight:700;`
                },
                [
                    'Site title'
                ]
            )
        ],
        {
            genericStyle:['bg_fit']
        }
    )
}