const player = document.querySelector('.player')
const duration = document.querySelector('.duration')
const curent_duration = document.querySelector('.curent-duration')
const playBtn = document.querySelector('.play-pause')
const volume = document.querySelector('.volume')
const volume_bar = document.querySelector('.volume-bar')
const volume_back = document.querySelector('.volume-back')
let audio = new Audio('../audio/take_five.mp3')

// console.dir(audio)


function playSong(audio) {
    audio.play()
}
function stopSong(audio) {
    audio.pause()
}
playBtn.addEventListener('click', ()=>{
    let timer = null
    if (playBtn.src.includes('play')) {
        playBtn.src = './image/svg/pause-fill.svg'
        console.log(audio.duration)
        if (audio.duration < 60) {
            duration.textContent = '0.' + parseInt(audio.duration)
        }else{
            duration.textContent = parseInt(audio.duration) / 60
        }
        
        timer =  setInterval(()=>{
            if (audio.currentTime < 60) {
                curent_duration.textContent = parseInt(audio.currentTime)
            }else{
                curent_duration.textContent = (parseInt(audio.currentTime) / 60).toFixed(2)
            }
        },500)

        playSong(audio)
    }else{
        playBtn.src = './image/svg/play-fill.svg'
        stopSong(audio)
        clearInterval(timer)
    }

})

volume.addEventListener('click', ()=>{
    if (volume.src.includes('up')) {
        volume.src = './image/svg/volume-mute-fill.svg'
        audio.muted = true
    }else{
        volume.src = './image/svg/volume-up-fill.svg'
        audio.muted = false
    }
})

volume_back.addEventListener('click', (e)=>{
    let width = 0
    if (e.target.className === 'volume-back' || e.target.closest('.volume-back')) {
        console.dir(e.layerX)
    }
    if (e.target.localName === 'span') {
        // console.dir(e)
        volume_bar.style.width = Math.abs(e.layerX)+'px'
        audio.volume = Math.abs(e.layerX) / 100
        console.log(audio.volume)
    }
})

