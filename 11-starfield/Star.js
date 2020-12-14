class Star {
  constructor() {
    this.pos = createVector(random(-width,width)/2, random(-height,height)/2, random(width));
    this.prevZ = this.pos.z
    this.color = [random(180,255),random(180,255),random(180,255),255]
    // this.color=255;
  }

  update = function() {
    this.pos.z = this.pos.z - speed;

    // reset star when it goes offscreen
    if (this.pos.z < 1) {
      this.pos.z = width;
      this.pos.x = random(-width, width);
      this.pos.y = random(-height, height);
      this.prevZ = this.pos.z;
    }
  }


  show() {
    fill(this.color);
    noStroke();

    var fX = map(this.pos.x / this.pos.z, 0, 1, 0, width);
    var fY = map(this.pos.y / this.pos.z, 0, 1, 0, height);

    var size = map(this.pos.z, 0, width, 5, 0);
    ellipse(fX, fY, size, size);

    // add streak effect

    var prevX = map(this.pos.x / this.prevZ, 0, 1, 0, width);
    var prevY = map(this.pos.y / this.prevZ, 0, 1, 0, height);

    this.prevZ = this.pos.z+5*speed;

    let rsize = size/3
    stroke(this.color);
    triangle(prevX, prevY, fX+(fX>0?rsize:-rsize), fY+(fY<0?rsize:-rsize), fX+(fX<0?rsize:-rsize), fY+(fY>0?rsize:-rsize));
  }

}