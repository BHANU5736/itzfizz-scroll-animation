gsap.registerPlugin(ScrollTrigger);

// Intro animation
gsap.from(".headline", {
    opacity: 0,
    y: 60,
    duration: 1
});

gsap.from(".stat", {
    opacity: 0,
    y: 30,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5
});

// Scroll animation
gsap.to(".visual img", {
    y: -200,
    scale: 1.1,
    ease: "none",
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: 1
    }
});
gsap.to(".headline", {
    opacity: 0,
    scrollTrigger: {
        trigger: ".hero",
        start: "center top",
        end: "bottom top",
        scrub: true
    }
});