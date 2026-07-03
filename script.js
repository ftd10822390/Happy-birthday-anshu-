document.getElementById("startBtn").onclick = function () {

    document.getElementById("message").style.display = "block";
    this.style.display = "none";

    let music = document.getElementById("bgMusic");

    music.play().catch(err => console.log(err));

};
