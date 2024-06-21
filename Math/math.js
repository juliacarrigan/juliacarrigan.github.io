let parentElement;
let childElement;
let navbar;

function preload() {

}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("body")
    canvas.position(0,0)
    navbar = mathNavBar()
    navbar.position(0,0)

    // navbar.child(3).style('background-color', 'red')
    // childElement = navbar.child(0).child('div');
    // childElement.style('background-color', 'blue')
    // parentElement = navbar;
    // childElement = parentElement.child(0);
    // childElement.style('background-style', 'red')
    // parentElement.style('background-style', 'blue')
}

function draw() {
    background(1,100,0,5)
    // circle(mouseX, mouseY, 10)
    // text(navbar, mouseX, mouseY)
}
