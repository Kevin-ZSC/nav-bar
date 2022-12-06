const minBar = document.querySelector(".fa-bars");
const menu = document.querySelector(".menu");

minBar.addEventListener("click", (e)=> {
    menu.classList.toggle("show-menu");
})