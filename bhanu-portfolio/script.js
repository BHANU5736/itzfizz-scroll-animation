gsap.registerPlugin(ScrollTrigger);
gsap.from("h1", {
    y: -100,
    opacity: 0,
    duration: 1
});

gsap.from("h2", {
    opacity: 0,
    duration: 1,
    delay: 0.5
});

gsap.from("p", {
    y: 50,
    opacity: 0,
    duration: 1,
    delay: 1
});
gsap.utils.toArray(".section").forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 1,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
        }
    });
});
document.querySelector(".btn").addEventListener("click", () => {
    document.querySelector(".projects").scrollIntoView({
        behavior: "smooth"
    });
});
