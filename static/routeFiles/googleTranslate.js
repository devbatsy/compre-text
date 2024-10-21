import { __c, __m, __sC, __SYD , __v , __g , __u , manage_mediaQuery} from "../../sydneyDom_v2.js"
import { end_loader, loader_text } from "../loader/loader-c.js"

import {initUser} from "./__init.js"

document.addEventListener('DOMContentLoaded' , e =>{
    loader_text({text:"setting up google web translate ..."})
    googleTranslateElementInit = () => {
            new google.translate.TranslateElement(
                {pageLanguage: 'en'},
                'google_translate_element'
            );
        }
    manage_mediaQuery(window.innerWidth);
    
    const translateElement = document.getElementById('google_translate_element');
    
    let i = 0;

        let interval = setInterval(() => {
        let selectMainEl = translateElement.getElementsByTagName('select');

        googleTranslateElementInit();

        i++;

        if(i > 10)
        {
            __v['translate_int_text'].innerHTML = 'connection failed , reloading...';

            loader_text({text:"Google translate failed , reloading ..."})

            clearInterval(interval);
            location.reload()
        }

        // document.querySelector('.skiptranslate').style.display = 'none';


        if(selectMainEl[0])
        {
            loader_text({text:"connected Google translate ..."})
            __v['translate_int_text'].style.display = 'none'

            document.body.style.top = '0px'

            clearInterval(interval);
            selectMainEl = selectMainEl[0];

            
            const selectParentChildren = selectMainEl.parentElement.parentElement;

            for(let i = 0; i < 2; i++)
            {
                selectParentChildren.removeChild(selectParentChildren.childNodes[selectParentChildren.childNodes.length-1])
            }

            selectMainEl.addEventListener('change' , e =>{
                loader_text({text:`finished setting page language to ${e.target.value} ...`})
                //set language preference
                switch(true)
                {
                    case __v['language_preference'] !== undefined:
                        __v['language_preference'].value = e.target.value;

                }
                //set language preference
                
                let intCh_2 = setInterval(() => {
                    console.log(getComputedStyle(document.querySelector('.skiptranslate')).display)
                    if(getComputedStyle(document.querySelector('.skiptranslate')).display === "none")
                    {
                        console.log("ended loop and removed google custom style");
                        end_loader();
                        clearInterval(intCh_2)
                    }else{
                        document.querySelector('.skiptranslate').style.display = 'none';

                        document.querySelectorAll("svg")[4].parentElement.style.display = "none"

                        document.body.style.top = '0';
                    }
                }, 500);
            })

            // Array.from(selectMainEl.children).forEach(child =>{
            //     child.addEventListener("change" , e =>{
            //         console.log(e.target.value)
            //     })
            // })

            try{
                if(clientPubID) {
                    initUser();
                    // end_loader()
                }
            }
            catch(err)
            {
                console.log(err.message);

                end_loader();

                let interval_two = setTimeout(() =>{
                    const elementNode = Array.from(selectMainEl.children);
    
                    for(let i = 0; i < elementNode.length; i++)
                    {
                        if(elementNode[i].value.toLowerCase() === 'en'.toLowerCase())
                        {
                            elementNode[i].setAttribute('selected' , '');
                            selectMainEl.value = elementNode[i].value;
                            
                            const newEvent = new Event("change" , {
                                bubbles:true,
                                cancelable:true
                            })
    
                            selectMainEl.dispatchEvent(newEvent);

                            loader_text({text:`initialising page language to ${elementNode[i].value.toLowerCase()} ...`})
                            break;
                        }
                    }
                },2000)
            }
            
        }

        console.log('retrying translate ...')
    }, 1000);

})
// window.onload = e =>
