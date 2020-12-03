const flock = [];

let alignSlider, cohesionSlider, seperationSlider;

function setup(){
  createCanvas(1024, 768);

  createDiv("Alignment");
  alignSlider = createSlider(0,5,1, 0.1)
  createDiv("Cohesion");
  cohesionSlider = createSlider(0,5,1, 0.1)
  createDiv("Seperation");
  seperationSlider = createSlider(0,5,1, 0.1)

  for (let i=0; i<100; i++){
    flock.push(new Boid());
  }

}

function draw(){
  background(51);

  for (let boid of flock){
    boid.flock(flock);
    boid.update();
    boid.show();

  }
}
