const flock = [];

function setup(){
  createCanvas(1024, 768);
  flock.push(new Boid());
}

function draw(){
  background(51);

  for (let boid of flock){
    boid.show();
  }
}
