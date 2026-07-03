
document.getElementById("startBtn").addEventListener("click", function () {

    let music = document.getElementById("bgMusic");

    music.play().then(() => {
        document.getElementById("startBtn").style.display = "none";
    }).catch((err) => {
        console.log(err);
    });

});
