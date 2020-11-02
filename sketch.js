
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,dustbin;
var rect1,rect2,rect3;


function setup() {
	createCanvas(800, 600);
	engine = Engine.create();
	world = engine.world;

	paperball= new paper(100,200,70);
	dustbin= new DUSTBIN(500,height-35);
	Ground= new ground(400,height,800,20);

	rect1=createSprite(500,height-33,190,20);
	rect1.shapeColor=("white");
	rect2=createSprite(410,500,20,138);
	rect2.shapeColor=("white");
	rect3=createSprite(590,500,20,138);
	rect3.shapeColor=("white");

	Engine.run(engine);
  
}


function draw() {
	

  rectMode(CENTER);

  background("pink");
  
  paperball.display();
  dustbin.display();
  Ground.display();

  jump();
  drawSprites();
 
}

function jump(){

  if (keyCode === UP_ARROW){

   Matter.Body.applyForce(paperball.body,paperball.body.position,{x:35,y:-25});
   
   paperball.velocityY=paperball.velocityY+0.8;
   } 
  

}

