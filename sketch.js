
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,box1,box2,box3,paper



function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;

	
	
	ground = new Ground(width/2, 650, width, 10 );
	box1  = new Dustbin(640,633,80,20)
	box2 = new Dustbin(590,605,20,80)
    box3 = new Dustbin(690,605,20,80)
	paper = new Paper(100,605,70)
	 
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  drawSprites();
  Engine.update(engine);
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  paper.display()
}       

function keyPressed(){
	if(keyCode===UP_ARROW){
       Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35})
	}
}
