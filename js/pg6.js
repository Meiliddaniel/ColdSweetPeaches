var imageState = 0;
var song;
var paragraphIsMade = false;

function preload(){
  title=loadFont('font/GreatVibes.ttf');
  body=loadFont('font/NotoSan.ttf');
  note=loadFont('font/Zeyada.ttf');
  radio1=loadImage('img/Radio1.png');
  radio2=loadImage('img/Radio2.png');
  song=loadSound('img/Peaches.mp3', loaded);
}
function loaded() {
  console.log("loaded");
}

function setup() {
  createCanvas(windowWidth/1.5,windowHeight/1.5);
  textAlign(CENTER);
  imageMode(CENTER);
}

function draw() {
  background(220);
  image(radio1,width/2,height/2,width,height * (460/400));
  
  if(imageState == 1){
    image(radio2,width/2,height/2,width,height * (460/400));
  }
  
   textFont(title);
  textSize(width * (15/500));
  text("Cold sweet peaches from a can, \n best remedy for summer's heat.", width/4, height/20);
  textFont(note);
  textSize(width * (10/500));
  text("(Press P)",width/2, height/5);
}


function keyPressed() {
  print(keyCode);
  if (keyCode == 80) {
    if (mouseX > 227 && mouseX < 2430 &&
    mouseY > 98 && mouseY < 114); 
  {
  
    if (imageState == 0){
      imageState = 1;
      if(!paragraphIsMade);
      createA('pg7.html','Next Line');
      //if (not) paragraphIsMade
    paragraphIsMade = true;
  } else {
      imageState = 0;
    }

  if (imageState == 1) {
    song.play();
    song.setVolume(0.3);
  } else {
    song.pause();

  }

}   
    
  }
}
