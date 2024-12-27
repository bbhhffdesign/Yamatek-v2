const mm = gsap.matchMedia();

function leftToRight(item, stagger, topBottom){

   gsap.from(item,{
    x: "-100%",
    duration: .8,
    delay: stagger,
    scrollTrigger:{
        trigger: item,
        start: `top ${topBottom}`,
        end: `top ${topBottom}`,
        // markers: true
    }
   })
}

const testiCards = document.querySelectorAll(".testimonial__card");
const usContent = document.querySelector(".us__content");
const usCards = document.querySelectorAll(".us__card")


mm.add("(max-width: 768px)", ()=> {

    testiCards.forEach((item) => {

        leftToRight(item, 1, "90%");
    })
    usCards.forEach((item) => {
        leftToRight(item, 0, "100%");
    })
    
    
});

mm.add("(min-width: 769px)", ()=> {
    testiCards.forEach((item, i) => {
        let staggTime = i * .1;

        leftToRight(item, staggTime,"90%");
    })

    leftToRight(usContent, 0, "90%")



})