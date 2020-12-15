/*
|  Variables
=========================================================*/

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");

const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress_filled")

const playPause = player.querySelector(".toggle");
const pauseIndicator = player.querySelector(".pauseIndicator");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelector(".player__slider")


/*
|  Functions
=========================================================*/
function handleKeyboard(e){
  console.log(e);
  

  if(e.code==="Space"){e.preventDefault(); console.log("playing video"); togglePlay();}

}

function togglePlay(){
  if (video.paused){
    pauseIndicator.classList.add("showFade");
    video.play();
  }
  else{
    video.pause()
    pauseIndicator.classList.add("showFade");
  };
}

/*
|  Listeners
=========================================================*/
playPause.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

document.addEventListener('keydown', e => {handleKeyboard(e)});

pauseIndicator.addEventListener('animationend', e => {
  e.target.classList.remove("showFade")
})










