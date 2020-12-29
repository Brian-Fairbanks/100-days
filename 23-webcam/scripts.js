const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

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
      console.log(error)
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
getVideo();


video.addEventListener('canplay', paintToCanvas);