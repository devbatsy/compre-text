import { __c, __sC, __sS, __SYD, SYD_VAR } from "../../sydneyDom_v2.js";

__sS([
    {
        nameTag:"l_loader",
        style:{
            position:"absolute",
            top:"3px",
            left:"0",
            height:"6px",
            width:"100%",
            // display:"flex",
            // alignItems:"center"
        }
    }
])

__SYD.line_loader = (type = "") =>{
    return __c(
        "div",
        {
            style:__sC["l_loader"]()
        },
        [
            __c(
                "div",
                {
                    style:`height:50%;width:30%;background:${SYD_VAR.rose};position:absolute;top:50%;transform:translateY(-50%);left:0;border-radius:5px;`,
                    class:"line_loader_child"
                }
            )
        ],
        {
            type:type
        }
    )
}