class Polygon {
    constructor(x,y) {
        var options = {
            isStatic:true
        }

        this.image = loadImage("polygon.png");
        this.body = Bodies.rectangle(x,y,50,50);
        this.width = 50;
        this.height = 50;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,50,50);
        pop();
    }
}