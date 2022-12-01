const btnLeft = document.querySelector(".btn-left")
const btnRight = document.querySelector(".btn-right")
const btnLeft1 = document.querySelector(".btn-left1")
const btnRight1 = document.querySelector(".btn-right1")

const container1=document.querySelector(".container1")
const container2=document.querySelector(".container2")

btnLeft.addEventListener("click",()=>{
    console.log("btn left clicked")
    container2.classList.toggle("hidden")
    container1.classList.toggle("hidden")
})
btnRight.addEventListener("click",()=>{
    console.log("btn right clicked")
    container1.classList.toggle("hidden")
    container2.classList.toggle("hidden")
})

btnLeft1.addEventListener("click",()=>{
    console.log("btn left clicked")
    container2.classList.toggle("hidden")
    container1.classList.toggle("hidden")
})
btnRight1.addEventListener("click",()=>{
    console.log("btn right clicked")
    container1.classList.toggle("hidden")
    container2.classList.toggle("hidden")
})