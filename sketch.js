const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var sun, sunRadius, uranus, neptune, mars, venus, earth, mercury, saturn, saturnRing, jupiter;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    var options ={
        isStatic: true
    }
    
    sunRadius = 30

    sun = Bodies.circle(400, 200, sunRadius, options);
    World.add(world, sun);
    mercury = Bodies.circle(450, 180, 7, options);
    World.add(world, mercury);
    earth = Bodies.circle(520, 150, 16, options);
    World.add(world, earth);
    jupiter = Bodies.circle(620, 130, 25, options);
    World.add(world, jupiter);
    uranus = Bodies.circle(670, 180, 15, options);
    World.add(world, uranus);

    venus = Bodies.circle(320, 220, 10, options);
    World.add(world, venus);
    mars = Bodies.circle(280, 250, 8, options);
    World.add(world, mars);
    saturn = Bodies.circle(240, 270, 10, options);
    World.add(world, saturn);
    saturnRing = Bodies.circle(saturn.position.x, saturn.position.y, 12, options);
    World.add(world, saturnRing);
    neptune = Bodies.circle(200, 290, 12, options);
    World.add(world, neptune);
    //console.log(ground);

}

function draw(){
    background(0);
    Engine.update(engine);
    sunRadius = sunRadius + 1;
    rectMode(CENTER);
    ellipseMode(RADIUS);

    fill("orange")
    ellipse(mercury.position.x, mercury.position.y,7, 7);

    fill(0, 125, 125)
    ellipse(earth.position.x, earth.position.y,16, 16);

    fill("brown")
    ellipse(jupiter.position.x, jupiter.position.y,25, 25);

    fill("blue")
    ellipse(uranus.position.x, uranus.position.y,15, 15);

    fill(181,101,29);
    ellipse(venus.position.x, venus.position.y,10, 10);

    fill("red");
    ellipse(mars.position.x, mars.position.y,8, 8);

    fill("yellow");
    ellipse(saturn.position.x, saturn.position.y,12, 12);
    ellipse(saturn.position.x, saturn.position.y,10, 10);

    fill("blue");
    ellipse(neptune.position.x, neptune.position.y,12, 12);

    fill("yellow")
    ellipse(sun.position.x, sun.position.y,sunRadius,sunRadius); 
}