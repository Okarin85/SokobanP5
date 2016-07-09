var squareScale = 40;
var blocCollide = 0;

      /*
      Les boîtes ne doivent pas être "hardcodé" dans la carte
      parce qu'elle vont bouger comme le player.
      */

      var carte = [
      			 0,0,0,0,0,0,0,0,0,0,
      			 0,1,1,1,2,2,2,1,1,0,
      			 0,1,2,2,3,2,2,1,1,0,
      		   0,1,1,1,2,3,4,1,1,0,
      			 0,1,4,1,1,3,2,1,1,0,
      			 0,1,2,1,2,4,2,1,1,0,
      			 0,1,3,1,2,2,2,1,1,0,
      			 0,1,2,2,3,3,3,4,1,0,
      			 0,1,2,2,2,4,2,2,1,0,
      			 0,0,0,0,0,0,0,0,0,0
      			];
      			
var grid = function(){
			
      this.show = function(){
        for(var i = 0; i < 10; i++){
      	for(var j = 0; j < 10; j++){
      		var bloc = j * 10 + i;
      		if(carte[bloc] === 0){
      		  fill(0, 0, 0);
      			rect(i * squareScale, j * squareScale, squareScale, squareScale);
      		}
          else if(carte[bloc] === 1){
            fill(127, 127, 127);
      			rect(i * squareScale, j * squareScale, squareScale, squareScale);
          }
          //else if(carte[bloc] === 3){
            //fill(67, 67, 67);
      			//rect(i * squareScale, j * squareScale, squareScale, squareScale);
          //}
          //else if(carte[bloc] === 4){
            //fill(187, 187, 187);
      			//rect(i * squareScale, j * squareScale, squareScale, squareScale);
          //}
      		else{
      			fill(255, 255, 255);
      			rect(i * squareScale, j * squareScale, squareScale, squareScale);
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
}

var down_arrow = function(){
    this.move = function(){

    blocCollide = okarin.y * 10 + okarin.x + 10;
    if(carte[blocCollide] === 0){
      okarin.y = okarin.y;
    }
    else if(carte[blocCollide] === 1){
      okarin.x = okarin.x;
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
    
    blocCollide = (okarin.y - 1) * 10 + okarin.x;
    
    if(carte[blocCollide] === 0){
      okarin.y = okarin.y;
    }
    else if(carte[blocCollide] === 1){
      okarin.y = okarin.y;
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
    var collide = okarin.x + 1;
    blocCollide = okarin.y * 10 + collide;
    if(carte[blocCollide] === 0){
      okarin.x = okarin.x;
    }
    else if(carte[blocCollide] === 1){
      okarin.x = okarin.x;
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
    var collide = okarin.x - 1;
    blocCollide = okarin.y * 10 + collide;
    if(carte[blocCollide] === 0){
      okarin.x = okarin.x;
    }
    else if(carte[blocCollide] === 1){
      okarin.x = okarin.x;
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

  this.show = function(){
    fill(187, 187, 187);
    rect(x * squareScale, y * squareScale, squareScale, squareScale);
    fill(0, 0, 0);
    ellipse((x * squareScale) + (squareScale / 2),(y * squareScale) + (squareScale / 2), squareScale / 2, squareScale / 2);
  }


}
var boite = [
              new boxes(4, 2),
              new boxes(5, 3),
              new boxes(5, 4),
            ];


var player = function(){
  this.x = 3;
  this.y = 2;
  
  this.show = function(){
    fill(255, 0, 0);
      rect(this.x * squareScale, this.y * squareScale, squareScale, squareScale );
  }
  
}
  
var okarin = new player();

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    
    var collide = okarin.x + 1;
    blocCollide = okarin.y * 10 + collide;
    if(carte[blocCollide] === 0){
      okarin.x = okarin.x;
    }
    else if(carte[blocCollide] === 1){
      okarin.x = okarin.x;
    }
    else{
    okarin.x++;
    }
  } 
  else if(keyCode  === LEFT_ARROW){
    var collide = okarin.x - 1;
    blocCollide = okarin.y * 10 + collide;
    if(carte[blocCollide] === 0){
      okarin.x = okarin.x;
    }
    else if(carte[blocCollide] === 1){
      okarin.x = okarin.x;
    }
    else{
    okarin.x--;
  }
  }
  else if(keyCode  === UP_ARROW){

    blocCollide = (okarin.y - 1) * 10 + okarin.x;
    
    if(carte[blocCollide] === 0){
      okarin.y = okarin.y;
    }
    else if(carte[blocCollide] === 1){
      okarin.y = okarin.y;
    }
    else{
    okarin.y--;
  }
}

  else if(keyCode  === DOWN_ARROW){
    blocCollide = okarin.y * 10 + okarin.x + 10;
    if(carte[blocCollide] === 0){
      okarin.y = okarin.y;
    }
    else if(carte[blocCollide] === 1){
      okarin.x = okarin.x;
    }
    else{
    okarin.y++;
  }
}
}


function setup() {
  var cnv = createCanvas(400, 400);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(55, 55, 55);
  cnv.touchStarted(touchMove);

}

function draw() {
  gameboard.show();
  okarin.show();
  controller_left.show();
  controller_right.show();
  controller_up.show();
  controller_down.show();

  //for(i = 0; i < boite.length; i++){
    //boite[i].show();
    //boite[i].collide();
  //}
}