var gameState = 0;
var playerCount = 0;
var database;
var form;
var player;
var game;

function setup(){
    createCanvas(600, 800)

    database = firebase.database();

    game = new Game()
    game.getState();
    game.start();
    
}

function draw(){
    
}
