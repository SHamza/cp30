class Ball{
    constructor(){
        this.body = Bodies.circle(50,200,20);
  World.add(world,this.body);
    this.image=loadImage("polygon.png");
    }
    display(){
        imageMode(CENTER)
  image(this.image ,this.body.position.x,this.body.position.y,40,40);
    }
}