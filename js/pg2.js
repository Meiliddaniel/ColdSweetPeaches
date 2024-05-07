var imageState = 0;

function preload(){
  body = loadFont('../font/NotoSan.ttf');
  note = loadFont('../font/Zeyada.ttf');
  Fork = loadImage('../img/Fork.png');
  OpenCan = loadImage('../img/OpenCan.png');
  ClosedCan = loadImage('../img/ClosedCan.png');
  FrontCan = loadImage('../img/FrontCan.png');

  
}

function setup() {
  createCanvas(500,400);
  imageMode(CENTER);
  textAlign(CENTER);
  background(220);
}

function draw() {
  background(300);
  textFont(note);
  text("(Click)", width/2, height/1.1);
  
  if(imageState ==1){
    image(OpenCan, width/2,height/2,150,300);
    textFont(body);
    let mappedText = map(mouseY,0,height,0,height*(295/500),true);
    // print(mouseY);
    fill(60, 133, 80);
    text("Cold sweet peaches from a can, \n on an August summer day", width/2.3, mappedText, 70);
    image(FrontCan,width/2,height/2+48,150,200);
  } else {
   image(ClosedCan,width/2,height/2+45,150,215);
  }
  
    image(Fork,mouseX,mouseY,70,90);
  
  
}

function mousePressed(){
  if (mouseX > width/2 - 50 && mouseX < width/2 + 100 &&
    mouseY > height/2 -50 && mouseY < height/2 + 100); 
  {
  
    if (imageState == 0){
      imageState = 1;
    } else {
      imageState = 0;
    }
  }
  print(imageState);
}


