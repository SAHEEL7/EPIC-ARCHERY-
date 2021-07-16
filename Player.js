class Player {
    constructor(x, y, width, height, angle) {
      this.x = x;
      this.y = y;
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.angle = angle;

      World.add(world,this.body);
    }
  
      
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.width,this.height);
    
     pop();
    }
  