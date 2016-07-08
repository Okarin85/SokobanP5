var squareScale = 40;
var blocCollide = 0;


var carte = [
      			 0,0,0,0,0,0,0,0,0,0,
      			 0,1,1,1,2,2,2,1,1,0,
      			 0,1,4,2,2,2,2,1,1,0,
      		   0,1,1,1,2,2,4,1,1,0,
      			 0,1,4,1,1,2,2,1,1,0,
      			 0,1,2,1,2,4,2,1,1,0,
      			 0,1,2,1,2,2,2,1,1,0,
      			 0,1,2,2,4,2,2,4,1,0,
      			 0,1,2,2,2,4,2,2,1,0,
      			 0,0,0,0,0,0,0,0,0,0
      			];

function preload() {
  mySound = loadSound('tuturu.mp3');
}
      			
var grid = function(){
			
      this.show = function(){
        for(var x = 0; x < 10; x++){
          for(var y = 0; y < 10; y++){
            var bloc = y * 10 + x;
            if(carte[bloc] === 0){
              fill(0, 0, 0);
              rect(x * squareScale, y * squareScale, squareScale, squareScale);
            }
            else if(carte[bloc] === 1){
              fill(127, 127, 127);
              rect(x * squareScale, y * squareScale, squareScale, squareScale);
            }
            else if(carte[bloc] === 3){
              fill(67, 67, 67);
              rect(x * squareScale, y * squareScale, squareScale, squareScale);
            }
            else if(carte[bloc] === 4){
              fill(0, 127, 255);
              rect(x * squareScale, y * squareScale, squareScale, squareScale);
            }
            else{
              fill(255, 255, 255);
              rect(x * squareScale, y * squareScale, squareScale, squareScale);
            }
          }
        } 
      }

}

var gameboard = new grid();

var boxes = function(x, y){
  this.x = x;
  this.y = y;
  this.victory = 0;

  this.show = function(){
    fill(0, 0, 0);
    ellipse((this.x * squareScale) + (squareScale / 2),(this.y * squareScale) + (squareScale / 2), squareScale / 2, squareScale / 2);
  }

  this.move = function(dir){

  }


}
var boite = [
              new boxes(4, 2),
              new boxes(5, 3),
              new boxes(5, 4),
              new boxes(6, 7),
              new boxes(5, 7),
              new boxes(4, 7),
              new boxes(2, 7),
            ];


var player = function(){
  this.x = 3;
  this.y = 2;
  
  this.show = function(){
    fill(0, 255, 0);
      rect(this.x * squareScale, this.y * squareScale, squareScale, squareScale );
  }
  
}
  
var okarin = new player();

function keyPressed() {
  switch(keyCode){
    case RIGHT_ARROW:
      var collide = okarin.x + 1;
      blocCollide = okarin.y * 10 + collide;
      
      for(var i = 0; i < boite.length; i++){
          var boxecollide = boite[i].y *10 + boite[i].x;
          if(blocCollide === boxecollide){
            for(var j = 0; j < boite.length; j++){
              var ndboxecollide = boite[j].y *10 + boite[j].x;
              if(boxecollide + 1 === ndboxecollide){
                okarin.x--;
                boite[i].x--;
                break;
              }
            }
            if(carte[boxecollide + 1] === 1 || carte[boxecollide + 1] === 0){
              okarin.x--;
              break;
            }
          boite[i].x++;
          }
      }

      if(carte[blocCollide] === 0){
        break;
      }
      else if(carte[blocCollide] === 1){
        break;
      }
      

      else{
      okarin.x++;
      }
      break;
  

    case LEFT_ARROW:
      var collide = okarin.x - 1;
      blocCollide = okarin.y * 10 + collide;

      for(var i = 0; i < boite.length; i++){
          var boxecollide = boite[i].y *10 + boite[i].x;
          if(blocCollide === boxecollide){
            
              for(var j = 0; j < boite.length; j++){
              var ndboxecollide = boite[j].y *10 + boite[j].x;
              if(boxecollide - 1 === ndboxecollide){
                okarin.x++;
                boite[i].x++;
                break;
              }
            }
            
            if(carte[boxecollide - 1] === 1 || carte[boxecollide - 1] === 0){
              okarin.x++;
              break;
            }
          boite[i].x--;
          }
      }

      if(carte[blocCollide] === 0){
        break;
      }
      else if(carte[blocCollide] === 1){
        break;
      }
      else{
      okarin.x--;
      }
      break;


    case UP_ARROW:
      blocCollide = (okarin.y - 1) * 10 + okarin.x;

      for(var i = 0; i < boite.length; i++){
          var boxecollide = boite[i].y * 10 + boite[i].x;
          if(blocCollide === boxecollide){

              for(var j = 0; j < boite.length; j++){
              var ndboxecollide = boite[j].y *10 + boite[j].x;
              if(boxecollide - 10 === ndboxecollide){
                okarin.y++;
                boite[i].y++;
                break;
              }
            }

            if(carte[boxecollide - 10] === 1 || carte[boxecollide - 10] === 0){
              okarin.y++;
              break;
            }
          boite[i].y--;
          }
      }
      
      if(carte[blocCollide] === 0){
        break;
      }
      else if(carte[blocCollide] === 1){
        break;
      }
      else{
      okarin.y--;
      }
      break;


    case DOWN_ARROW:
      blocCollide = okarin.y * 10 + okarin.x + 10;

      for(var i = 0; i < boite.length; i++){
          var boxecollide = boite[i].y * 10 + boite[i].x;
          if(blocCollide === boxecollide){

              for(var j = 0; j < boite.length; j++){
              var ndboxecollide = boite[j].y *10 + boite[j].x;
              if(boxecollide + 10 === ndboxecollide){
                okarin.y--;
                boite[i].y--;
                break;
              }
            }

            if(carte[boxecollide + 10] === 1 || carte[boxecollide + 10] === 0){
              okarin.y--;
              break;
            }
          boite[i].y++;
          }
      }

      if(carte[blocCollide] === 0){
        break;
      }
      else if(carte[blocCollide] === 1){
        break;
      }
      else{
      okarin.y++;
      }
      break;

  }
  
}

var victory = function(){
  for(i = 0; i < boite.length; i++){
    var boxecollide = boite[i].y * 10 + boite[i].x;
    if(carte[boxecollide] === 4){
      boite[i].victory = 1;
    } 
    else{
      boite[i].victory = 0;
    }
  }
}

var winmessage = true;
var checkIfWon = function(){
  var won = 0;
  for(i = 0; i < boite.length; i++){
    if(boite[i].victory === 1){
      won ++;
    }
    if(won === 7){
      if(winmessage){
      window.alert("Tu as gagné !");
      mySound.play();
      winmessage = false;
    }
  }
}
}


function setup() {
  var cnv = createCanvas(400, 400);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(55, 55, 55);
  mySound.setVolume(0.1);
}

function draw() {
  checkIfWon();
  gameboard.show();
  okarin.show();
  victory();

  for(i = 0; i < boite.length; i++){
    boite[i].show();
  }
}