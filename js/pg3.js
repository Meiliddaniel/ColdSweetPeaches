let textMovement = 150;
let movementSpeed = -8;
let movementStarted = false;

var imageState = 0;

function preload(){
  title=loadFont('font/GreatVibes.ttf');
  body=loadFont('font/NotoSan.ttf');
  note=loadFont('font/Zeyada.ttf');
  fanOff=loadImage('img/FanOff.png');
  fanOn=loadImage('img/FanOn.gif');
}

function setup() {
  createCanvas(500, 400);
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(300);
  image(fanOff,width * (400/500),height/2,width,height);
  textFont(body);
  
   if(imageState ==1){
    image(fanOn,width * (400/500),height/2,width,height);
   }


  text("And a little old electric fan \n wishing we were still in May", textMovement ,height/2);

  textFont(note);
  text("(click)", width* (418/500), height/1.1);
}


function mousePressed(){
  if (mouseX > 450 && mouseX < 470 + 100 &&
    mouseY > 330 && mouseY < 355); 
  {
  
    if (imageState == 0){
      imageState = 1;
          moveStarted = true;
    startMovement();
      
    } else {
      imageState = 0;
    }
  
  }
}


function startMovement() {

  let interval = setInterval(function() {
    textMovement += movementSpeed;
    if (textMovement < -100) { 
      textMovement = 150;
      clearInterval(interval);
  }
  }, 50);
}
