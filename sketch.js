//TREX GAME using JS

//Declare variables for game objects and behaviour indicators(FLAGS)
var trex, trexRun, trexDead;
var ground, groundIMG, invGround;
var cloud, cloudIMG, cloudsGroup;
var cactus, cactiGroup, cactus1, cactus2, cactus3, cactus4, cactus5, cactus6;
var gameOver, resetButton, resetIconImg, gameOverImg;
var score, hiScore, displayHS;
var PLAY, END, gameState;
var jumpSound, dieSound, checkPointSound;

//Create Media library and load to use it during the course of the software
//executed only once at the start of the program
function preload() {
  trexRun = loadAnimation(
    "./assets/trex1.png",
    "./assets/trex2.png",
    "./assets/trex3.png"
  );
  trexDead = loadImage("./assets/trex_collided.png");

  groundIMG = loadImage("./assets/ground2.png");

  cloudIMG = loadImage("./assets/cloud.png");

  cactus1 = loadImage("./assets/obstacle1.png");
  cactus2 = loadImage("./assets/obstacle2.png");
  cactus3 = loadImage("./assets/obstacle3.png");
  cactus4 = loadImage("./assets/obstacle4.png");
  cactus5 = loadImage("./assets/obstacle5.png");
  cactus6 = loadImage("./assets/obstacle6.png");

  resetIconImg = loadImage("./assets/restart.png");
  gameOverImg = loadImage("./assets/gameOver.png");

  // jumpSound = loadSound("jump.mp3");
  // dieSound = loadSound("die.mp3");
  // checkPointSound = loadSound("checkPoint.mp3");
}

//define the intial environment of the software(before it is used)
//by defining the declared variables with default values
//executed only once at the start of the program
function setup() {
  createCanvas(600, 300);

  //create a trex sprite
  trex = createSprite(50, 230, 20, 50);
  trex.addAnimation("trexRun", trexRun);
  trex.addAnimation("trexDead", trexDead);
  trex.scale = 0.65;
  //collider is a area around each sprite 
  //this collider identifies if the sprite is interacting with other sprites
  //its invisible
  //to make visible following instruction is used
  trex.debug = true;

  //creating the ground sprite
  ground = createSprite(width / 2, height - 50, 600, 4);
  //sprite.addImage("label/nickname", variable in which you loaded image file)
  ground.addImage("groundIMG", groundIMG);

  //creating the invisible ground sprite
  invGround = createSprite(50, height - 35, 200, 4);
  invGround.visible = false;

  //variables for score, highscore values
  score = 0;
  hiScore = 0;
  //indicator to check if highscore should be displayed or not
  displayHS = false;

  //default value of Gamestate
  PLAY = 1;
  END = 0;
  gameState = PLAY;

  cactiGroup = createGroup();
  cloudsGroup = createGroup();

  resetButton = createSprite(width / 2, height / 2 + 50, 30, 30);
  resetButton.addImage("resetIconImg", resetIconImg);
  resetButton.scale = 0.5;
  //because restart icon should be visible only for gamestate=END
  //and by default gaemstate=PLAY, thats why we will keep restart icon invisible
  resetButton.visible = false;

  gameOver = createSprite(width / 2, height / 2, 70, 10);
  gameOver.addImage("gameOverImg", gameOverImg);
  gameOver.scale = 0.9;
  //because gameOver should be visible only for gamestate=END
  //and by default gaemstate=PLAY, thats why we will keep restart icon invisible
  gameOver.visible = false;
}

