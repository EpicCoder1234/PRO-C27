class Bob{
    constructor(x,y,diameter){
        var bob_options={
            restitution:0.3,
            friction:0.5,
            density:1.2,
            isStatic:true,
        }
        this.body = Matter.Bodies.circle(x,y,diameter,bob_options);
        this.diameter = diameter;
        World.add(world,this.body)
        
    
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("green");
        circle(0,0,this.diameter);
        pop();
    }
}