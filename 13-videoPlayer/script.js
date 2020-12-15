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
  const action = video.paused?'play':'pause';
  video[action]();
}

function updatePlayIndicator(){
  const icon = this.paused?'❚❚':'▶';
  playPause.textContent=icon;
  pauseIndicator.textContent=icon;

  pauseIndicator.classList.add("showFade");
}

/*
|  Listeners
=========================================================*/
// play pause actions
playPause.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);

// update buttons
video.addEventListener('play', updatePlayIndicator);
video.addEventListener('pause', updatePlayIndicator)



document.addEventListener('keydown', e => {handleKeyboard(e)});


// remove animation after it runs 
pauseIndicator.addEventListener('animationend', e => {
  e.target.classList.remove("showFade")
})