//All modifications, changes, conditions, manipulations, actions during the course of the program are written inside function draw.
//All commands to be executed and checked continously or applied throughout the program are written inside function draw.
//function draw is executed for every frame created since the start of the program.
//if the frame rate = 30 frames  per second
//then the function draw will repeat itself 30 times per second
function draw() {
  background("#faf796");

  // game behaviour when the gameState = PLAY = 1
  if (gameState == PLAY) {
    //trex behaviour
    if ((touches.length == 1 || keyDown("space")) && trex.y > height - 100) {
      trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.5;

    //ground behaviour
    ground.velocityX = -3;
    if (ground.x < 0) {
      ground.x = ground.width / 2;
    }

    //funcition call to create and move clouds.
    spawnClouds();
    //function call to create and move obstacles.
    spawnObstacles();

    //check if trex is hitting or has hit any cactus object
    if (trex.isTouching(cactiGroup)) {
      gameState = END;
      //dieSound.play();
    }
  }

  // game behaviour when the gameState = END = 0
  else if (gameState == END) {
    //displaying hiScore
    text("HISCORE: " + hiScore, 850, 50);

    //caculating highScore
    if (score > hiScore) {
      hiScore = score;
    }

    trex.changeAnimation("trexDead", trexDead);
    trex.velocityY = 0;
    ground.velocityX = 0;

    cloudsGroup.setVelocityXEach(0);
    cloudsGroup.setLifetimeEach(-1);

    cactiGroup.setVelocityXEach(0);
    cactiGroup.setLifetimeEach(-1);

    //making reset button and gamestart visible
    resetButton.visible = true;
    gameOver.visible = true;

    if (mousePressedOver(resetButton)) {
      //changing gamestate to PLY
      gameState = PLAY;

      //change trex animation back to running
      trex.changeAnimation("trexRun", trexRun);

      //make resetButton and gameover invisible
      resetButton.visible = false;
      gameOver.visible = false;

      //reset score value
      score = 0;
      //destroy cloud and cacti which were stopped
      cloudsGroup.destroyEach();
      cactiGroup.destroyEach();

      //make the flag to display high score to true
      displayHS = true;
    }
  }

  //display score
  stroke("white");
  strokeWeight(5);
  textSize(20);
  fill("purple");
  text("SCORE: " + score, 850, 20);

  //trex will collide invGround so it does not fall off
  trex.collide(invGround);

  drawSprites();
}

//function definition to create and move clouds
function spawnClouds() {
  if (frameCount % 30 == 0) {
    //framecount should be divisible by 30
    //this condition will be true for framecount = 0, 30, 60, 90, 120, 150, ......
    //   % this is known as mod division or modulus
    // 50 / 5 = 10 -- this division gives QUOTIENT as the answer
    // 50 % 5 = 0  -- this MOD division gives REMAINDER as the answer#

    //create cloud objects after every 30 frames
    //to attain this we have to divide the framecount by 30 and check if the remainder is equal to zero
    //if framecount is divisible by given number then a cloud object will be created

    //create and define a cloud sprite object in declare variable
    cloud = createSprite(width, height - 200, 10, 10);

    //velocity of cloud which makes it move from right to left
    cloud.velocityX = -4;

    //random is a function used to egnerate any number between given range.
    cloud.y = random(height - 275, height - 200);

    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    cloud.debug = false;

    cloud.addImage("cloudIMG", cloudIMG);
    cloud.scale = 0.5;

    //generating lifetime to solve the problem of memory overload
    //by dividing the distance to be crossed by the object with the speed of the object.
    //here width = width of canvas(600) and speed is velocity of cloud(-4)
    //as velocity is negative, we need to make the lifetime as positive by muliplying the answer with -1;
    // time = distance / speed
    cloud.lifetime = -1 * (width / cloud.velocityX);

    //Adding each cloud objecct to Group
    //1. to manage and track all cloud objects
    //2. because it it mot possible to modify or control any individual cloud object
    cloudsGroup.add(cloud);
  }
}

//function definition to create and move obstacles
function spawnObstacles() {
  //create cactus objects after every 60 frames
  //to attain this we have to divide the framecount by 60 and check if the remainder is equal to zero
  //if framecount is divisible by given number then a cactus object will be created
  if (frameCount % 60 == 0) {
    //create and define a cactus sprite object in declare variable
    cactus = createSprite(width, height - 70, 20, 50);

    //velocity of cactus which makes it move from left to right
    cactus.velocityX = -(7 + score / 120);
    cactus.debug = false;

    //generating lifetime to solve the problem of memory leak
    //by dividing the distance to be crossed by the object with the speed of the object.
    //here width = width of canvas(400) and speed is velocity of cactus(-6)
    //as velocity is negative, we need to make the lifetime as positive by muliplying the answer with -1;
    cactus.lifetime = -1 * (width / cactus.velocityX);


    cactus.debug = true;


    //random is a function used to generate any number between given range.
    // random(1, 100000) = 45634.778, 2650.234, 476.34543, 1.76, 8.9......

    //Math.round function is used to round off and convert any decimal number to its nearest whole integer.
    //  MAth.round(45634.778) = 45635   MAth.round(45634.478) = 45634

    //random(1, 6) = 4.673, 3.54756, 2.45675, 1.7687896, 5.765523......
    //we want values between 1, 2, 3, 4, 5, 6 ...
    //MAth.round( random(1, 6) ) = 5, 4, 2 ,2, 6, 4, 2, 5, 6......

    //generate a random number between 1 to 6 and save it in variable caseNumber.
    var caseNumber = Math.round(random(1, 6));
    console.log(caseNumber);

    //caseNumber = abc
    //switch case passes a single variable to match with cases
    switch (caseNumber) {
      case 1:
        cactus.addImage("cactus1", cactus1);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.9;
        break;
      case 2:
        cactus.addImage("cactus2", cactus2);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.9;
        break;
      case 3:
        cactus.addImage("cactus3", cactus3);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.85;
        break;
      case 4:
        cactus.addImage("cactus4", cactus4);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.75;
        break;
      case 5:
        cactus.addImage("cactus5", cactus5);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.7;
        break;
      case 6:
        cactus.addImage("cactus6", cactus6);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.7;
        break;
      default:
        cactus.addImage("cactus1", cactus1);
        //adjust the size of animation for cactus sprite by keeping the width and height ratio stable
        cactus.scale = 0.9;
        break;
    }
    //Adding each cactus to Group
    //1. to detect collisons between trex and the group
    //2. to manage and track all cactus
    //3. because it it not possible to modify or control any individual cactus

    //Group.add(sprite)
    cactiGroup.add(cactus);
  }
}

//function to reset score and startOver the game
function startOver() {
  gameState = PLAY;

  cloudsGroup.destroyEach();
  cactiGroup.destroyEach();

  displayHS = true;
  trex.changeAnimation("trexRun", trexRun);
  if (hiScore < score) {
    hiScore = score;
  }
  score = 0;
}
