class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(x){
        this.sling.bodyA = x;
    }
 
    display(){
        stroke("black");
        strokeWeight(5);
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            line(pointA.x,pointA.y,pointB.x,pointB.y);
        }
    }
}