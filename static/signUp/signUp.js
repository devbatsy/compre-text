import { __c, __g, __m, __sC, __sS, __SYD, __u, __v } from '../../sydneyDom_v2.js'

import "./signUp_component.js"
import "../routeFiles/routeComponent.js"
import "./signUpLeftTabComp.js"
import "../routeFiles/googleTranslate.js"


// window.onload = e =>{
//     const translateElement = document.getElementById('google_translate_element');
    
//     let i = 0;

//     let interval = setInterval(() => {
//         let selectMainEl = translateElement.getElementsByTagName('select');

//         i++;

//         if(i > 3)
//         {
//             __v['translate_int_text'].innerHTML = 'connection failed , reloading...'
//             location.reload()
//         }

//         // document.querySelector('.skiptranslate').style.display = 'none';


//         if(selectMainEl[0])
//         {
//             __v['translate_int_text'].style.display = 'none'

//             document.body.style.top = '0px'

//             clearInterval(interval);
//             selectMainEl = selectMainEl[0];

            
//             const selectParentChildren = selectMainEl.parentElement.parentElement;

//             for(let i = 0; i < 2; i++)
//             {
//                 selectParentChildren.removeChild(selectParentChildren.childNodes[selectParentChildren.childNodes.length-1])
//             }

//             selectMainEl.addEventListener('change' , e =>{
//                 document.querySelector('.skiptranslate').style.display = 'none';

//                 document.body.style.top = '0'
//             })

//             const reintialiseLang = () =>{
//                 const elementNode = Array.from(selectMainEl.children);

//                 console.log('ran this function')

//                 console.log(elementNode.length)

//                 for(let i = 0; i < elementNode.length; i++)
//                 {
//                     if(elementNode[i].value.toLowerCase() === 'en'.toLowerCase())
//                     {
//                         console.log('came here')
//                         elementNode[i].setAttribute('selected' , '');
//                         selectMainEl.value = elementNode[i].value;
                        
//                         const newEvent = new Event("change" , {
//                             bubbles:true,
//                             cancelable:true
//                         })

//                         selectMainEl.dispatchEvent(newEvent);
//                         break;
//                     }
//                 }
//             }

//             setTimeout(() => {
//                 reintialiseLang()
//             }, 1000);
            

//         }
//     }, 1000);

//     if(window.innerWidth < 800)
//     {
//         const state = __g('signUpMain');
//         state.size_query = true;
//         __u('signUpMain' , {type:'a' , value:state})
//     }

// }

__SYD.container = () =>{
    return __c(
        'div',
        {
            style:__sC['container']()
        },
        [
            __SYD.signUpMain(),
            __SYD.loader()
        ]
    )
}


__m(__SYD.container())