class Iron{
   constructor(x,y) {
    var options = {
      'density':30,
      'friction':3,
      'restitution':0.8
    };
    this.body = Bodies.rectangle(x, y,70, 40, options);
    this.width = 50;
    this.height = 50;
    World.add(world, this.body)
    }
    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);
      }
}