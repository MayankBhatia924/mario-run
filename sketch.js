var mario;
var platformGroup, obstacleGroup;
var marioAnimation, obstacleAnimation, wallAnimation, groundAnimation;
var flag;
var LOSE=0;
var PLAY=1;
var WIN=2;
var gameState=PLAY;
function preload()
{
  marioAnimation=loadAnimation("images/Capture1.png","images/Capture4.png","images/Capture3.png");
  obstacleAnimation=loadAnimation("images/obstacle1.png");
  wallAnimation=loadAnimation("images/wall.png");
  groundAnimation=loadAnimation("images/ground.png");  
  flagAnimation=loadAnimation("images/Flag.png");
}

function setup() {
  
  createCanvas(displayWidth,668);
  var countDistanceX = 0;
  var platform;
  var gap;
  
  
  mario = new Player();

  platformGroup= createGroup();
  obstacleGroup=createGroup();
  
  for (var i=0;i<26;i++)
	 {
     frameRate(30);
      platform = new Platform(countDistanceX);
      platformGroup.add(platform.spt);
      gap=random([0,0,0,0,200]);
      countDistanceX = countDistanceX + platform.spt.width + gap; 
      
      if(i%3===0)
      {
      wall=new Wall(countDistanceX);
      platformGroup.add(wall.spt);
      }
     
      if(i%4==0)
      {
      obstacle=new Obstacle(countDistanceX);
      obstacleGroup.add(obstacle.spt);
      }
  }
  flag=createSprite(countDistanceX-150,height-320);
  flag.addAnimation("flagimg",flagAnimation);
  flag.scale=0.09;
  flag.setCollider("rectangle",0,0,1100,6520);
}

function draw() {
  background('skyblue');
  
  translate(  -mario.spt.x + width/2 , 0);
  if(gameState==PLAY)
  {  
          
        mario.applyGravity();
        mario.spt.collide(platformGroup);
        platformGroup.add(wall.spt)
       
        if (keyDown("left"))  
        { 
          mario.moveLeft();
        }
        if (keyDown("right")) 
        { 
          mario.moveRight();
        }
        if (keyDown("up") && mario.spt.velocityY===0) 
        {
          mario.jump();
        }
        
if(obstacleGroup.isTouching(mario.spt)||mario.spt.y>height){
   gameState=LOSE; 
}
if(flag.isTouching(mario.spt)){
gameState=WIN;
}
   }

  if(gameState==LOSE){  
obstacleGroup.destroyEach();
mario.spt.velocityY=0;
mario.spt.velocitX=0;
mario.spt.pause();
fill("red");
textSize(40);
text("GAME OVER",mario.spt.x,300);
if(keydown(space)){
  gameState=PLAY;
}
    }

  if(gameState==WIN){
    obstacleGroup.destroyEach();
    mario.spt.velocityY=0;
    mario.spt.velocitX=0;
    mario.spt.pause();
    fill("green");
    textSize(40);
    text("YOU WIN",mario.spt.x,300);
    if(keydown(space)){
      gameState=PLAY;
    }
   }
  

   drawSprites();
}



