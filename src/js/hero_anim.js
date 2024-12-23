let heroAnimatedItems = [
    document.querySelector(".nav"),
    document.querySelector(".hero__tag")
];

heroAnimatedItems.forEach((item) => gsap.from(item, {x: "-150%", duration: 1}));

gsap.from(document.querySelector(".hero__title"), {opacity : 0, duration: 1, delay : .8 })
gsap.from(document.querySelector(".hero__subtitle"), {opacity : 0, duration: 1, delay : .8 })
