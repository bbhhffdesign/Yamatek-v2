const btnWpp = document.querySelector(".btnwpp__container");
const stockSection = document.querySelector(".stock");


gsap.to(btnWpp,{
    scrollTrigger:{
        trigger: stockSection,
        start: "top bottom",
        end: "bottom bottom",
        onEnter: ()=>{
            gsap.to(btnWpp, {
                x: 100
            })
        },
        onEnterBack: ()=>{
            gsap.to(btnWpp, {
                x: 100
            })
        },
        onLeave: ()=>{
            gsap.to(btnWpp, {
                x: "0%"
            })
        },
        onLeaveBack: ()=>{
            gsap.to(btnWpp, {
                x: "0%"
            })
        },
    }
})