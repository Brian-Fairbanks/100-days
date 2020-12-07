
let flakes = [];
let obstruct = [];
// let alignSlider, cohesionSlider, seperationSlider;
let raining;
let mousePos

function setMouse(e) {
  mousePos = createVector(e.x * (width / window.innerWidth), e.y);
  obstruct[0].position = mousePos;
}

function setup() {
  createCanvas(1024, 768);

  // createDiv("Alignment");
  // alignSlider = createSlider(0,5,1, 0.1)
  // createDiv("Cohesion");
  // cohesionSlider = createSlider(0,5,1, 0.1)
  // createDiv("Seperation");
  // seperationSlider = createSlider(0,5,1, 0.1)

  raining = setInterval(function () { flakes.push(new Drop) }, 10);
  obstruct = [{ falling: false, size: 20, position: createVector(-20, -20) }]
  document.addEventListener("mousemove", setMouse);


}

function draw() {
  background(51);

  for (let drop of flakes) {
    drop.update();
  }

  // filter out passed drops
  flakes = flakes.filter(drop => (drop.position.y < height && drop.position.x > 0 && drop.position.x < width))
  obstruct = obstruct.filter(object => (object.falling == false))
}







class Drop {
  constructor() {
    this.position = createVector(random(width), 0);
    this.velocity = createVector(.5 * width - random(width), abs(random(height)))
    this.velocity.limit(1);
    this.size = random(3);
    this.falling = true;
    this.touching = null;
  }

  update() {
    // if falling, check if it can be stopped by anything

    if (this.falling) {
      this.position.add(this.velocity);

      // check against anything that can be an object
      for (let other of obstruct) {
        let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
        if (d <= other.size) {
          this.falling = false;
          this.velocity = createVector(0, 3);

          // add this bit as a new obstruct, so snow will pile ontop of it, along with the object that stopped it originally
          if (!obstruct.includes(this)) {
            this.touching = other;
            obstruct.push(this);
          }
        }
      }
    }

    // otherwise, check if it can move now.
    else{
      let d = dist(this.position.x, this.position.y, this.touching.position.x, this.touching.position.y);
      if (d > Math.max(this.size, this.touching.size) || this.position.y > this.touching.position.y ){
        this.falling = true;
      }
    }

    this.show();
  }

  show() {
    strokeWeight(this.size);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}