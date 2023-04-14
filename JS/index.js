const hamburger=document.querySelectorAll(".hamburger");
const bars=document.querySelectorAll(".bars");
const menu=document.querySelectorAll(".menu");

hamburger.addEventListener('click', () =>{
    bars.classList.toggle('active');
    
})