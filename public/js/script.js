const sliderRight = document.querySelector('.right-slider') 
const sliderLeft = document.querySelector('.left-slider')
const poster = document.querySelectorAll('.movie-poster div')
const moviePoster = document.querySelector('.movie-poster')

document.addEventListener("DOMContentLoaded",()=>{
    poster[1].className = "show"

})
const len = poster.length

let i = 1;
let j = 1;
const arr = ['toRight','mid','toLeft']
// console.log(len)
sliderLeft.addEventListener('click',()=>{
    if(i>0){
        Array.from(poster).map(ele=>{
            ele.className = 'hide'
        })
        i-=1
        poster[i].className = ''
        moviePoster.setAttribute("translateX","(-33%)")
        if(j>0){

            j-=1;
            moviePoster.className = 'movie-poster'
            moviePoster.classList.add(arr[j])
        }
    }    
    // console.log(poster.children[i])
})
sliderRight.addEventListener('click',()=>{
    if(i<len-1){
        Array.from(poster).map(ele=>{
            ele.className = 'hide'
        })
        i+=1
        poster[i].className = 'show'
        if(j<2){
    
            j+=1;
            moviePoster.className = 'movie-poster'
            moviePoster.classList.add(arr[j])
        }
    }    
    // console.log(poster.children[i])

})