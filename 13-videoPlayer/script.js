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
const ranges = player.querySelectorAll(".player__slider")


/*
|  Functions
=========================================================*/
function handleKeyboard(e){
  console.log(e);
  
  if(e.code==="Space"){e.preventDefault(); console.log("playing video"); togglePlay();}

  if(e.code==="ArrowRight"){console.log("ff'ing video"); skip(25);}
  if(e.code==="ArrowLeft"){console.log("rr'ing video"); skip(-10);}

  if(e.code==="Period"){console.log("frame step"); skip(.04);}
  if(e.code==="Comma"){console.log("r frame step"); skip(-.04);}

}

function togglePlay(){
  const action = video.paused?'play':'pause';
  video[action]();
}

function notify(icon){
  // set icon
  pauseIndicator.textContent=icon;

  // clear the old one if it exists

  // start the animation
  console.log(pauseIndicator.style);
  pauseIndicator.classList.add("showFade");
}

function updatePlayIndicator(){
  const icon = this.paused?'❚❚':'▶';
  playPause.textContent=icon;
  notify(icon)
}


function skip(amount){
  const icon = amount<0?'⏪':'⏭';
  notify(icon);
  console.log("skipping ",amount," seconds")
  video.currentTime += amount;
}

function handleRangeUpdate(){
  console.log(this.name,":",this.value);
  video[this.name] = this.value;
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

// skip buttons
skipButtons.forEach(button => button.addEventListener('click', function(){
  skip(parseInt(button.dataset.skip));
}));



document.addEventListener('keydown', e => {handleKeyboard(e)});

// ranges
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate));



// remove animation after it runs 
pauseIndicator.addEventListener('animationend', e => {
  e.target.classList.remove("showFade")
})










