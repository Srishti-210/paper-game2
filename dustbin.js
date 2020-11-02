class DUSTBIN {
    constructor(x,y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2
      }

     
      this.body = Bodies.rectangle(x,y, options);
      this.width=width;
      this.height=height;
      this.image=loadImage("dustbingreen.png");
      this.image.scale=0.12;
      World.add(world, this.body);
    }


    display(){

      
      var angle = this.body.angle;
     
     
      push();
      translate(this.body.position.x, this.body.position.y);
      
      imageMode(CENTER);
      fill("purple");
      image(this.image,500, 495, this.width/5,this.height/5);
      pop();
    }

  };