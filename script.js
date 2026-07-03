// ========================
// BIRTHDAY WEBSITE SCRIPT
// ========================

// Music auto play on user click (browser safe method)
window.addEventListener("click", function () {
    let music = document.getElementById("bgMusic");
    if (music) {
        music.play();
    }
});


// Typewriter effect (if used)
const text = "Happy Birthday Anshu 🎉💖";
let i = 0;

function typeWriter() {
    let h1 = document.getElementById("typewriter");
    if (!h1) return;

    if (i < text.length) {
        h1.innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

window.addEventListener("load", function () {
    typeWriter();
});


// Simple hearts animation
function createHeart() {
    let heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";
    heart.style.fontSize = "20px";
    heart.style.animation = "floatUp 4s linear";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

setInterval(createHeart, 500);
