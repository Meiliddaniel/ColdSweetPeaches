var canNumber = 0

function preload(){
  body = loadFont('font/NotoSan.ttf');
  note = loadFont('font/Zeyada.ttf');
  table = loadImage('img/Table.png');
  peach = loadImage('img/Peach2.png');
  can = loadImage ('img/Can.png');
}

function setup() {
  createCanvas(500, 400);
  imageMode(CENTER);
  background(320);
  image(table,width/2,height/2,width,height);
}


function draw() {
  textFont(body)
  text("Well atleast my throat is cool", width/20, height/20);

  textFont(note);
  text("(Click)", width/20, height/5);

}


function mousePressed(){
  image(can, mouseX, mouseY, 40, 55);
  canNumber = canNumber + 1;
    
  if(canNumber > 4){
      textFont(body);
      text("and my stomach follows suit.", width/1.5,height/1.05);
  }
}

