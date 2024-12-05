// Animaciones GSAP
gsap.from("header h1", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5
});

gsap.from("nav a", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 1,
    delay: 1
});

gsap.from(".gallery img", {
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        end: "top 30%",
        toggleActions: "play none none reverse"
    },
    opacity: 0,
    scale: 0.9,
    stagger: 0.2,
    duration: 1
});
