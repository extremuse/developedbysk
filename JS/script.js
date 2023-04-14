const hamburger=document.querySelector(".hamburger");
const bars=document.querySelectorAll(".bars");
const menu=document.querySelector(".menu");
const menu_links=document.querySelectorAll(".menu-items");
console.log("sk")
hamburger.addEventListener('click', ()=>{
    bars.forEach((bars) =>{
        bars.classList.toggle('active')
    })
    menu.classList.toggle('menu-2');
    menu_links.forEach((menu_links) =>{
        menu_links.classList.toggle("link-effect")
    })
    console.log("ak2222")
})