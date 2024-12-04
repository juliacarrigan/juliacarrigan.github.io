
function navBar0() {
    let mediaLink = "<a href='Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='Math' class='navBarItem'>Math</a>"
    return createDiv(`<div class='navBar'><div>${mediaLink + meLink + mathLink}</div></div>`)
}

function navBar1() {
    let homeLink = "<a href='../' class='navBarHome'><img src='../julia-signature.png' style='height: 50px'></a>"
    let mediaLink = "<a href='../Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='../Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='../Math' class='navBarItem'>Math</a>"
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${mediaLink} ${meLink} ${mathLink}</div></div>`)
}

function navBar2() {
    let homeLink = "<a href='../../' class='navBarHome'><img src='../../julia-signature.png' style='height: 50px'></a>"
    let mediaLink = "<a href='../../Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='../../Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='../../Math' class='navBarItem'>Math</a>"
    // return createDiv(`<div id='navBar' style="flex-direction: vertical" ><h1>${homeLink}</h1> <div> ${mediaLink + meLink + mathLink}</div></div>`)
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${mediaLink} ${meLink} ${mathLink}</div></div>`)
}

function navBar3() {
    let homeLink = "<a href='../../../' class='navBarHome'><img src='../../../julia-signature.png' style='height: 50px'></a>"
    let mediaLink = "<a href='../../../Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='../../../Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='../../../Math' class='navBarItem'>Math</a>"
    // return createDiv(`<div id='navBar' style="flex-direction: vertical" ><h1>${homeLink}</h1> <div> ${mediaLink + meLink + mathLink}</div></div>`)
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${mediaLink} ${meLink} ${mathLink}</div></div>`)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight)
    displayHTML()
}