document.getElementById("btn").addEventListener("click", function () {

    // show message
    document.getElementById("msg").style.display = "block";

    // play music
    let music = document.getElementById("music");

    music.currentTime = 0;

    let playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.catch(err => {
            console.log("Music blocked:", err);
            alert("🔊 Tap again for sound");
        });
    }

});
