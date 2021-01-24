var pointA;
var pointB;
class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        this.rope=Matter.Constraint.create(options);
        World.add(world, this.rope);
    }
    display(){
        pointA = this.rope.bodyA.position;
        pointB = this.rope.bodyB.position;
        var pointBx = pointB.x+this.offsetX;
        var pointBy = pointB.y+this.offsetY;
        strokeWeight(5)
        line(pointA.x,pointA.y,pointBx,pointBy);
    }
}