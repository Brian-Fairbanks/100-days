// all keys added to play
const drumkit = ["a","s","d","f","g"]

// will allow for multiple identical audio streams playing at the same time
const ticks = [];

// array of sounds to choose from
const sounds = [new Audio("./Assets/real-01BB1-snare-R2M.wav"),
  new Audio("./Assets/real-01BB1-snare-R4M.wav")
]



$(document).keydown(function(e) {
  // console.log(e);
  let key = e.key;
  let index = drumkit.indexOf(key);

  if (index >=0){
    console.log("play drum: "+key.toUpperCase()+" : "+index);
    // trigger visual effect of hitting drum
    $("#drum"+key.toUpperCase()).addClass("vibrate-1");
    setTimeout(function() {     $("#drum"+key.toUpperCase()).removeClass("vibrate-1"); }, 50);

    // push sound effect onto tick array
    ticks.push(sounds[index].cloneNode());

    // keep the index on tick, play the sound, and then remove it from the tick array;
    let thisInd = ticks.length-1;
    ticks[thisInd].play(
      ticks.splice(thisInd, 1)
      );
  }
})
