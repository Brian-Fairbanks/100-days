const stars = [];
var speed = 4;

function setup(){
  createCanvas(1024, 768);

  for (let i=0; i<800; i++){
    stars.push(new Star());
  }

}

function draw(){
  background(0);

  // reset to center
  translate(mouseX, mouseY);

  for (let star of stars){
    star.update();
    star.show();
  }
}


document.addEventListener("keydown", (e)=>{
  console.log(e);

  if(e.code === "ArrowUp"){if (speed < 200)speed*=2;}
  if(e.code === "ArrowDown"){if (speed >.5)speed/=2;}
});