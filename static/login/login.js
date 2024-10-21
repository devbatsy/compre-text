import { __c, __m, __sC, __sS, __SYD } from '../../sydneyDom_v2.js'

import "./login_component.js"
import "../routeFiles/routeComponent.js"
import "./loginLeftTabComp.js"

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.signUpMain()
        ]
    )
}


__m(__SYD.container())