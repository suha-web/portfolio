let img;
let sound;
let project;
let fading = false;

function preload(){
  img = loadImage('IMG_2643.jpg');
  sound = loadSound("code.m4a");
  project = loadSound("video.m4a")

}

function setup() {
  createCanvas(400, 400);
  image(img, 0, 0, 400, 400);

  sound.loop();
  project.loop();
  
  project.setVolume(0);
}


function mousePressed(){
  userStartAudio()
  if (!fading) {
    fading = true;
    sound.setVolume(0,2);
    project.setVolume(1,2);
    
   setTimeout(() => {isfading = false}, 3000);
  }
}


