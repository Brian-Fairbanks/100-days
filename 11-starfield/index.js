const stars = [];
var speed = 4;
var timer = 0;

// interactive range
var ir = .3;

let instruction = "UP/DOWN to control speed \n Mouse to steer";


function setup(){
  createCanvas(windowWidth, windowHeight);

  for (let i=0; i<800; i++){
    stars.push(new Star());
  }

}

function draw(){
  background(0);
  
  if(timer < 300){timer+=1;}

  if(timer < 150 || (timer%20<=10 && timer<300)){
    fill(255);
    stroke(255);
    textSize(width/20);
    textAlign(CENTER, CENTER);
    text(instruction, 0, 0, width, height); // Text wraps within text box\
  }

  // reset to center
  translate(map(mouseX, 0, width, 0.5 + ir, 0.5 - ir) * width, map(mouseY, 0, height, 0.5 + ir, 0.5 - ir) * height);

  for (let star of stars){
    star.update();
    star.show();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


document.addEventListener("keydown", (e)=>{
  console.log(e);

  if(e.code === "ArrowUp"){if (speed < 200)speed*=2;}
  if(e.code === "ArrowDown"){if (speed >.5)speed/=2;}
  if(e.code === "Space"){speed=1000;}
});