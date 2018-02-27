// Where is the circle
var x, y;
var points;
function setup() {
  createCanvas(720, 400);
  // Starts in the middle
  x = width / 2;
  y = height + 16;
}

function draw() {
  background(200);
  
  // Draw a circle
  stroke(50);
  fill(100);
    
    for (x = (width/2 - 40); x < (width/2 + 40); x +=5) {
          point(x, y);
    }  
  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // Reset to the bottom
  if (y < 0) {
    y = height;
  }
}

