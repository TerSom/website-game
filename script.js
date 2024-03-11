const btn = document.getElementById("btn")
const trailer = document.getElementById ("trailer")

function triggerBtn() {
    if(trailer.paused){
        trailer.play()
        btn.innerHTML = "Pause"
    }else{
        trailer.pause()
        btn.innerHTML = "Play"
    }
}