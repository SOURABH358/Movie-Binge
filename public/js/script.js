const sliderRight = document.querySelector('.right-slider') 
const sliderLeft = document.querySelector('.left-slider')
let poster = document.querySelector('.movie-poster div')


const len = poster.children.length

let i = 0;
// console.log(len)
sliderLeft.addEventListener('click',()=>{
    if(i>0){
        Array.from(poster.children).map(ele=>{
            ele.classList.add('hide')
        })
        i-=1
        poster.children[i].className = ''

    }    
    // console.log(poster.children[i])
})
sliderRight.addEventListener('click',()=>{
    if(i<len-1){
        Array.from(poster.children).map(ele=>{
            ele.className = 'hide'
        })
        i+=1
        poster.children[i].className = 'show'
    }    
    // console.log(poster.children[i])


})