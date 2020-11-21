const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var base, stone, boyImg, sling, tree, treeImg, mango1, mango2, mango3, mango4, mango5;

function preload() {
    boyImg = loadImage("img/boy.png");
    treeImg = loadImage("img/tree.png");
}
function setup() {
    createCanvas(1300, 600);


    engine = Engine.create();
    world = engine.world;

    //Create the Bodies Here.
    base = new Base(650, 580, 1300, 10);
    tree = new Tree(1100, 480, 100, 200);
    stone = new Stone(133, 450, 30);

    mango1 = new Mango(1100, 100, 50);
    mango2 = new Mango(1200, 200, 50);
    mango3 = new Mango(1050, 250, 50);
    mango4 = new Mango(1000, 200, 50);
    mango5 = new Mango(1100, 200, 50);

    sling = new Sling(stone.body, {
        x: 133,
        y: 455
    })

    Engine.run(engine);
}


function draw() {
    rectMode(CENTER);
    background("#ccc");
    base.display();
    image(boyImg, 100, 390, 200, 250);
    image(treeImg, 900, 35, 400, 550);
    // tree.display();
    mango1.display();
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    sling.display();
    stone.display();

    detectCollision(stone, mango1);
    detectCollision(stone, mango2);
    detectCollision(stone, mango3);
    detectCollision(stone, mango4);
    detectCollision(stone, mango5);

    fill("#777");
    textSize(20);
    text("Press Space To Get A Second Chance To Play!!", 50, 50);
}
function mouseDragged() {
    Matter.Body.setPosition(stone.body, {
        'x': mouseX,
        'y': mouseY
    });
}
function mouseReleased() {
    sling.fly();
}
function detectCollision(istone, imango) {
    mpos = imango.body.position;
    spos = istone.body.position;
    var distance = dist(spos.x, spos.y, mpos.x, mpos.y);
    if (distance <= imango.radius + istone.radius) {
        Matter.Body.setStatic(imango.body, false);
    }
}
function keyPressed() {
    if (keyCode === 32) {
        Matter.Body.setPosition(stone.body, {
            x: 133,
            y: 450
        })
        sling.attach(stone.body);
    }
}
