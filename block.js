class Block {
    constructor(x,y) {
        var options ={
            isStatic:false
        }

        this.body = Bodies.rectangle(x,y,45,65,options);
        this.width = 45;
        this.height = 65;
        this.visible = 255;

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        if(this.body.speed<3) {
        var rand = Math.round(random(1,6));

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(5);
        stroke("black");
        switch(rand) {
            case 1: fill("red"); 
            break;

            case 2: fill("blue"); 
            break;

            case 3: fill("green"); 
            break;

            case 4: fill("yellow"); 
            break;

            case 5: fill("orange"); 
            break;

            case 6: fill("white"); 
            break;
            
            default: break;
        }
        rectMode(CENTER);
        rect(0,0,45,65);
        pop();
    } else{
      push();
      World.remove(world, this.body);
      tint(255, this.visible);
      this.visible = this.visible-2;
      //rect(pos.x, pos.y, 45, 65);
      pop();
    }
    }

    score() {
        if(this.Visible < 0 && this.Visible > -402) { 
            score++;
        }
    }
}