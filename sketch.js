var fireworks = [];
var gravity;

function setup() {
  createCanvas(400,300);
  //colorMode(HSB);
  gravity = createVector(0,.1);
  stroke(255);
  strokeWeight(4);
  background(0);
}
function draw() {
  colorMode(RGB);
  background(0, 0, 0, 25);

  //generate fireworks
  if (random(1) < .02) { //decreases push rate by decimal multiplier
  fireworks.push(new Firework());
}
  for (var i = fireworks.length - 1; i >= 0; i--) {//looping backwords
    fireworks[i].update();
    fireworks[i].show();
    if (fireworks[i].done()) { //removing particles not just from showing but from existence
      fireworks.splice(i,1);  // to clear up memory (and frame rate)
    }
  }
  //console.log(fireworks.length);
}
