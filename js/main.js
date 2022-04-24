
let navbar =document.querySelector(".navbar")
window.addEventListener("scroll", function(){
    if(this.window.scrollY>150){
        navbar.style.cssText="opacity:.8"
    }
    else{
         navbar.style.cssText="opacity:1"
    }
})

let a =document.querySelectorAll(".navbar a")

a.forEach(function(e){
    e.addEventListener("click",function(){
       perventDefault()
    })
})