const drumkit = ["a","s","d","f","g"]

$(document).keydown(function(e) {
  // console.log(e);
  let key = e.key;

  if (drumkit.includes(key)){
    console.log("play drum: "+key.toUpperCase());
    $("#drum"+key.toUpperCase()).addClass("vibrate-1");
    setTimeout(function() {     $("#drum"+key.toUpperCase()).removeClass("vibrate-1"); }, 50);


  }
})
