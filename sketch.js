var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var players,player1,player2;


var track,player1Img,player2Img;
var finish;

function preload()
{
	player1Img=loadAnimation("images/boy1p.png","images/boy2p.png","images/boy3p.png","images/boy4.png","images/boy5.png","images/boy6.png","images/boy7.png","images/boy8.png");
	track=loadImage("images/track.jpg"); 
	finish=loadImage("images/finish1.png")
	player2Img=loadAnimation("images/run1.png","images/run2.png","images/run3.png","images/run4.png","images/run5.png","images/run6.png","images/run7.png","images/run8.png");
}

function setup() {
	
	canvas = createCanvas(displayWidth - 20, displayHeight-30);
	database = firebase.database();
	game = new Game();
	game.getState();
	game.start();
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  if(playerCount === 2){
	game.update(1);
  }
  if(gameState === 1){
	clear();
	game.play();
  }
  if(gameState===2){
	  game.end();
  }

  
  drawSprites();
 
}



