let musicStarted = false;

function startMusic() {
    if (musicStarted) return;

    let music = document.getElementById("bgMusic");

    if (music) {
        music.volume = 1;
        music.play()
        .then(() => {
            console.log("Music playing");
            musicStarted = true;
        })
        .catch((err) => {
            console.log("Music blocked:", err);
        });
    }
}

// multiple triggers for safety (mobile + desktop)
document.addEventListener("click", startMusic);
document.addEventListener("touchstart", startMusic);
document.addEventListener("scroll", startMusic);


// OPTIONAL: debug check
window.addEventListener("load", () => {
    console.log("Page loaded");
});
