const conformity = 0.2;
const perception = 50;
const speedy = 4;


class Boid{
  constructor(){
    this.position = createVector(random(width), random(height));
    this.velocity = p5.Vector.random2D();
    this.acceleration = createVector();
    this.maxForce = conformity;
    this.maxSpeed = speedy;
  }

  update(){
    this.position.add(this.velocity);
    this.velocity.add(this.acceleration)
  }

  // wraparound and prevent boids from going offscreen
  edges(){
    if (this.position.x > width){
      this.position.x = 0;
    }
    else if (this.position.x < 0){
      this.position.x = width;
    }

    if (this.position.y > height){
      this.position.y = 0;
    }
    else if (this.position.y < 0){
      this.position.y = height;
    }
  }

  // guide the boid into alignment with nearby boid
  align(boids){
    let perceptionRadius = perception;
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
      steer.setMag(this.maxSpeed);
      steer.sub(this.velocity)
      // limit the ability for a boid to instantly conform to the flock
      steer.limit(this.maxForce);
    }
    return steer;
  }

  flock(boids){
    this.edges();
    let alignment = this.align(boids);
    this.acceleration = alignment;
  }

  show(){
    strokeWeight(8);
    stroke(255);
    point(this.position.x, this.position.y);
  }
}