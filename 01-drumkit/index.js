// will allow for multiple identical audio streams playing at the same time
const ticks = [];

// on key down, play sound
$(document).keydown(playSound);
$(".drum").on("click", playSound);
  

// play the associated sound
function playSound(e) {

let key;

if(e.type==="click"){
  key=e.target.dataset.key;
}
else{
  key = e.key;
}

  // trigger visual effect of hitting drum
  $(".drum[data-key="+key+"]").addClass("hit");

  // check if there is an associated clip
  let clip = $("audio[data-key="+key+"]")[0];
  if(!clip)return;

  // push sound effect onto tick array
  ticks.push(clip.cloneNode());

  // keep the index on tick, play the sound, and then remove it from the tick array;
  let thisInd = ticks.length-1;
  ticks[thisInd].play(
    ticks.splice(thisInd, 1)
    );
}


// check for transition ending
const drums = document.querySelectorAll(".drum");
drums.forEach(key => {
  key.addEventListener('animationend', removeTransition);
})

drums.forEach(key => {
  key.on("click", playSound);
})

function removeTransition(e){
  console.log(e);
  this.classList.remove("hit")
}