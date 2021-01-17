var movingRect, fixRect;
var m5,f5; 

function setup() {
  createCanvas(1200,800);
  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor="green"
  movingRect.debug=true;

  fixRect=createSprite(200, 200, 50, 80);
  fixRect.shapeColor="green"
  fixRect.debug=true;

  m5=createSprite(1000, 800, 80, 30);
  m5.shapeColor="cyan"
  m5.debug=true;

  f5=createSprite(1000, 100, 50, 90);
  f5.shapeColor="cyan"
  f5.debug=true;

  m5.velocityY=-5;
  f5.velocityY=5

}

function draw() {
  background(0); 
  
  movingRect.x= World.mouseX;
  movingRect.y= World.mouseY;

if(movingRect.x-fixRect.x<fixRect.width/2+movingRect.width/2
  && fixRect.x-movingRect.x<fixRect.width/2+movingRect.width/2
  && movingRect.y-fixRect.y<fixRect.height/2+movingRect.height/2
  && fixRect.y-movingRect.y<fixRect.height/2+movingRect.height/2){

  movingRect.shapeColor="red";
  fixRect.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  fixRect.shapeColor="green";
}

if(m5.x-f5.x<m5.width/2+f5.width/2
  &&f5.x-m5.x<m5.width/2+f5.width/2){
    m5.velocityX= m5.velocityX*(-1);
    f5.velocityX= f5.velocityX*(-1);
  }

  if(m5.y-f5.y<m5.height/2+f5.height/2
    &&f5.y-m5.y<m5.height/2+f5.height/2){
      m5.velocityY= m5.velocityY*(-1);
      f5.velocityY= f5.velocityY*(-1);
    }

  drawSprites();
}