var ball, ballImg, sceneImg, brick1, bricks, brick1Img, paddle;
var score = 0;
var life = 3;
var edges, tap;

var PLAY = 1;
var END = 2;
var gameState = PLAY;

var brick2, brick3, brick4, brick5, brick6, brick7, brick8, brick9, brick10, brick11, brick12;
var gameOver, reset;
var gameOverImg, resetImg, BM;
var brick2Img;
var WIN, LOSE;

function preload() {
  sceneImg = loadImage("assets/scene.png");
  ballImg = loadImage("assets/ball.png");
  brick1Img = loadImage("assets/brick1.png");
  brick2Img = loadImage("assets/brick2.png");
  tap = loadSound("assets/tap.wav");
  gameOverImg = loadImage("assets/gameOver.png");
  resetImg = loadImage("assets/reset.png");

  BM = loadSound("assets/BGM.mp3");
  WIN = loadSound("assets/win.mp3");
  LOSE = loadSound("assets/gameOver.wav")
}


function setup() {
  createCanvas(windowWidth, windowHeight);


  BM.play();
  BM.setVolume(0.1);

  edges = createEdgeSprites();
  bricks = new Group();

  paddle = createSprite(width / 2, height - 50, 250, 10);
  paddle.shapeColor = "blue";

  ball = createSprite(width / 2, height / 2, 20, 20);
  ball.addImage(ballImg);
  ball.scale = 0.15;
  ball.setVelocity(5, 7);
  ball.setCollider("circle", 0, 0, 180);

  brick1 = createSprite(width / 2 - 400, height / 2 - 400, 20, 20);
  brick1.addImage(brick1Img);
  brick1.scale = 0.2;
  bricks.add(brick1);

  brick2 = createSprite(width / 2 - 250, height / 2 - 400, 20, 20);
  brick2.addImage(brick1Img);
  brick2.scale = 0.2;
  bricks.add(brick2);

  brick3 = createSprite(width / 2 - 100, height / 2 - 400, 20, 20);
  brick3.addImage(brick1Img);
  brick3.scale = 0.2;
  bricks.add(brick3);

  brick4 = createSprite(width / 2 + 50, height / 2 - 400, 20, 20);
  brick4.addImage(brick1Img);
  brick4.scale = 0.2;
  bricks.add(brick4);

  brick5 = createSprite(width / 2 + 200, height / 2 - 400, 20, 20);
  brick5.addImage(brick1Img);
  brick5.scale = 0.2;
  bricks.add(brick5);

  brick6 = createSprite(width / 2 + 350, height / 2 - 400, 20, 20);
  brick6.addImage(brick1Img);
  brick6.scale = 0.2;
  bricks.add(brick6);


  brick7 = createSprite(width / 2 - 400, height / 2 - 320, 20, 20);
  brick7.addImage(brick1Img);
  brick7.scale = 0.2;
  bricks.add(brick7);

  brick8 = createSprite(width / 2 - 250, height / 2 - 320, 20, 20);
  brick8.addImage(brick1Img);
  brick8.scale = 0.2;
  bricks.add(brick8);

  brick9 = createSprite(width / 2 - 100, height / 2 - 320, 20, 20);
  brick9.addImage(brick1Img);
  brick9.scale = 0.2;
  bricks.add(brick9);

  brick10 = createSprite(width / 2 + 50, height / 2 - 320, 20, 20);
  brick10.addImage(brick1Img);
  brick10.scale = 0.2;
  bricks.add(brick10);

  brick11 = createSprite(width / 2 + 200, height / 2 - 320, 20, 20);
  brick11.addImage(brick1Img);
  brick11.scale = 0.2;
  bricks.add(brick11);

  brick12 = createSprite(width / 2 + 350, height / 2 - 320, 20, 20);
  brick12.addImage(brick1Img);
  brick12.scale = 0.2;
  bricks.add(brick12);

  brick13 = createSprite(width / 2 - 400, height / 2 - 240, 20, 20);
  brick13.addImage(brick2Img);
  brick13.scale = 0.12;
  bricks.add(brick13);

  brick14 = createSprite(width / 2 - 250, height / 2 - 240, 20, 20);
  brick14.addImage(brick2Img);
  brick14.scale = 0.12;
  bricks.add(brick14);

  brick15 = createSprite(width / 2 - 100, height / 2 - 240, 20, 20);
  brick15.addImage(brick2Img);
  brick15.scale = 0.12;
  bricks.add(brick15);

  brick16 = createSprite(width / 2 + 50, height / 2 - 240, 20, 20);
  brick16.addImage(brick2Img);
  brick16.scale = 0.12;
  bricks.add(brick16);

  brick17 = createSprite(width / 2 + 200, height / 2 - 240, 20, 20);
  brick17.addImage(brick2Img);
  brick17.scale = 0.12;
  bricks.add(brick17);

  brick18 = createSprite(width / 2 + 350, height / 2 - 240, 20, 20);
  brick18.addImage(brick2Img);
  brick18.scale = 0.12;
  bricks.add(brick18);

  brick19 = createSprite(width / 2 - 400, height / 2 - 160, 20, 20);
  brick19.addImage(brick2Img);
  brick19.scale = 0.12;
  bricks.add(brick19);

  brick20 = createSprite(width / 2 - 250, height / 2 - 160, 20, 20);
  brick20.addImage(brick2Img);
  brick20.scale = 0.12;
  bricks.add(brick20);

  brick21 = createSprite(width / 2 - 100, height / 2 - 160, 20, 20);
  brick21.addImage(brick2Img);
  brick21.scale = 0.12;
  bricks.add(brick21);

  brick22 = createSprite(width / 2 + 50, height / 2 - 160, 20, 20);
  brick22.addImage(brick2Img);
  brick22.scale = 0.12;
  bricks.add(brick22);

  brick23 = createSprite(width / 2 + 200, height / 2 - 160, 20, 20);
  brick23.addImage(brick2Img);
  brick23.scale = 0.12;
  bricks.add(brick23);

  brick24 = createSprite(width / 2 + 350, height / 2 - 160, 20, 20);
  brick24.addImage(brick2Img);
  brick24.scale = 0.12;
  bricks.add(brick24);

  gameOver = createSprite(width / 2, height / 2 - 50, 20, 20);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.5;
  gameOver.visible = false;

  reset = createSprite(width / 2, height / 2 + 120, 20, 20);
  reset.addImage(resetImg);
  reset.visible = false;
}

