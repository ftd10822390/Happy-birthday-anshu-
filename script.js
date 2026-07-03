const text = "🎉 Happy Birthday Anshu ❤️";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

function startSurprise() {
    document.getElementById("message").style.display = "block";

    const music = document.getElementById("music");
    music.play().catch(() => {});

    confetti({
        particleCount: 250,
        spread: 180,
        origin: { y: 0.6 }
    });

    for (let j = 0; j < 40; j++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-30px";
        heart.style.fontSize = (20 + Math.random() * 25) + "px";
        heart.style.animation = "fall 5s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(720deg);
opacity:0;
}
}`;
document.head.appendChild(style);
