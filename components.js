
function navBar0() {
    let mediaLink = "<a href='Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='Math' class='navBarItem'>Math</a>"
    return createDiv(`<div class='navBar'><div>${mediaLink + meLink + mathLink}</div></div>`)
}

function navBar1() {
    let homeLink = "<a href='../' class='navBarItem'><img src='../home.png' style='height: 30px'><img src='../julia-signature.png' style='height: 30px'></a>"
    let mediaLink = "<a href='../Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='../Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='../Math' class='navBarItem'>Math</a>"
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${mediaLink} ${meLink} ${mathLink}</div></div>`)
}

function navBar2() {
    let homeLink = "<a href='../../' class='navBarItem'><img src='../../home.png' style='height: 30px'><img src='../../julia-signature.png' style='height: 30px'></a>"
    let mediaLink = "<a href='../../Media' class='navBarItem'>Media</a>"
    let meLink = "<a href='../../Me' class='navBarItem'>Me</a>"
    let mathLink = "<a href='../../Math' class='navBarItem'>Math</a>"
    // return createDiv(`<div id='navBar' style="flex-direction: vertical" ><h1>${homeLink}</h1> <div> ${mediaLink + meLink + mathLink}</div></div>`)
    return createDiv(`<div class='navBar'><div>${homeLink}</div><div>${mediaLink} ${meLink} ${mathLink}</div></div>`)
}

function navBar3() {
    let homeLink = "<a href='../../../' class='navBarItem'><img src='../../../home.png' style='height: 30px'><img src='../../../julia-signature.png' style='height: 30px'></a>"
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


// document.addEventListener('DOMContentLoaded', function() {

    
//     let delayedLink = document.getElementById('navBarItem');
//     let delayTime = 3000;

//     delayedLink.addEventListener('click', function(event) {
//         event.preventDefault();
//         let target = event.target;

//         if (!target.disabled) {
//             target.disabled = true;
//             setTimeout(function() {
//                 target.disabled = false;
//             }, delayTime);
//         } else {
//             event.stopPropagation();
//         }
//     })
// })

