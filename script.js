function startMusic() {

    let music = document.getElementById("bgMusic");

    if (!music) {
        alert("Music not found!");
        return;
    }

    music.currentTime = 0;
    music.volume = 1;

    let playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            console.log("Music started");
        }).catch(err => {
            console.log("Blocked:", err);
            alert("Tap again to enable sound 🔊");
        });
    }
}
