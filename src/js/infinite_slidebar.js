let slideWideth = document.querySelector(".slide1").offsetWidth;

let duration = innerWidth < 1280 ? 10 : 8; 

gsap.to(".slide1", {x: -slideWideth, duration: duration, repeat: -1, ease: "none"})
gsap.to(".slide2", {x: -slideWideth, duration: duration, repeat: -1, ease: "none"})
gsap.to(".slide3", {x: -slideWideth, duration: duration, repeat: -1, ease: "none"})

