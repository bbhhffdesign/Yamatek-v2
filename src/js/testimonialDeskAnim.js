const deskItems = document.querySelectorAll(".test__img");
const testominialsContainer = document.querySelector(".testimonials__img__container")

let timeline = gsap.timeline({paused: true});

deskItems.forEach((item, i)=> {
    if (i % 2 == 1){
        timeline.from(item, {opacity: 0, duration :.5}, "<")
        timeline.from(item, {x:"200%", duration: 1}, "<")
    }else{
        timeline.from(item,{opacity: 0, duration :.5}, "<")
        timeline.from(item, {x:"-150%",duration: 1,  delay: 0}, "<")
    }  
})

ScrollTrigger.create({
    trigger: testominialsContainer,
    start: "top 70%",
    end: "bottom 70%",
    markers: true,
    onEnter: () => {timeline.play()}
});
