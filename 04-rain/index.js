
let drops = [];
// let alignSlider, cohesionSlider, seperationSlider;
let raining;

function setup(){
  createCanvas(1024, 768);

  // createDiv("Alignment");
  // alignSlider = createSlider(0,5,1, 0.1)
  // createDiv("Cohesion");
  // cohesionSlider = createSlider(0,5,1, 0.1)
  // createDiv("Seperation");
  // seperationSlider = createSlider(0,5,1, 0.1)

  raining = setInterval(function (){drops.push(new Drop)} ,10);

}

function draw(){
  background(51);

  for (let drop of drops){
    drop.update();
  }

  // filter out passed drops
  drops = drops.filter(drop => (drop.position.y < height && drop.position.x > 0 && drop.position.x < width))
}


class Drop{
  constructor(){
    this.position = createVector(random(width), 0);
    this.velocity = createVector(random(width), abs(random(height)))
    this.velocity.limit(1);
    this.size = random(3);
  }

  update(){
    this.position.add(this.velocity);
    this.show();
  }

  show(){
    strokeWeight(this.size);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}