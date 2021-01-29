class Bob{
    constructor(x,y,diameter){
        var bob_options={
            restitution:0.8,
            friction:0,
            density:2,
        }
        this.body = Matter.Bodies.circle(x,y,diameter,bob_options);
        this.diameter = diameter;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        console.log(pos)
        push();
        translate(pos.x,pos.y);
        fill("green");
        ellipseMode(RADIUS)
        circle(0,0,this.diameter);
        pop();
    }
}