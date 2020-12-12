// https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation

const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

// resize canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


// go back and look at alternatives for ctx.lineJoin
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let hue = 0;


// controls
document.addEventListener("keydown", (e)=>{
  console.log(e);

  if(e.code === "KeyW"){leftPlayer.move("up");}
  if(e.code === "KeyS"){leftPlayer.move("down");}
});




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
    ctx.beginPath();
    ctx.rect(this.position.X, this.position.Y, this.width, this.height);
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
}




// paddle innitial setup
const leftPlayer = new Player(20);
const rightPlayer = new Player(canvas.width-40, "#ff3333");




function draw(){
  // clear screen
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  leftPlayer.draw();
  rightPlayer.draw();
}

function update(){
  draw();
}


let gameTime = setInterval(update, 10)