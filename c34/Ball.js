class Ball{
    constructor(x,y,r,angle){
        var options={
             'restituion':0.8,
             'density':0.04,
             'friction':1.0
           

        }
        this.body=Bodies.circle(x,y,r,options)
        this.r=r; 
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        ellipseMode(CENTER)
        strokeWeight(4);
        stroke("green");
        fill("pink");
        ellipse(0,0,this.r);
        pop();
    }
}