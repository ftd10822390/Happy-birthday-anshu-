function startSurprise() {
    document.getElementById("message").style.display = "block";

    // Confetti effect
    for (let i = 0; i < 80; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "💖";
        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animation = "fall 4s linear forwards";
        document.body.appendChild(heart);

        setTimeout(() => heart.remove(), 4000);
    }

    alert("🎉 Happy Birthday Anshu! 🎂💖");
}

const style = document.createElement("style");
style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(0) rotate(0deg);
opacity:1;
}
100%{
transform:translateY(110vh) rotate(360deg);
opacity:0;
}
}`;
document.head.appendChild(style);
