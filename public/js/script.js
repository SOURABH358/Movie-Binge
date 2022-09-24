const sliderRight = document.querySelector('.right-slider') 
const sliderLeft = document.querySelector('.left-slider')
const poster = document.querySelectorAll('.movie-poster div')
const root = document.querySelector(':root')

document.addEventListener("DOMContentLoaded",()=>{
    poster[1].className = "show"

})
textFit(document.querySelector('.card-title'))
const len = poster.length

let i = 1;
let j = 1;
let val = 0;
// console.log(len)
sliderLeft.addEventListener('click',()=>{
    if(i<len-1){
        Array.from(poster).map(ele=>{
            ele.className = 'hide'
        })
        i+=1
        poster[i].className = ''
        if(j>0){

            j-=1;
            val-=33;
            root.style.setProperty('--i',`${val}`)   
        }
    }    
    // console.log(poster.children[i])
})
sliderRight.addEventListener('click',()=>{
    if(i>0){
        Array.from(poster).map(ele=>{
            ele.className = 'hide'
        })
        i-=1
        poster[i].className = 'show'
        if(j<2){
    
            j+=1;
            val+=33;
            root.style.setProperty('--i',val)
        }
    }    
    // console.log(poster.children[i])

})