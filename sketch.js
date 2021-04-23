const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world;

var ground, stage1, stage2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block11,block12,block13,block14,block15,block16,block17,block18,block19;
var polygon;
var rope;
var score = 0;
var gameState = "onSling";

function setup() {
    createCanvas(1600, 800);

	engine = Engine.create();
    world = engine.world;

    ground = new Ground(800,780,1600);
    stage1 = new Ground(800,550,300);
    stage2 = new Ground(1300,300,300);

    //stage1 
    //first row
    block1 = new Block(710, 505);
    block2 = new Block(755, 505);
    block3 = new Block(800, 505);
    block4 = new Block(845, 505);
    block5 = new Block(890, 505);

    //second row
    block6 = new Block(755, 440);
    block7 = new Block(800, 440);
    block8 = new Block(845, 440);

    //third row
    block9 = new Block(800, 375);
    
    //stage2
    //first row
    block11 = new Block(1210, 255);
    block12 = new Block(1255, 255);
    block13 = new Block(1300, 255);
    block14 = new Block(1345, 255);
    block15 = new Block(1390, 255);
    
    //second row
    block16 = new Block(1255, 190);
    block17 = new Block(1300, 190);
    block18 = new Block(1345, 190);
    
    //third row
    block19 = new Block(1300, 125);

    polygon = new Polygon(200, 400);

    rope = new Slingshot(polygon.body, {x: 200 , y: 400 });
    
    Engine.run(engine);
}

function draw() {
    background(128,128,128);

    fill("red");
    textSize(32);
    strokeWeight(3);
    stroke("blue");
    text("TOWER SIEGE",720,30);

    fill("black");
    textSize(25);
    strokeWeight(0);
    stroke("black");
    text("DESTROY THE TOWER WITH THE STONE TO WIN",540,60);
    text("PRESS SPACE TO RESTART",650,90);

    fill("green");
    textSize(23);
    strokeWeight(2);
    stroke("orange");
    text("SCORE: "+score, 1400, 50);

    ground.display();
    stage1.display();
    stage2.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();

    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();

    block16.display();
    block17.display();
    block18.display();

    block19.display();

    rope.display();
    polygon.display();
}

function mouseDragged() {
    if (gameState !== "launched"){
        Matter.Body.setPosition(polygon.body,{x: mouseX, y: mouseY});
    }
}

function mouseReleased() {
    rope.fly();
    gameState = "launched";
}

function keyPressed() {
    if(keyCode === 32  && gameState === "launched") {
        Matter.Body.setPosition(polygon.body, {x:200 , y:400 });
        rope.attach(polygon.body);
        gameState = "onsling";
    }
}
