let numerals = $(".numeral")
let hours;

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

  setSky((360*(((hours-6)*60*60)+(minutes*60)+(seconds))/(24*3600)))

}



let sunPos = 0;
const sun = $("#sun-wrapper");
const sky = $("#sky");
const land = $("#land");

function setSky(sunPos){
  rotate(sun, sunPos);

  let blue=0.5+((180+(sunPos-180))/180);

  if (blue>=2){blue = 0+blue%1;}
  else if (blue > 1) {blue = 1-blue%1}

  sky.css({
    "background-color":`rgb(0,0,${255*blue})`
  })

  land.css({
    "background-color":`rgb(${200*blue},${119*blue},${102*blue})`
  })
}


let timer = setInterval(getTimes, 1000);