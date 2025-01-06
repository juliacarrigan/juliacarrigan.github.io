
function navBar0() {
    let filmingLink = "<a href='Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='Writing' class='navBarItem'>Writing</a>"
    return createDiv(`<div class='navBar'><div>${meLink + filmingLink + mathingLink + writingLink}</div></div>`)
}

function navBar1() {
    let homeLink = "<a href='../' class='navBarHome'><img src='../julia-signature.png' style='height: 50px'></a>"
    let filmingLink = "<a href='../Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='../Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='../Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='../Writing' class='navBarItem'>Writing</a>"
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${meLink} ${filmingLink} ${mathingLink} ${writingLink}</div></div>`)
}

function navBar2() {
    let homeLink = "<a href='../../' class='navBarHome'><img src='../../julia-signature.png' style='height: 50px'></a>"
    let filmingLink = "<a href='../../Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='../../Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='../../Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='../../Writing' class='navBarItem'>Writing</a>"
    // return createDiv(`<div id='navBar' style="flex-direction: vertical" ><h1>${homeLink}</h1> <div> ${mediaLink + meLink + mathLink}</div></div>`)
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${meLink} ${filmingLink} ${mathingLink} ${writingLink}</div></div>`)
}

function navBar3() {
    let homeLink = "<a href='../../../' class='navBarHome'><img src='../../../julia-signature.png' style='height: 50px'></a>"
    let filmingLink = "<a href='../../../Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='../../../Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='../../../Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='../../../Writing' class='navBarItem'>Writing</a>"
    // return createDiv(`<div id='navBar' style="flex-direction: vertical" ><h1>${homeLink}</h1> <div> ${mediaLink + meLink + mathLink}</div></div>`)
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${meLink} ${filmingLink} ${mathingLink} ${writingLink}</div></div>`)
}

// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight)
//     displayHTML()
// }