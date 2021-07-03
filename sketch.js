var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var deerImg,cheetahImg;
var deer , cheetah1 , cheetah2 , cheetah
var form, player, game;
var deer ;
var bg2 ;
var audio = new Audio('bgSound.mp3');
  audio.play();

function preload(){
  bg = loadImage("bg.jpg")
  deerImg = loadAnimation("Deer frames/1.gif","Deer frames/2.gif","Deer frames/3.gif","Deer frames/4.gif","Deer frames/5.gif")
  cheetahImg = loadAnimation("Cheetah frames/1.png","Cheetah frames/2.png","Cheetah frames/3.png",
  "Cheetah frames/4.png","Cheetah frames/5.png","Cheetah frames/6.png","Cheetah frames/7.png",
  "Cheetah frames/8.png","Cheetah frames/9.png","Cheetah frames/10.png","Cheetah frames/11.png",
  "Cheetah frames/12.png","Cheetah frames/13.png","Cheetah frames/14.png","Cheetah frames/15.png")
  bg2 = loadImage("bg2.jpg")


  
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  background(bg)

  if (playerCount === 2){
    game.update (1)
  }
  if (gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end();
  }
}
