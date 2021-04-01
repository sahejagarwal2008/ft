class Bhoot{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0,
            'isStatic':true
        }
        this.body = Bodies.rectangle(x, y, width, height);
        this.width = width;
        this.height = height;
       // this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        push();
        rectMode(CENTER);
        rect( this.body.position.x,this.body.position.y, this.width, this.height);
        pop();
      }
    }