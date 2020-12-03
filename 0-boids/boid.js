class Boid{
  constructor(){
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
  }

  update(){
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration)
  }

  // guide the boid into alignment with nearby boid
  align(boids){
    let perceptionRadius = 50;
    let nearby = 0;
    let steer = createVector();

    // get average direction all boids within this boids perception( the steering velocity)
    for (let other of boids){
      let d = dist(this.position.x, this.position.y, other.position.x, other.position.y);
      if (other != this && d<perceptionRadius){
        steer.add(other.velocity);
        nearby++;
      }

    }

    if(nearby > 0){
      steer.div(nearby);
      // apply stearing formula to guide boid into flock
      steer.sub(this.velocity)
    }
    return steer;
  }

  flock(boids){
    let alignment = this.align(boids);
    this.acceleration = alignment;
  }

  show(){
    strokeWeight(8);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}