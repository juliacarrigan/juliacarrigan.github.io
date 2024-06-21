let img;
let oldX = mouseX+1;
let oldY = mouseY+1;
var angle;
var newAngle;
var settledAngle = 0;

function preload() {
    img = loadImage('./image.png');
}

function setup() {
    // noCursor()
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("body")
    canvas.position(0,0)

    let div = homeNavBar()
    div.position(0,0)
    // div.style("background-color:red")
    frameRate(60)

    // angle = 90
}


function draw() {
    // background(1,50,32,40)
    push();
    translate(width/2,0)
    scale(height/img.height)
    image(img,-img.width/2,0);
    pop();
    // let side = 30;
    // fill(255,192,203)
    // stroke(255,192,203)

    // let newAngle = atan2(mouseY - pmouseY, mouseX - pmouseX)
    // if (newAngle === 0) {
    //     angle = settledAngle
    // } else {
    //     angle = newAngle
    //     settledAngle = newAngle
    // }

    // let x1 = mouseX + cos(angle - 3*HALF_PI/2) * side;
    // let y1 = mouseY + sin(angle - 3*HALF_PI/2) * side;
    // let x2 = x1 + cos(angle + 3*HALF_PI/2) * side;
    // let y2 = y1 + sin(angle + 3*HALF_PI/2) * side;
    // let x3 = mouseX + cos(angle + 3*HALF_PI/2) * side;
    // let y3 = mouseY + sin(angle + 3*HALF_PI/2) * side;
    
    // quad(mouseX, mouseY, x1, y1, x2, y2, x3, y3)
    // circle(mouseX, mouseY, 2*side)

    // circle(mouseX, mouseY, 10)
}

