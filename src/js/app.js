const playButton = document.getElementById("play-sound");
const playButtonIcon = document.querySelector("#play-sound i");
const whaleSong = document.getElementById("whale-song");

const handleSongPlay = () => {

    if (whaleSong.paused) {

        whaleSong.play();
        playButtonIcon.classList.remove("fa-play");
        playButtonIcon.classList.add("fa-pause");
        

    } else {

        whaleSong.pause();
        playButtonIcon.classList.remove("fa-pause");
        playButtonIcon.classList.add("fa-play");

    }
};

whaleSong.addEventListener("ended", () => {
    playButtonIcon.classList.remove("fa-pause");
    playButtonIcon.classList.add("fa-play");
});


playButton.addEventListener("click", handleSongPlay);

