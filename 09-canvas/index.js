const canvas = document.querySelector("#draw");

const ctx = canvas.getContext("2d");

// resize canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = "#BADA55"

// go back and look at alternatives for ctx.lineJoin
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 20;

let hue = 0;


let isDrawing = false;
// where to start line from?
let lastX = 0;
let lastY = 0;

function draw(e){
  if(!isDrawing) {return;}
  console.log(e);

  // set rainbow style;
  ctx.strokeStyle = `hsl(${hue},100%, 50%)`
  hue++;
  

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();

  [lastX, lastY] = [e.offsetX, e.offsetY];
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {[lastX, lastY] = [e.offsetX, e.offsetY]; isDrawing = true; draw(e)});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

