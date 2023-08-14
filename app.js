let menu = document.querySelector(".menu")
let menuBtn = document.querySelector(".hamburger-menu")
let menuBtnIcon = document.querySelector(".hamburger-menu i")

menuBtn.addEventListener("click", function (){
    if(menuBtnIcon.classList.contains("fa-bars")){
        menu.style.left = "0"
        menuBtnIcon.classList = "fa fa-times"
    }
    else{
        menu.style.left = "-256px"
        menuBtnIcon.classList = "fa fa-bars"
    }
})