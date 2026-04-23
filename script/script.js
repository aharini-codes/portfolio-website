// Smooth scroll for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(this.hash);
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// Simple typing effect (optional)
const text = "Java Full Stack Developer";
let index = 0;
function typingEffect() {
    const typingElement = document.querySelector(".typing");
    if (typingElement && index < text.length) {
        typingElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 80);
    }
}

typingEffect();
