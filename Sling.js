class Sling {

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 10,
            stiffness: 0.04
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    display() {
        push();
        if (this.sling.bodyA !== null) {
            var pos = this.sling.bodyA.position;
            stroke("#301608")
            strokeWeight(1);
            line(pos.x, pos.y, this.pointB.x, this.pointB.y);
        }
        pop();
    }
    attach(body) {
        this.sling.bodyA = body;
    }
    fly() {
        this.sling.bodyA = null;
    }


}