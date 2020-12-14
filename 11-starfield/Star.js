class Star {
  constructor() {
    this.pos = createVector(random(-width,width)/2, random(-height,height)/2, random(width));
    this.pz = this.pos.z
  }

  update = function() {
    this.pos.z = this.pos.z - speed;

    // reset star when it goes offscreen
    if (this.pos.z < 1) {
      this.pos.z = width;
      this.pos.x = random(-width, width);
      this.pos.y = random(-height, height);
      this.pz = this.pos.z;
    }
  }


  show() {
    fill(255);
    noStroke();

    var fX = map(this.pos.x / this.pos.z, 0, 1, 0, width);
    var fY = map(this.pos.y / this.pos.z, 0, 1, 0, height);

    var size = map(this.pos.z, 0, width, 5, 0);
    ellipse(fX, fY, size, size);
  }

}