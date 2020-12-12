// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

// resize canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// go back and look at alternatives for ctx.lineJoin
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
// ctx.lineWidth = 20;

let hue = 0;


// controls
document.addEventListener("keydown", (e)=>{
  console.log(e);

  if(e.code === "KeyW"){leftPlayer.move("up");}
  if(e.code === "KeyS"){leftPlayer.move("down");}
});


class Ball{
  constructor(X, Y, color="#000000"){
    this.position = {X:X,Y:Y};
    this.color = color;
    this.size = 5;
    this.speed = {X:2, Y:2};
  }

  draw(){
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.position.X, this.position.Y, this.size, this.size);
    ctx.stroke();
  }

  update(){
    this.position.X+=this.speed.X;
    this.position.Y+=this.speed.Y;

    //bounce off top/bottom
    if(this.position.Y < 0 || (this.position.Y > canvas.height-this.size)){
      console.log("Out of range!");
      this.speed.Y = -this.speed.Y;
    }

    // bounce off paddle
    if (leftPlayer.collide(this) || rightPlayer.collide(this)){
      this.speed.X = -this.speed.X;
    }

  }

}

class Player{
  constructor(X, color="#BADA55"){
    this.position = {X, Y:canvas.height/2};
    this.height = 100;
    this.width = 20;
    this.color = color;
    this.speed = 10;
  }
  
  draw(){
    ctx.strokeStyle = this.color;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.fillRect(this.position.X, this.position.Y, this.width, this.height);
    ctx.stroke();
  }


  move(direction){
    console.log("moving: ",this.position)
    if(direction === "up" && this.position.Y > 0){
      this.position.Y-=this.speed;
    }

    if(direction === "down" && this.position.Y < canvas.height - this.height){
      this.position.Y+=this.speed;
    }
  }

  collide(ball){
    if((ball.position.X > this.position.X && ball.position.X < this.position.X+this.width) || ball.position.X+ball.size > this.position.X && ball.position.X+ball.size < this.position.X+this.width){
      if (ball.position.Y > this.position.Y && ball.position.Y < this.position.Y+this.height)
        return true;
    }
    return false;
  }
}




// paddle innitial setup
const leftPlayer = new Player(20);
const rightPlayer = new Player(canvas.width-40, "#ff3333");

let ball = new Ball(50,50,"#000000");




function draw(){
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  leftPlayer.draw();
  rightPlayer.draw();
  ball.draw();
}

function update(){
  ball.update();
  draw();
}


let gameTime = setInterval(update, 10)