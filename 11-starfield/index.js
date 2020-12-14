const stars = [];
var speed = 1;

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
