var normalmanImg,normalmanleftImg,groudImg,normalmanstandingImg;
var JokerImg,Joker;
var bg1,bg2,bg3,bg4;
function preload(){
    normalmanImg = loadAnimation("images/Normal_Arthur(1).png","images/Normal_Arthur(2).png","images/Normal_Arthur(3).png","images/Normal_Arthur(4).png");
    normalmanleftImg = loadAnimation("images/Normal_Arthur_left(1).png","images/Normal_Arthur_left(2).png","images/Normal_Arthur_left(3).png","images/Normal_Arthur_left(4).png")
    normalmanstandingImg = loadAnimation("images/Normal_Arthur_standing.png");
    groundImg = loadImage("images/ground.png");

    bg1 = loadImage("images/bg(1).png")
    bg2 = loadImage("images/bg(2).png")
    bg3 = loadImage("images/bg(3).png")
    bg4 = loadImage("images/bg(4).png")
}

function setup(){
    createCanvas(displayWidth,displayHeight);
    ground = createSprite(displayWidth/2,displayHeight-50);
    ground.addImage(groundImg);
    ground.scale = 2.8;

    Joker = createSprite(displayWidth/2-700,displayHeight-170);
    Joker.addAnimation("standing",normalmanstandingImg);
    Joker.addAnimation("walking",normalmanImg);
    Joker.addAnimation("leftwalking",normalmanleftImg);
    Joker.scale = 1.5;

    timer = 55500;

    edge = createSprite(Joker.x-190,Joker.y-250,10,880)
    edge.visible = false;
}

function draw(){
    background(bg1)

    if(keyWentUp("right")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("right")){
        Joker.changeAnimation("walking",normalmanImg);
    }

    if(keyDown("right")){
        Joker.x = Joker.x+30;
        timer = timer-1;
    }
    console.log(timer);

    if(keyWentUp("left")){
        Joker.changeAnimation("standing",normalmanstandingImg);
    }

    if(keyWentDown("left")){
        Joker.changeAnimation("leftwalking",normalmanleftImg);
    }

    if(keyDown("left")){
        Joker.x = Joker.x-30;
    }

    camera.position.x = Joker.x+490;
    Joker.bounceOff(edge);

    drawSprites();
    image(groundImg,ground.x-1200,ground.y-50,1900,120);
}