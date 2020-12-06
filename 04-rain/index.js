
let flakes = [];
// let alignSlider, cohesionSlider, seperationSlider;
let raining;
let mousePos

function setMouse(e){
  mousePos = createVector(e.offsetX,e.offsetY);
  console.log(mousePos)
}

function setup(){
  createCanvas(1024, 768);

  // createDiv("Alignment");
  // alignSlider = createSlider(0,5,1, 0.1)
  // createDiv("Cohesion");
  // cohesionSlider = createSlider(0,5,1, 0.1)
  // createDiv("Seperation");
  // seperationSlider = createSlider(0,5,1, 0.1)

  raining = setInterval(function (){flakes.push(new Drop)} ,10);
  canvas.addEventListener("mousemove", setMouse);


}

function draw(){
  background(51);

  for (let drop of flakes){
    drop.update();
  }

  // filter out passed drops
  flakes = flakes.filter(drop => (drop.position.y < height && drop.position.x > 0 && drop.position.x < width))
}







class Drop{
  constructor(){
    this.position = createVector(random(width), 0);
    this.velocity = createVector(.5*width - random(width), abs(random(height)))
    this.velocity.limit(1);
    this.size = random(3);
    this.falling = true;
  }

  update(){
    if (this.falling){
      this.position.add(this.velocity);
    }

    let d;
    
    if (mousePos){
      d = dist(this.position.x, this.position.y, mousePos.x, mousePos.y);
    }
    // let d = 100;
    if(d < 20){
      this.position
      this.falling=false;
      this.velocity = createVector(0, 3);
    }
    else{
      this.falling=true;
    }

    this.show();
  }

  show(){
    strokeWeight(this.size);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}