// Smooth Scroll Animation
document.addEventListener("scroll", function() {
    let elements = document.querySelectorAll(".glass-card");
    elements.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
            el.style.opacity = "1";
            el.style.transform = "translateY(0)";
        }
    });
});

// GSAP Animation for Hero Section
gsap.from(".glass-card", { duration: 1, opacity: 0, y: -50, ease: "power3.out" });

// Back to Top Button
let backToTop = document.getElementById("back-to-top");
window.addEventListener("scroll", function() {
    if (window.scrollY > 200) {
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
});
backToTop.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Dark Mode Toggle
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});