gsap.registerPlugin(ScrollTrigger);

//---------home-----------
gsap.fromTo(".menu",{
    y:-20,
    opacity:0,
},
{
    y:0,
    opacity:1,
    duration:0.7,
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
    duration:0.7,
},{
}                                                      
)
gsap.fromTo(".content-left",{
    x:-200,
    opacity:0,
},
{
    x:0,
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
        markers:true,
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
        markers:true,
        toggleActions:"restart pause resume none"
    }
})