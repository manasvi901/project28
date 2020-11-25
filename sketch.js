
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boyImg,boy;

function preload()
{
    boyImg = loadImage("C:\Users\rapoo\Downloads\IMAGES PRO-28\Plucking mangoes\boy");	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	image(boyImg,150,400,50,50);
    
    stone = new Stone(200,410,50,50);

    mango1 = new Mango(370,400,20,20);
    mango2 = new Mango(400,430,20,20);
    mango3 = new Mango(430,460,20,20);
    mango4 = new Mango(460,400,20,20);
    mango5 = new Mango(370,430,20,20);
    mango6 = new Mango(400,460,20,20);
    mango7 = new Mango(430,400,20,20);

	Engine.run(engine);
  
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(stoneObj.body,{x:235, y:420})
        launcherObject.attatch(stoneObj.body);
    }
}

function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  strokeWeight(4);
  stone.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(stone, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    stone.fly();
}

function detectCollision(stone,mango){
mangoBodyPosition=mango.body.position
stoneBodyPosition=stone.body.position

var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=mango.r+stone.r){
    Matter.Body.setStatic(mango.body,false);
 }
}