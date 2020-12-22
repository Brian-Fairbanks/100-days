
let a = 0;
var sponge = [];
let frameRate;

function setup(){
  createCanvas(windowWidth, windowHeight, WEBGL)
  // set up material colored by angle
  // normalMaterial();

  var b = new Box(0, 0, 0, 255);
  sponge.push(b);

}

function draw(){
  background(0);




  normalMaterial();
  // rotate on all axis at different speeds, with the rotation amount based on framerate
  frameRate = parseFloat(getFrameRate());
  let rot = 0.3/frameRate;
  a += Math.min(rot, 10)

  rotateX(a);
  rotateY(a*.2);
  rotateZ(a*.4);

  // Display the sponge
  for (var i = 0; i < sponge.length; i++) {
    sponge[i].show();
  }
}

function mousePressed(e) {
  // Generate the next set of boxes
  if(frameRate < 2) return;
  var next = [];
  for (var i = 0; i < sponge.length; i++) {
    var b = sponge[i];
    var newBoxes = b.generate();
    next = next.concat(newBoxes);
  }
  sponge = next;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}