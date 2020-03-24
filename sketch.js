const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground;

function setup(){
    var canvas = createCanvas(1450,750);
   engine = Engine.create();
    world = engine.world;

    box1 = new Box(1200,709,150,70);
    box3 = new Box(200,709,150,70);
    box2 = new Box(1200,709,75,520);
    box4 = new Box(300,709,75,520);
    box5 = new Box(1100,709,75,570);
    box6 = new Box(370,700,75,570);
    box7 = new Box(1030,709,75,600);
    box8 = new Box(453,709,75,600);
    box9 = new Box(526,709,75,500);
    box10 = new Box(960,709,75,500);
    box11 = new Box(599,709,110,370);
    box12 = new Box(887,709,110,370);
    box13 = new Box(734,709,100,690);
   ground = new Ground(775,710,1450,10);

}

function draw() {
  background("black");
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
   ground.display();
}