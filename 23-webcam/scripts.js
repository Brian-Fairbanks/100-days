const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const filters = document.querySelector('#filters');

// for filters
let shift = 200;

function getVideo(){
  navigator.mediaDevices.getUserMedia({video:true, audio:false})
    .then (localMediaStream => {
      console.log(localMediaStream);

      // Deprecated
      // // video must convert to a URL to work as a streaming source
      // let localURL = window.URL.createObjectURL(localMediaStream)
      // // and set our video as this new stream
      // video.src = localURL;

      video.srcObject = localMediaStream;
      video.play();
    })
    .catch(err => {
      console.log(err)
    });
}


function paintToCanvas(){
  const width = video.videoWidth;
  const height = video.videoHeight;

  console.log(width, height);

  canvas.width = width;
  canvas.height=height;

  strip.style.width = width+"px";

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let applyFilter = filters.value;

    if(applyFilter !== 'None'){
       // apply effects
      let pixles = ctx.getImageData(0,0,width,height);

      if(applyFilter === "red") pixles = redEffect(pixles);
      if(applyFilter === "RGB Split") pixles = rgbSplit(pixles);

      ctx.putImageData(pixles, 0, 0);
    }
  },16);
}


function takePhoto(){
  // play sound to indicate picture taken
  snap.currentTime = 0;
  snap.play();

  const name = Date.now();
  // take data out of canvas - create a picture
  const photo = canvas.toDataURL('image/jpeg');
  const photoLink = document.createElement('a');
  photoLink.href = photo;
  photoLink.setAttribute('download', name);
  photoLink.innerHTML = `<img src=${photo} alt=${name}>`;
  strip.appendChild(photoLink);
}


function redEffect(pixles){
  for(let i=0; i<pixles.data.length; i+=4){
    // pixles[i] = // red
    // pixles[i+1] // green
    // pixles[i+2] // blue
    // pixles[i+3] // alpha

    pixles.data[i+0]+=100;
    pixles.data[i+1]-=50;
    pixles.data[i+2]*=.5;
  }
  return pixles;
}

function rgbSplit(pixles){
  for(let i=0; i<pixles.data.length; i+=4){
    pixles.data[i-(4*shift)]=pixles.data[i+0]; // red shift right
    pixles.data[i+(4*shift)+2]=pixles.data[i+1]; // green shift right
    // pixles.data[i+(4*shift)]=pixles.data[i+0]; // green left
  }
  return pixles;
}


getVideo();
video.addEventListener('canplay', paintToCanvas);