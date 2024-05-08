var imageState = 0;
var textState= 0;

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
  image(fanOff,width/1.2,height/2,width,height);
  textFont(body);
  
   if(imageState ==1){
    image(fanOn,width/1.2,height/2,width,height);
   }
  
  text("And a little old electric fan \n wishing we were still in May", width/4 ,height/2);

  textFont(note);
  text("(click)", width/1.1, height/1.1);
}
  

function mousePressed(){
  if (mouseX > 450 && mouseX < 470 + 100 &&
    mouseY > 330 && mouseY < 355); 
  {
    (textState = textState-3)
  
    if (imageState == 0){
      imageState = 1;
    } else {
      imageState = 0;
    }

  }
  print(imageState);
}

