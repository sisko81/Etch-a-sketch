let color = "black";
let click = false;

document.addEventListener("DOMContentLoaded", function() {
    createBoard(32)

    document.querySelector('body').addEventListener('click', function(e) {
        if(e.target.tagName != "BUTTON") {
            click = !click
            let draw = document.querySelector('#draw')
            if(click) {
                draw.innerHTML = 'Now You Can Draw'
            }
        }
    })

    let btn_popUp = document.querySelector("#popup");
    btn_popUp.addEventListener("click", function(){
        let size = getSize();
        createBoard(size)
    })

    console.log("Hello World")
})

function createBoard(size) {
    let board = document.querySelector('.container');

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`

    let numDivs = size * size;

    for(let i = 0; i < numDivs; i++) {
        let div = document.createElement('div');
        div.addEventListener("mouseover", colorDiv)
        board.insertAdjacentElement("beforeend", div)
    }
 
}

function getSize() {
    let input = prompt("What will be the size of the board")
    let message = document.querySelector("#message");
    if(input == '') {
        message.innerHTML = "Please provide a number"
    }
    else if(input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"
    }
    else{
        message.innerHTML = "Now you can play"
        return input;
    }
}

function colorDiv() {

    if(click) {

        if(color == "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
        }
        else if(color == "erase") {
            this.style.backgroundColor = 'white'
        }
        else{
            this.style.backgroundColor = 'black'
        }
    }
}

function setColor(colorChoice) {

  color = colorChoice;

}

function resetBoard() {
    let divs = document.querySelectorAll("div")
    divs.forEach((div) => div.style.backgroundColor = "white")
}












