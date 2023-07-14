const hamburger=document.querySelector(".hamburger");
const bars=document.querySelectorAll(".bars");
const menu=document.querySelector(".menu");
const menu_links=document.querySelectorAll(".menu-items");
const menu_anchor=document.querySelectorAll(".menu-items a");
hamburger.addEventListener('click', ()=>{
    bars.forEach((bars) =>{
        bars.classList.toggle('active')
    })
    menu.classList.toggle('menu-2');
    menu_links.forEach((menu_links) =>{
        menu_links.classList.toggle("link-effect")
    })
})
// menu_anchor.addEventListener('click', () =>{
//     // console.log("dhjkh")
//     // menu_links.forEach((menu_links) =>{
//     //     menu_links.classList.remove("link-effect")
//     // })
//     hamburger.classList.remove('active');
// })
menu_anchor.forEach((menu_anchor) =>{
    menu_anchor.addEventListener('click', ()=>{
        menu_links.forEach((menu_links)=>{
            menu_links.classList.remove('link-effect')
        })
        menu.classList.remove('menu-2')
        bars.forEach((bars) =>{
            bars.classList.remove('active')
        })
    })
})

//end of nav bar 

//form tag animation

function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
  
    const serviceID = "service_0xs9n6m";
    const templateID = "template_vhei6ni";
  
      emailjs.send(serviceID, templateID, params)
      .then(res=>{
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully!!")
  
      })
      .catch(err=>console.log(err));
  
  }
  
  
