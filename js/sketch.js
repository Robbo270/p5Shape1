function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(251,255,79);

    fill(70,206,236);
    square(200,200,400);
    fill(70, 206, 236);
    ellipse(200, 200, 400) ;
    fill(70, 206, 236);
    ellipse(600, 200, 400) ;
    fill(70, 206, 236);
    ellipse(200, 600, 400) ;
    fill(70, 206, 236);
    ellipse(600, 600, 400) ;

}