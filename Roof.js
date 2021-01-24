class Roof{
    constructor(x,y,w,h){
        var roof_options={
            isStatic:true,
        }
        this.body = Bodies.rectangle(x,y,w,h,roof_options);
        this.width = w
        this.height = h;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("gray");
        rect(pos.x,pos.y,this.width,this.height);
        pop();
    }
}