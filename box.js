class Box{
    constructor(x,y,width,height,c){
        var options={
            isStatic: false,
            restitution: 0.8,
            density:1.0,
            friction:0.04
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.colour = c;
        this.visiblity = 255;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
       
        if (this.body.speed<7){
            push();
            translate(pos.x,pos.y)
            rotate(angle);
            rectMode(CENTER);
            stroke("black");
            strokeWeight(1);
            fill(this.colour);
            rect(0,0,this.width,this.height);
            pop();
        }
        else{
            push();
            World.remove(world, this.body);
            this.visiblity = this.visiblity - 5;
            tint(255,this.visiblity);
            pop();
        }
    }
};