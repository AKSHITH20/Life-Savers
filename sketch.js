var compPaddle,playerPaddle, Ball;
var bottomEdge,topEdge;

function preload() {
  compPaddleimg=loadImage("Doctor.png");
  playerPaddleimg=loadImage("Boy.png");
}

function setup() {  
  createCanvas(800,800);
  compPaddle=createSprite(80, 400, 10, 100);
  compPaddle.addImage("Doc",compPaddleimg);
  compPaddle.scale = 0.3;
  //compPaddle.shapeColor = "cyan";
  playerPaddle=createSprite(720, 400, 10, 100);
  playerPaddle.addImage("Boc",playerPaddleimg);
  playerPaddle.scale=0.4;
  //playerPaddle.shapeColor = "cyan";
  Ball=createSprite(400, 400, 20, 20);
  Ball.shapeColor = "yellow";
  Ball.velocityX = 3;
  Ball.velocityY = 3;
  
  bottomEdge=createSprite(400,800,800,10);
  topEdge=createSprite(400,0,800,10);

  }

function draw() {
  background(255,128,mouseY); 
  createEdgeSprites();
  
  playerPaddle.y = World.mouseY;
  compPaddle.y = Ball.y;

  //fill("white");
  //for(var y=0; y>400; y=y+20){
  //line(this.position.x, this.position.y, this.position.x, this.position.y+10);
  //}

  Ball.bounceOff(bottomEdge);
  Ball.bounceOff(topEdge);
  Ball.bounceOff(playerPaddle);
  Ball.bounceOff(compPaddle); 

  if(Ball.x>800||Ball.x<0){
    compPaddle.x=80;
    compPaddle.y=400;
  }

  if(Ball.x>800||Ball.x<0){
    playerPaddle.x=720;
    playerPaddle.y=400;
  }

  if(Ball.x>800||Ball.x<0){
   textSize(25);
   fill("purple");
   stroke("black");
   textFont("Algerian") 
   text("Doctors Give Away Their Lives For Protecting Us",100,200);
   text("These Are The Least Amount Of Things",150,240);
   text(" We Can Do To Show Our Support To Them",150,280);
  }

  drawSprites();
}