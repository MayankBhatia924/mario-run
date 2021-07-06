



class Platform {
    constructor(posX) {
      this.rw = random(100, 500);
      this.rh = random([260,190,190,190,260,260,260,260,260,260,190,190]); 
      this.rx = posX; 
      this.ry = height;   
      
      this.spt=createSprite(this.rx, this.ry , this.rw, this.rh); 
      this.spt.shapeColor="green";
      this.spt.addAnimation("ground",groundAnimation);
    
    }
  
  
  }
  
  