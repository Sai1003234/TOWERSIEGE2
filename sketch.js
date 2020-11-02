const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon, poly_img;

function preload()
{
	poly_img = loadImage("hexagon.png");
}

function setup() {
	createCanvas(1400, 600);

	engine = Engine.create();
	world = engine.world;
	//the ground
	ground = new Ground(width/2,height,width,30);
	//the stands
	stand1 = new Ground(800,500,300,10);
	stand2 = new Ground(1100,250,300,10);
	//the boxes
	b1 = new Box(800,470,50,50,"darkblue");	
	b2 = new Box(750,470,50,50,"darkblue");
	b3 = new Box(700,470,50,50,"darkblue");
	b4 = new Box(850,470,50,50,"darkblue");
	b5 = new Box(900,470,50,50,"darkblue");
	
	b6 = new Box(800,420,50,50,"blue");
	b7 = new Box(850,420,50,50,"blue");
	b8 = new Box(750,420,50,50,"blue");

	b9 = new Box(800,370,50,50,"skyblue");

	b10 = new Box(1100,220,50,50,"darkred");
	b11 = new Box(1050,220,50,50,"darkred");
	b12 = new Box(1000,220,50,50,"darkred");
	b13 = new Box(1150,220,50,50,"darkred");
	b14 = new Box(1200,220,50,50,"darkred");

	b15 = new Box(1100,170,50,50,"red");
	b16 = new Box(1050,170,50,50,"red");
	b17 = new Box(1150,170,50,50,"red");

	b18 = new Box(1100,120,50,50,"orange");
	polygon = Bodies.circle(200,200,20,{density: 10});
	World.add(world, polygon);
	//the sling
	sling = new SlingShot(polygon, {x:200, y:200});

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(100);
  ground.display();
  stand1.display();
  stand2.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();

  sling.display();
  imageMode(CENTER);
  image(poly_img, polygon.position.x,polygon.position.y,40,40);
}
function mouseDragged(){
	Matter.Body.setPosition(polygon, {x:mouseX, y:mouseY});
}
function mouseReleased(){
	sling.fly();
}
function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon, {x:200,y:200});
		sling.attach(polygon);
	}
}


