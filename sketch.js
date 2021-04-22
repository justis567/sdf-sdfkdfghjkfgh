var background,backgroundImg,jo,joImg,ground,invisableGround,log,log2,log3,log4,log5;
var score;

function preload(){
  joImg=loadImage("jo.png")
  backgroundImg=loadImage("background.png")
  
 
}



function setup() {
  createCanvas(windowWidth,500);
  background = createSprite(0,0,300,300);
    background.addImage(backgroundImg)
  background.scale = 2.5

  jo=createSprite(100,300,50,height)
  jo.addImage(joImg)
  jo.scale=0.8
  log=createSprite(300,300,202,18)
  log2=createSprite(500,200,202,18)
log3=createSprite(700,400,202,18)
log4=createSprite(900,100,202,18)
log5=createSprite(1200,300,202,18)
  
   invisibleGround = createSprite(300,395,1000,35);
 invisibleGround.visible = false;
  
  
 score = 0
}


function draw() {
  text("Score: "+ score, 600,80)
  score = score + Math.round(frameCount/60);
  
  if(keyDown("left_arrow")) {
    jo.x=jo.x-10
  }
  if(keyDown("right_arrow")) {
    jo.x=jo.x+10
  } 
  if(keyDown("space")) {
     jo.y=jo.y-50
  }
    jo.velocityY = jo.velocityY + 0.9
 
 
         
  
  
  
  if(invisibleGround.x<0){
           invisibleGround.x = invisibleGround.width/2
}
    jo.collide(invisibleGround);
  jo.collide(log)
  jo.collide(log2)
  jo.collide(log3)
  jo.collide(log4)
  jo.collide(log5)
  

  

 
background.velocityX = -3
    if (background.x < 0){
      background.x = background.width/2;
        
    }
   
  
  drawSprites();
}
