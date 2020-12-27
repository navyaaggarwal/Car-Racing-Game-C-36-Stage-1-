var canvas, database;
var gameState = 0;
var playerCount;
var form1, player1, game1;

function setup() {
  createCanvas(400,400);
  database = firebase.database();

  game1 = new game();
  game1.getState()
  game1.start();

}

function draw() {

}