function draw() {
  background(sceneImg);

  if (gameState === PLAY) {
    paddle.x = World.mouseX;

    if (paddle.x < 120) {
      paddle.x = 120;
    }

    if (paddle.x > 1796) {
      paddle.x = 1796;
    }

    if (ball.isTouching(brick1)) {
      brick1.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
      
    }
    if (ball.isTouching(brick2)) {
      brick2.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick3)) {
      brick3.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick4)) {
      brick4.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick5)) {
      brick5.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1
    }
    if (ball.isTouching(brick6)) {
      brick6.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick7)) {
      brick7.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick8)) {
      brick8.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick9)) {
      brick9.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick10)) {
      brick10.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick11)) {
      brick11.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }
    if (ball.isTouching(brick12)) {
      brick12.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick13)) {
      brick13.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick14)) {
      brick14.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick15)) {
      brick15.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick16)) {
      brick16.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick17)) {
      brick17.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick18)) {
      brick18.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick19)) {
      brick19.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick20)) {
      brick20.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick21)) {
      brick21.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick22)) {
      brick22.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick23)) {
      brick23.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.isTouching(brick24)) {
      brick24.destroy();
      tap.play();
      score += 10
      ball.velocityX = ball.velocityX + 0.1;
    }

    if (ball.y > height - 40) {
      life = life - 1;

      ball.x = width / 3;
      ball.y = height / 2;
    }

    if (life <= 0) {
      gameState = END;
    }

    ball.bounceOff(paddle);
    ball.bounceOff(edges);
  }

  if (score === 240) {
    swal({
      title: `YOU WON THE GAME`,
      text: `Your score is ${score} ${"\n"} You have ${life} lives / life left`,
      imageUrl: `https://img.freepik.com/premium-vector/realistic-golden-trophy-with-gold-laurel-wreath_48799-144.jpg?w=2000`,
      imageSize: `150x150`,
      confirmButtonText: `Play Again`
    }, (isConfirm) => {
      if (isConfirm) {
        location.reload();
      }
    })
  }

  if (gameState == END) {
    ball.setVelocity(0, 0);
    reset.visible = true;
    gameOver.visible = true

    if (mousePressedOver(reset)) {
      window.location.reload();
    }
  }

  textSize(40);
  fill("lime");
  text("Score: " + score, 40, 50);

  textSize(40);
  fill("lime");
  text("Lives: " + life, width / 2 + 750, 50);
  drawSprites();
}