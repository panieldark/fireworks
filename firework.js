function Firework(){

  this.hu = random(255);
  this.firework = new Particle(random(width), height, this.hu, true); //the firework itself is a particle;
  this.exploded = false;                        //it becomes a 'firework' upon explosion
  this.particles = [];
  this.done = function(){ //defines: is the firework done, and able to be thrown away?
    if (this.exploded && this.particles.length === 0) {
      return true;
    } else {
      return false;
    }
  }
  this.update = function() {
    if (!this.exploded){
    this.firework.applyForce(gravity);
    this.firework.update(); //from particle.js

    if (this.firework.vel.y >= 0) { //controls the time at which the firework explodes
      this.exploded = true;
      this.explode();
    }
  }

    //generate particles
    for (var i = this.particles.length-1; i >= 0; i--) { //loop backwards because it is better
      this.particles[i].applyForce(gravity);
      this.particles[i].update();
      if (this.particles[i].done()){
        this.particles.splice(i,1);
      }
    }

  }


  this.explode = function(){
    for (var i = 0; i < random(100,200); i++) { //control the amount of exploding particles
      var p = new Particle(this.firework.pos.x, this.firework.pos.y, this.hu, false);
      this.particles.push(p);
    }
  }

  this.show = function() {
    if (!this.exploded){
      this.firework.show();
    }
    for (var i = 0; i < this.particles.length; i++) {
      this.particles[i].show();
    }
  }

}
