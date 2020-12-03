// all keys added to play
const drumkit = ["a","s","d","f","g", "h"]

// will allow for multiple identical audio streams playing at the same time
const ticks = [];

// array of sounds to choose from
const sounds = [new Audio("./Assets/real-01BB1-snare-R2M.wav"),
  new Audio("./Assets/real-01BB1-snare-R4M.wav"),
  new Audio("./Assets/real-01EG19THCM.wav"),
  new Audio("./Assets/real-02R3.UF-HiHat-A-L.wav"),
  new Audio("./Assets/real-03.TOM2C-L.wav"),
  new Audio("./Assets/real-03RI.S3HIM.wav"),
  
]



$(document).keydown(playSound);
  
function playSound(e) {
// console.log(e);
let key = e.key;
let index = drumkit.indexOf(key);

if (index >=0){
  console.log("play drum: "+key.toUpperCase()+" : "+index);
  // trigger visual effect of hitting drum
  $(".drum[data-key="+key+"]").addClass("hit");

  // push sound effect onto tick array
  ticks.push(sounds[index].cloneNode());

  // keep the index on tick, play the sound, and then remove it from the tick array;
  let thisInd = ticks.length-1;
  ticks[thisInd].play(
    ticks.splice(thisInd, 1)
    );
  }
}


// check for transition ending
const drums = document.querySelectorAll(".drum");
drums.forEach(key => key.addEventListener('animationend', removeTransition))

function removeTransition(e){
  console.log(e);
  this.classList.remove("hit")
}