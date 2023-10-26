const player = document.querySelector(".player");
const duration = document.querySelector(".duration");
const curent_duration = document.querySelector(".curent-duration");
const playBtn = document.querySelector(".play-pause");
const volume = document.querySelector(".volume");
const volume_bar = document.querySelector(".volume-bar");
const volume_back = document.querySelector(".volume-back");
let audio = new Audio("/audio/take_five.mp3");

function playSong(audio) {
    audio.play();
}
function stopSong(audio) {
    audio.pause();
}
playBtn.addEventListener("click", () => {
    let timer = null;
    if (playBtn.src.includes("play")) {
        playBtn.src = "/image/svg/pause-fill.svg";
        if (audio.duration < 60) {
            duration.textContent = "0." + parseInt(audio.duration);
        } else {
            duration.textContent = parseInt(audio.duration) / 60;
        }

        timer = setInterval(() => {
            if (audio.currentTime < 60) {
                curent_duration.textContent = parseInt(audio.currentTime);
            } else {
                curent_duration.textContent = (
                    parseInt(audio.currentTime) / 60
                ).toFixed(2);
            }
        }, 500);

        playSong(audio);
    } else {
        playBtn.src = "./image/svg/play-fill.svg";
        stopSong(audio);
        clearInterval(timer);
    }
});

volume.addEventListener("click", () => {
    if (volume.src.includes("up")) {
        volume.src = "./image/svg/volume-mute-fill.svg";
        audio.muted = true;
    } else {
        volume.src = "./image/svg/volume-up-fill.svg";
        audio.muted = false;
    }
});

volume_back.addEventListener("click", (e) => {
    volume_bar.style.width = e.target.clientWidth - e.offsetX + "px";
    audio.volume = (e.target.clientWidth - e.offsetX) / 100;
    console.log(audio.volume);
});
