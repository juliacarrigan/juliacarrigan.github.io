
function navBar0() {
    const newDiv = document.createElement("div");
    let filmingLink = "<a href='Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='Writing' class='navBarItem'>Writing</a>"
    newDiv.innerHTML = `<div class='navBar'><div>${meLink + filmingLink + mathingLink + writingLink}</div></div>`
    return newDiv;
}

function navBar1() {
    const newDiv = document.createElement("div");
    let homeLink = "<a href='../' class='navBarHome'><img src='../_Non_Pages/Images/julia-signature.png' style='height: 50px'></a>"
    let filmingLink = "<a href='../Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='../Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='../Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='../Writing' class='navBarItem'>Writing</a>"
    newDiv.innerHTML = `<div class='navBar'><div>${homeLink}</div><div>${meLink} ${filmingLink} ${mathingLink} ${writingLink}</div></div>`
    return newDiv;
}

function navBar2() {
    const newDiv = document.createElement("div");
    let homeLink = "<a href='../../' class='navBarHome'><img src='../../_Non_Pages/Images/julia-signature.png' style='height: 50px'></a>"
    let filmingLink = "<a href='../../Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='../../Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='../../Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='../../Writing' class='navBarItem'>Writing</a>"
    newDiv.innerHTML = `<div class='navBar'><div>${homeLink}</div><div>${meLink} ${filmingLink} ${mathingLink} ${writingLink}</div></div>`
    return newDiv;
}

function navBar3() {
    const newDiv = document.createElement("div");
    let homeLink = "<a href='../../../' class='navBarHome'><img src='../../../_Non_Pages/Images/julia-signature.png' style='height: 50px'></a>"
    let filmingLink = "<a href='../../../Filming' class='navBarItem'>Filming</a>"
    let meLink = "<a href='../../../Me' class='navBarItem'>Me</a>"
    let mathingLink = "<a href='../../../Mathing' class='navBarItem'>Mathing</a>"
    let writingLink = "<a href='../../../Writing' class='navBarItem'>Writing</a>"
    newDiv.innerHTML = `<div class='navBar'><div>${homeLink}</div><div>${meLink} ${filmingLink} ${mathingLink} ${writingLink}</div></div>`
    return newDiv
}