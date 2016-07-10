var squareScale = 40;
var blocCollide = 0;

var okarin_front;
var okarin_back;
var okarin_left;
var okarin_right;

var microwaves;
var banana;

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
  okarin_front = loadImage("Okarin_Down_1.png");
  okarin_back = loadImage("Okarin_Back_1.png");
  okarin_left = loadImage("Okarin_Left_1.png");
  okarin_right = loadImage("Okarin_Right_1.png");
  microwaves = loadImage("Micro_onde.png");
  banana = loadImage("Banane.png");
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
              image(microwaves, x * squareScale + 1, y * squareScale + 1, squareScale -1, squareScale - 1);
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

var touchMove = function(){
  
  if(touchX < squareScale && touchY > squareScale && touchY < 400 - squareScale){
      controller_left.move();
  }
  else if(touchX > (400 - squareScale) && touchY > squareScale && touchY < 400 - squareScale){
      controller_right.move();
  }
  else if(touchX > squareScale && touchX < 400 - squareScale && touchY < squareScale){
    controller_up.move();
  }
  else if(touchX > squareScale && touchX < 400 - squareScale && touchY < 400){
    controller_down.move();
  }
  event.preventDefault();
}

var down_arrow = function(){
    this.move = function(){

      okarin.direction = 3;
      blocCollide = okarin.y * 10 + okarin.x + 10;

      for(var i = 0; i < boite.length; i++){
          var boxecollide = boite[i].y * 10 + boite[i].x;
          if(blocCollide === boxecollide){

              for(var j = 0; j < boite.length; j++){
              var ndboxecollide = boite[j].y * 10 + boite[j].x;
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
              
      }
      else if(carte[blocCollide] === 1){
                
      }
      else{
      okarin.y++;
      }
      
      
  }
    this.show = function(){
    fill(0, 0, 255);
    rect(squareScale, 400 - squareScale, 400 - (squareScale * 2), squareScale); 
    }
}
var controller_down = new down_arrow();

var up_arrow = function(){
  this.move = function(){
      okarin.direction = 2;
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
        
      }
      else if(carte[blocCollide] === 1){
        
      }
      else{
      okarin.y--;
      }

}

  this.show = function(){
    fill(0, 0, 255);
    rect(squareScale, 0, 400 - (squareScale * 2), squareScale);
  }

}


var controller_up = new up_arrow();


var right_arrow = function(){
  this.move = function(){
      okarin.direction = 0;
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
        
      }
      else if(carte[blocCollide] === 1){
       
      }
      

      else{
      okarin.x++;
      }
      
  
  }
      
    this.show = function(){
    fill(0, 0, 255);
    rect(400 - squareScale, squareScale, squareScale, 400 - (squareScale * 2));
  }

}

var controller_right = new right_arrow();

var left_arrow = function(){
  this.move = function(){
    okarin.direction = 1;
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
      }
      else if(carte[blocCollide] === 1){
      }
      else{
      okarin.x--;
      }
  
  }


  this.show = function(){
    fill(0, 0, 255);
    rect(0, squareScale, squareScale, 400 - (squareScale * 2));
  }
} 

var controller_left = new left_arrow();

var boxes = function(x, y){
  this.x = x;
  this.y = y;
  this.victory = 0;

  this.show = function(){
    banana
    image(banana, this.x * squareScale + 10, this.y * squareScale + 10, squareScale / 2, squareScale / 2);
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
  this.direction = 0;
  
  this.show = function(){
    switch(this.direction){
      case 0:
        image(okarin_right, this.x * squareScale + 1, this.y * squareScale + 1, squareScale -1, squareScale - 1);
        break;

      case 1:
        image(okarin_left, this.x * squareScale + 1, this.y * squareScale + 1, squareScale -1, squareScale - 1);
        break;

      case 2:
        image(okarin_back, this.x * squareScale + 1, this.y * squareScale + 1, squareScale -1, squareScale - 1);
        break;

      case 3:
        image(okarin_front, this.x * squareScale + 1, this.y * squareScale + 1, squareScale -1, squareScale - 1);
        break;
    }
    
  }
  
}
  
var okarin = new player();

function keyPressed() {
  switch(keyCode){
    case RIGHT_ARROW:
      okarin.direction = 0;
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
      okarin.direction = 1;
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
      okarin.direction = 2;
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
      okarin.direction = 3;
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
      mySound.play();
      window.alert("Tu as gagné !");
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
  cnv.touchEnded(touchMove);
}

function draw() {
  checkIfWon();
  gameboard.show();
  okarin.show();
  victory();
  controller_left.show();
  controller_right.show();
  controller_up.show();
  controller_down.show();

  for(i = 0; i < boite.length; i++){
    boite[i].show();
  }
}