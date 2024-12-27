const mm = gsap.matchMedia();

function leftToRight(item){
   gsap.from(item,{
    x: "-100%",
    duration: .8,
    scrollTrigger:{
        trigger: item,
        start: "top 80%",
        end: "top 80%",
    }
   })
}

// gsap.from(".us__content",{
//     x: "-100%",
//     duration: .8,
//     scrollTrigger:{
//         trigger: ".us__content",
//         start: "top 80%",
//         end: "top 80%",
//         markers: true
//     }
//    })

const testiCards = document.querySelectorAll(".testimonial__card");
const usContent = document.querySelector(".us__content");
const usCards = document.querySelectorAll(".us__card")


mm.add("(max-width: 768px)", ()=> {

    testiCards.forEach((item) => {
        leftToRight(item);
    })
    usCards.forEach((item) => {
        leftToRight(item);
    })
    
    
});

mm.add("(min-width: 769px)", ()=> {
    testiCards.forEach((item) => {
        leftToRight(item);
    })

    leftToRight(usContent)



})