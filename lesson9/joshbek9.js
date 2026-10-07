let title = document.querySelector("h1")
let btn1 = document.querySelector("#btn1")
let btn2 = document.getElementById("btn2")

btn1.addEventListener('click', () => {
    // alert ("кнопка заработала")
    title.style.background ="black"
    title.style.color = "red"
    title.style.width = "200px"
    title.style.height = "200px"
})
btn2.addEventListener('click', () =>{
    document.body.style.background = 'red'
})
btn3.addEventListener('click', () =>{
    document.body.style.background = 'white'
})

let lamp = document.getElementById("img")
let on = document.getElementById("on")
let off = document.getElementById("off")

on.onclick = function(){
    lamp.src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3EchsUfvssa3wkANxosvVNThK9TcYw2RwScsqZJw41g&s=10"
}