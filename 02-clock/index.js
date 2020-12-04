let numerals = $(".numeral")

let ticks = $(".tick")
for (let i=1; i<60; i++){
  ticks.clone().appendTo( "#ticks" );
}


ticks = $(".tick")

function rotate($el, degrees) {
  $el.css({
'-webkit-transform' : 'rotate('+degrees+'deg)',
   '-moz-transform' : 'rotate('+degrees+'deg)',  
    '-ms-transform' : 'rotate('+degrees+'deg)',  
     '-o-transform' : 'rotate('+degrees+'deg)',  
        'transform' : 'rotate('+degrees+'deg)',  
             'zoom' : 1
  });
}



// align numerals arround clock face
numerals.each(function (index) {
  console.log(this);
  let rotation = (360/12)*((index+1)%12);
  rotate($(this), rotation);
});

// align ticks arround clock face
ticks.each(function (index) {
  console.log(this);
  let rotation = (360/60)*index;
  rotate($(this), rotation);
  if(index%5==0){$(this).css({'font-weight':'900'})}
});

function getTimes(){
  let time = new Date();
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours()

  let spos = 360*(seconds)/(60);
  let mpos = 360*((minutes*60)+(seconds))/(60*60)
  let hpos = 360*((hours*60*60)+(minutes*60)+(seconds))/(12*3600)

  if(spos==0 || mpos==0 || hpos==0){
    $(".hand").css({'transition':'0.00s'});
  }
  else{
    $(".hand").css({
      'transition':'0.15s',
      'transition-timing-function':'cubic-bezier(0.42, 0, 0.6, 2.1)'
    });
  }



  rotate($("#hour"),hpos);
  rotate($("#second"),spos);
  rotate($("#minute"),mpos);

}

let timer = setInterval(getTimes, 1000);