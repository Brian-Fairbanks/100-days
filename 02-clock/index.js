let numerals = $(".numeral")

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

function getTimes(){
  let time = new Date();
  let mili = time.getMilliseconds();
  let seconds = time.getSeconds();
  let minutes = time.getMinutes();
  let hours = time.getHours()

  let spos = 360*(seconds+(mili/1000))/(60);
  rotate($("#second"),spos);
  
  let mpos = 360*((minutes*60)+(seconds))/(60*60)
  rotate($("#minute"),mpos);

  let hpos = 360*((hours*60*60)+(minutes*60)+(seconds))/(12*3600)
  rotate($("#hour"),hpos);


}

let timer = setInterval(getTimes, 100);