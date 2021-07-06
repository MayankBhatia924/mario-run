class Obstacle {
    constructor(posX) {
     
      this.rx = posX; 
      this.ry = height-random([220,420,620]);    
      this.spt=createSprite(this.rx, this.ry); 
      this.spt.shapeColor="green";
      this.spt.addAnimation("obstacle",obstacleAnimation);
      this.spt.scale=0.03;
      this.spt.velocityX=-2;
    }
  
}
  

