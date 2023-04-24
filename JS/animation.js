gsap.registerPlugin(ScrollTrigger);

//---------home-----------
gsap.fromTo(".menu .menu-items",{
    y:-5 ,
    opacity:0,
},
{
    y:0,
    opacity:1,
    duration:01,
    stagger:{from:"center",amount:0.3,ease:"power2.inOut"},
},

)
gsap.fromTo(".mail-git-dark-box",{
    x:200,
    opacity:0,
    scale:0.5,
},
{
    x:0,
    scale:1,
    opacity:1,
    ease:"bounce",
    duration:0.7,
},{
}                                                       
)
gsap.fromTo(".hamburger",{
    x:200,
    opacity:0,
    scale:0.5,
},
{
    x:0,
    scale:1,
    opacity:1,
    duration:0.8,
    ease:"bounce.out",
},{
}                                                      
)
gsap.fromTo(".content-left .introduce-name + .works-define +.my-thought + .contact-me-button",{
    x:-200,
    opacity:0,
},
{
    x:0,
    stagger:{from:"center",amount:0.3,ease:"power2.inOut"},
    opacity:1,
    duration:0.7,
},{
}
)
gsap.fromTo(".my-image",{
    y:200,
    opacity:0,
},
{
    y:0,
    opacity:1,
    duration:0.7,
},{
}
)
gsap.fromTo(".code-icons",{
    scale:0.1,
    opacity:0,
},
{
    scale:1,
    opacity:1,
    duration:1.1,
},{
}
)
gsap.fromTo(".my-image-left",{
    y:100,
    opacity:0
},
{
    y:0,
    opacity:1,
    duration:0.7,
},{
}
)

//--------------end of home

//---------------about mee

gsap.to(".creative-top ,.creative-center , .creative-bottom",{
    y:0,
    duration:0.7,
    opacity:1,
    scrollTrigger:{
        trigger:".about-me-content-left",
        start:"top 75%",
        end:"bottom 0%",
        toggleActions:"restart "
    }
})
gsap.to(".hello",{
    y:0,
    duration:0.7,
    opacity:1,
    scrollTrigger:{
        trigger:".creative-bottom",
        start:"top 85%",
        end:"bottom 0%",
        toggleActions:"restart "
    }
})
gsap.to(".about-1",{
    x:0,
    duration:0.7,
    opacity:1,
    scrollTrigger:{
        trigger:".creative-bottom",
        start:"top 85%",
        end:"bottom 0%",
        toggleActions:"restart pause resume none"
    }
})
gsap.to(".about-2",{
    x:0,
    duration:0.7,
    opacity:1,
    scrollTrigger:{
        trigger:".about-2",
        start:"top 95%",
        end:"bottom 0%",
        // markers:true,
        toggleActions:"restart pause resume none"
    }
})
gsap.to(".about-3",{
    x:0,
    duration:1,
    opacity:1,
    scrollTrigger:{
        trigger:".about-3",
        start:"top 95%",
        end:"bottom 0%",
        // markers:true,
        toggleActions:"restart pause resume none"
    }
})


//-----------gsap timeline for header----------
// gsap.registerPLugin(scrollTrigger);
// gsap.registerPlugin(ScrollTrigger);

// const t1 = gsap.timeline({
//     defaults:{duration:0,ease:"power2"}
// });
// t1.fromTo(".mail-git-dark-box", {x:200, opacity:0}, {duration:0.3, x:0,opacity:1,ease:"bounce"})
// .fromTo(".menu .menu-items", {x:0 ,y:-5,opacity:0}, {duration: 1,y:0, x:0,opacity:1,stagger:{from:"center",amount:0.5,ease:"power1.inOut"},})
