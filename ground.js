class Ground {
    constructor(x,y,width) {
        var options ={
            isStatic:true
        }

        this.body = Bodies.rectangle(x,y,width,15,options);
        this.width = width;
        this.height = 15;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;

        push();
        fill("brown");
        strokeWeight(2);
        stroke("brown");
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,15);
        pop();
    }
}