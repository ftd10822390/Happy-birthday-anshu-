let musicStarted = false;

document.addEventListener("DOMContentLoaded", function () {

    let btn = document.getElementById("startBtn");

    btn.addEventListener("click", function () {

        // 🎵 MUSIC START
        let music = document.getElementById("bgMusic");

        if (music && !musicStarted) {
            music.play().then(() => {
                musicStarted = true;
            }).catch(err => {
                console.log("Music error:", err);
            });
        }

        // 🎉 SHOW CONTENT
        let msg = document.getElementById("message");
        if (msg) {
            msg.style.display = "block";
        }

        // 🎈 HIDE BUTTON
        btn.style.display = "none";

    });

});
