
function setup() {
    createCanvas(400,400);
    angleMode(DEGREES);
}


function draw() {
    background(0);

    //Translates and rotates the drawings
    translate(200,200);
    rotate(-90);

    //Obtains the hours, minutes, and seconds of the current time
    let hr = hour();
    let mn = minute();
    let sc = second();

    //Draws seconds Arc
    strokeWeight(8);
    stroke(300,100,150);
    noFill();
    let scAngle = map(sc, 0,60, 0, 360);
    arc(0,0,300,300,0,scAngle);

    push();
    rotate(scAngle);
    stroke(300,100,150);
    line(0,0,100,0);
    pop();

    //Draws minute Arc
    stroke(150,100,255);
    let mnAngle = map(mn, 0, 60, 0, 360);
    arc(0,0,280,280,0,mnAngle);

    //Draws legs pointing at minute
    push();
    rotate(mnAngle);
    stroke(150,100,255);
    line(0,0,75,0);
    pop();

    //Draws hours Arc
    stroke(150,255,100);
    let hrAngle = map(hr % 12, 0, 12, 0, 360);
    arc(0,0,260,260,0,hrAngle);

    push();
    rotate(hrAngle);
    stroke(150,255,100);
    line(0,0,50,0);
    pop();

    //Draws a point in the middle of the clock
    stroke(255);
    point(0,0,0);
}




