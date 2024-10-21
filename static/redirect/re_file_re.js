import { __c, __m, __sC, __SYD, SYD_VAR } from "../../sydneyDom_v2.js"
import "../routeFiles/routeComponent.js"
import {newfetch} from "../routeFiles/globFuncLib.js"


__SYD.container = () =>{
    return __c(
        "div",
        {
            style:__sC['container']() + "display:flex;column-gap:50px;padding:50px 30px;font-size:14px;flex-direction:column;row-gap:30px;align-items:center;"
        },
        [
            __c(
                "div",
                {
                    style:`color:${SYD_VAR.plum};font-weight:400;text-transform:capitalize;transform:translateY(-50%);height:fit-content;`
                },
                [
                    `${message}`
                ]
            ),
            __c(
                "form",
                {
                    style:"display:flex;flex-direction:column",
                    method:"post",
                    action:"/chatroom"
                },
                [
                    __c("input" , {style:"display:none" , name:"pubID" , id:"pubID" , type:"text" , value:pubID}),

                    __c(
                        "button",
                        {
                            style:`padding:15px 20px;background:linear-gradient(to bottom, ${SYD_VAR.plum_light}, ${SYD_VAR.plum} 130%);border-radius:15px;color:${SYD_VAR.sand};font-weight:600;font-size:16px;max-height:fit-content;transform:translateY(-50%);max-width:500px;border:unset;outline:unset;`,
                            class:"click"
                        },
                        [
                            "proceed to chatroom"
                        ]
                    )
                ]
            ),
        ]
    )
}

__m(__SYD.container())