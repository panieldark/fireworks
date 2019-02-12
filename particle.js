function Particle(x, y, hu, firework) {
  this.pos = createVector(x,y);
  this.firework = firework;
  this.lifespan = 255; //controls how long particles will show
  this.hu = hu;

  if(this.firework) { //if it is an original firework and not a particle after explosion
    this.vel = createVector(0,random(-8,-5)); //controls the height (because it sets velocity)
  } else { //if not original firework then must be exploding particles
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(2,12)); //controls width of explosion
  }

  this.acc = createVector(0,0);

  this.applyForce = function(force) {
    this.acc.add(force);
  }

  this.update = function() {
    if (!this.firework) {
      this.vel.mult(random(.8,.99)); //controls the width
      this.lifespan -= 3;
    }
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  this.done = function(){
    if (this.lifespan<0){
      return true;
    } else {
      return false;
    }
  }

  this.show = function() {
    colorMode(HSB);
    if (!this.firework) {
      strokeWeight(2);
      stroke(hu, 255, 255, this.lifespan);
    } else {
      strokeWeight(5); //controls width of the firework
      stroke(hu, 255, 255);
    }
    point(this.pos.x, this.pos.y);
  }
}
