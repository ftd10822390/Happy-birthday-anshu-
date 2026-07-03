document.getElementById("startBtn").addEventListener("click", function () {

    let music = document.getElementById("bgMusic");

    if (!music) {
        console.log("Music element not found");
        return;
    }

    music.currentTime = 0; // reset
    music.volume = 1;

    music.play()
    .then(() => {
        console.log("Music playing");
    })
    .catch((err) => {
        console.log("Music blocked:", err);
    });

});
