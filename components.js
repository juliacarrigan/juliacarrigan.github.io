

function returnHello() {
    return("Hello")
}

function homeNavBar() {
    let mediaLink = "<a href='Media' id='navBarItem'>Media</a>"
    let meLink = "<a href='Me' id='navBarItem'>Me</a>"
    let mathLink = "<a href='Math' id='navBarItem'>Math</a>"
    return createDiv(`<div id='navBar'>${mediaLink + meLink + mathLink}</div>`)
}

function navBar() {
    let homeLink = "<a href='../' id='navBarItem'>Home</a>"
    let mediaLink = "<a href='../Media' id='navBarItem'>Media</a>"
    let meLink = "<a href='../Me' id='navBarItem'>Me</a>"
    let mathLink = "<a href='../Math' id='navBarItem'>Math</a>"
    return createDiv(`<div id='navBar'>${homeLink + mediaLink + meLink + mathLink}</div>`)
}

function mediaNavBar() {
    let homeLink = "<a href='../' id='navBarItem'>Home</a>"
    let meLink = "<a href='../Me' id='navBarItem'>Me</a>"
    let mathLink = "<a href='../Math' id='navBarItem'>Math</a>"
    return createDiv(`<div id='navBar'>${homeLink + meLink + mathLink}</div>`)
}

function meNavBar() {
    let homeLink = "<a href='../' id='navBarItem'>Home</a>"
    let mediaLink = "<a href='../Media' id='navBarItem'>Media</a>"
    let mathLink = "<a href='../Math' id='navBarItem'>Math</a>"
    return createDiv(`<div id='navBar'>${homeLink + mediaLink + mathLink}</div>`)
}

function mathNavBar() {
    let homeLink = "<a href='../' id='navBarItem'>Home</a>"
    let mediaLink = "<a href='../Media' id='navBarItem'>Media</a>"
    let meLink = "<a href='../Me' id='navBarItem'>Me</a>"
    return createDiv(`<div id='navBar'>${homeLink + mediaLink + meLink}</div>`)
}


function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    displayHTML()
}

function displayHTML() {
    clear();

    let div = select("#navBar")
    div.position(0,0)
}





document.addEventListener('DOMContentLoaded', function() {

    
    let delayedLink = document.getElementById('navBarItem');
    let delayTime = 3000;

    delayedLink.addEventListener('click', function(event) {
        event.preventDefault();
        let target = event.target;

        if (!target.disabled) {
            target.disabled = true;
            setTimeout(function() {
                target.disabled = false;
            }, delayTime);
        } else {
            event.stopPropagation();
        }
    })
})

