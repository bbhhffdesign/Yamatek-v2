const mm = gsap.matchMedia();
function leftToRight(item, stagger, topBottom) {
  gsap.from(item, {
    x: "-130%",
    duration: .8,
    delay: stagger,
    onStart: () => {
      item.style.willChange = 'transform'; // Activar will-change antes de la animación
    },
    onComplete: () => {
      item.style.willChange = ''; // Desactivar will-change después de la animación
    },
    scrollTrigger: {
      trigger: item,
      start: `top ${topBottom}`,
      end: `top ${topBottom}`
      // markers: true
    }
  });
}
function bottomToTopGroup(items, stagger, topBottom) {
  gsap.from(items, {
    y: "105%",
    duration: 0.8,
    stagger: stagger,
    onStart: () => {
      items.forEach(item => {
        item.style.willChange = 'transform'; // Activar will-change antes de la animación
      });
    },
    onComplete: () => {
      items.forEach(item => {
        item.style.willChange = ''; // Desactivar will-change después de la animación
      });
    },
    scrollTrigger: {
      trigger: items[0],
      start: `top ${topBottom}`,
      end: `top ${topBottom}`
      // markers: true,
    }
  });
}
const testiCards = document.querySelectorAll(".testimonial__card");
const usContent = document.querySelector(".us__content");
const usCards = document.querySelectorAll(".us__card");
const chartBars = document.querySelectorAll(".chart__bar");
const deskItems = document.querySelectorAll(".test__img");
const testominialsContainer = document.querySelector(".testimonials__img__container");
mm.add("(max-width: 768px)", () => {
  testiCards.forEach(item => {
    leftToRight(item, 0, "90%");
  });
  usCards.forEach(item => {
    leftToRight(item, 0, "100%");
  });
});
mm.add("(min-width: 769px)", () => {
  let timeline = gsap.timeline({
    paused: true
  });
  deskItems.forEach((item, i) => {
    if (i % 2 == 1) {
      timeline.from(item, {
        opacity: 0,
        duration: .5
      }, "<");
      timeline.from(item, {
        x: "200%",
        duration: 1
      }, "<");
    } else {
      timeline.from(item, {
        opacity: 0,
        duration: .5
      }, "<");
      timeline.from(item, {
        x: "-150%",
        duration: 1,
        delay: 0
      }, "<");
    }
  });
  ScrollTrigger.create({
    trigger: testominialsContainer,
    start: "top 70%",
    end: "bottom 70%",
    onEnter: () => {
      timeline.play();
    }
  });
  testiCards.forEach((item, i) => {
    let staggTime = i * .1;
    leftToRight(item, staggTime, "90%");
  });
  leftToRight(usContent, 0, "90%");
  bottomToTopGroup(chartBars, 0.2, "100%");
});