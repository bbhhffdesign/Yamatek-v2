const mm = gsap.matchMedia();

function leftToRight(item, stagger, topBottom){

   gsap.from(item,{
    x: "-130%",
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

function bottomToTopGroup(items, stagger, topBottom) {
    gsap.from(items, {
        y: "105%",
        duration: 0.8,
        stagger: stagger, // Escalona la animación entre los elementos
        scrollTrigger: {
            trigger: items[0], // Usar el primer elemento como punto de referencia
            start: `top ${topBottom}`,
            end: `top ${topBottom}`,
            // markers: true,
        },
    });
}

const testiCards = document.querySelectorAll(".testimonial__card");
const usContent = document.querySelector(".us__content");
const usCards = document.querySelectorAll(".us__card")

const chartBars = document.querySelectorAll(".chart__bar")


mm.add("(max-width: 768px)", ()=> {

    testiCards.forEach((item) => {

        leftToRight(item, 0, "90%");
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
    leftToRight(usContent, 0, "90%");
    
    // chartBars.forEach((item, i) => {
    //     let staggTime = i*.2;
    //     bottomToTop(item,staggTime, "110%")
    // })

    bottomToTopGroup(chartBars, 0.2, "100%");




})