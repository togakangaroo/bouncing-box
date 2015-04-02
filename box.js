//what variables we will use
var box, boardWidth, position, speed, points;
var setBoxPosition, update, makeFaster;

//initialize variables
position = 0;
points = 0;
speed = 10;
box = $('.box');
boardWidth = $('.board').width();

//functions we will use
update = function() {
  position = position + speed;
  if(position > boardWidth) {
    position = 0;
  }
  console.log(position, boardWidth);
  box.css('left', position);  
  box.text(points);
}
makeFasterAndIncreasePoints = function() {
  speed = speed + 3;
  points = points + 1;
  position = 0;
}

//How we interact with the user
box.on('click', makeFasterAndIncreasePoints)

//start game running
setInterval(update, 50);

