/* Header bottom border when scroll */

let border_blue = document.getElementById('main_header')
let borderPos = border_blue.offsetTop;

window.addEventListener('scroll',()=>{
    if(this.window.scrollY > borderPos){
        border_blue.style.borderBottom='2px solid rgb(0, 219, 248)'
    }else{
        border_blue.style.borderBottom='1px solid rgb(0, 219, 248)'
    }
})


/* Sticky Header enable and disable */

function stickyHandler(){
    let sticky_elem  = document.getElementById('main_header')
    const sticky_control = document.getElementById('sticky_control')
    if(sticky_elem.style.position =='sticky'){
        sticky_elem.style.position = 'static';
        sticky_control.style.backgroundImage = 'url(images/unattach.png)';
    }else{
        sticky_elem.style.position = 'sticky';
        sticky_control.style.backgroundImage = 'url(images/attach.png)';
    } 
}
sticky_control.addEventListener('click',stickyHandler);
stickyHandler();



/* Scroll Rocket and Scrollbar, bottom to top */

function scrollToTop(){
    const rocket_txt = document.querySelector('.rocket_text');
    let currentScreen = window.outerWidth;
    const scrollStep = -10;
    let val = 0;
    const changePos = setInterval(()=>{
        if(window.scrollY !== 0){
            window.scrollBy({
                left:0,
                top:scrollStep,
            }); 
            val = val+0.65;
            if(val > 0){
                rocket_txt.innerText = 'Lifting';
                rocket_txt.style.color = 'green';
            }
            if(val > 450){
                rocket_txt.innerText = 'Crashing';
                rocket_txt.style.color = 'red';
            }
            if(currentScreen > 728){
                if(val > 300){
                    rocket_txt.innerText = 'Crashing';
                    rocket_txt.style.color = 'red';
                }
            }
            rocket.style.bottom=`${val}rem`;
        }else{
            clearInterval(changePos)
            rocket.style.bottom=`${0}rem`;
            rocket_txt.innerText = 'Pre-Launch';
            rocket_txt.style.color = 'blue';
        }
    },10)
}
const rocket = document.querySelector('.rocket_mv');

rocket.addEventListener('click',scrollToTop)


/* Write paragraph Effect for desktop viewport only */
function writeElem(){
    const desktopWidth = window.outerWidth;
    if(desktopWidth > 1284){
        const cont =  document.querySelectorAll('.USec1_contentText p');
        for(let j=0; j<cont.length; j++){
            let innerVal = cont[j].innerHTML.split(' ');
            cont[j].style.display = 'none';
            let para = '';
            setTimeout(()=>{
                innerVal.forEach((ele,idx)=>{
                    x = idx;
                    setTimeout(()=>{
                        para = para + ' '+ele;
                        cont[j].innerHTML = para;
                        cont[j].style.display = 'block'
                    },idx*10)
                })
            },j*400)
        }
    }
}
window.onload(writeElem());


