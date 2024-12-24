let img = document.querySelector(".imgdisplay__img");

let tl = gsap.timeline({repeat: -1, yoyo: true});
tl.to(img, {
    y: 10,
    ease: "none",
    duration: 1
}).to(img, {
    y: 0,
    ease: "none",
    duration: 1
}).to(img, {
    y: -10,
    ease: "none",
    duration: 1
})