// This variable keeps track of whose turn it is.
let activePlayer = 'X';

// this array stores an array of moves. 
// we use this to determine win conditions. 
let selectedSquares = [];
// This function is for placing an X or O in a square. 
function placeXorO(squareNumber) {
    // This function place x or o in the squareNumber square and return true else if it can do it successfully, and return undefined otherwise.
    // This condition ensures a square has not been selected already.
    // The .some method is used to check each element of the selectSquares array
    // to see else if it contains the square number clicked on.
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        // This variable retrieves the HTML element id that was clicked.
        let select = document.getElementById(squareNumber)
        // this condition checks who's turn it is.
        if (activePlayer === 'X') {
            // place the x.png is placed in HTML.
            select.style.backgroundImage = 'url("images/x.png")'
            // Active player may only be 'X' or "O", so else if it is not X then it must be O
        } else {
            // place O image in the select
            select.style.backgroundImage = 'url("images/o.png")'
        }
        // squareNumber and activePlayer are concatenated together and added to array.
        selectedSquares.push(squareNumber + activePlayer)
        // This call a function to check for any win conditions.
            checkWinConditions()
            // This condition is for changing the active player.
        if (activePlayer === 'X') {
            // change it to 'O'
            activePlayer = 'O'
        } else {
            // change it to 'X'
            activePlayer = 'X'
        }
        // This function plays the placement sound.
        audio('./media/place.mp3')
        // this condition check to see else if it is the computers turn.
        if (activePlayer === "O") {
            // this function disables clicking for computers turn.
            disableClick();
            // this function waits 1 second before the computer places an image and enables click.
            setTimeout(function () { computersTurn(); }, 1000)
        }
        // returning true is needed for our computersTurn() function to work.
        return true;
    }

    // This function results in a random square being selected by the computer.
    function computersTurn() {
        // this boolean is needed for our while loop.
        let success = false;
        // this variable stores a random number 0-8.
        let pickASquare;
        // this condition allows for our while loop to keep trying else if a square is selected already.
        while (!success) {
            // a random number between 0 and 8 is selected.
            pickASquare = String(Math.floor(Math.random() * 9))
            // else if the random number evaluated returns true, the square has not been yet selected.
            if (placeXorO(pickASquare)) {
                // this line calls the function. this is actually optional.
                // console.log(placeXorO(pickASquare))
                // this changes our boolean and ends the loop
                success = true
            }
        }
    }
}

function checkWinConditions() {
    // X 0,1,2 condition.
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100) }
    // X 3,4,5 condition.
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304) }
    // X 6,7,8 condition.
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508) }
    // X 3,0,6 condition.
    else if (arrayIncludes('3X', '0X', '6X')) { drawWinLine(100, 50, 100, 558) }
    // X 1,4,7 condition.
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558) }
    // X 2,5,8 condition.
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558) }
    // X 6,4,2 condition.
    else if (arrayIncludes('6X', '4X', '2X')) { drawWinLine(100, 508, 510, 90) }
    // X 0,4,8 condition.
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520) }
    // O 0,1,2 condition.
    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100) }
    // O 3,4,5 condition.
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304) }
    // O 6,7,8 condition.
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508) }
    // O 3,0,6 condition.
    else if (arrayIncludes('3O', '0O', '6O')) { drawWinLine(100, 50, 100, 558) }
    // O 1,4,7 condition.
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558) }
    // O 2,5,8 condition.
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558) }
    // O 6,4,2 condition.
    else if (arrayIncludes('6O', '4O', '2O')) { drawWinLine(100, 508, 510, 90) }
    // O 0,4,8 condition.
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520) }
    else if (selectedSquares.length >= 9) {
        // This function plays the tie game sound.
        audio('./media/tie2.mp3')
        // this function set a .3 second timer before the resetGame is called. 
        setTimeout(function () { resetGame(); }, 500)
    }
    // this function check if an array contains 3 strings, it is used to check for each win condition.
    function arrayIncludes(squareA, squareB, squareC) {
        // These 3 variables will be used to check for 3 in a row. 
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)
        // If the 3 variables we pass are all included 
        // in the array then true is returned and our else if condition executes the drawLine() function.
        if (a === true && b === true && c === true) {
            return true
        }
    }
}
// this function makes our body element temporarily inclickable.
function disableClick() {
    // this make our body unclickable.
    body.style.pointerEvents = 'none'
    // this make the body clickable again after 1 second. 
    setTimeout(function () { body.style.pointerEvents = 'auto'; }, 1000)
}
// This function is for playing the sound in the path.
function audio(audioURL) {
    // we create a new audio object and pass the path as a parameter.
    let audio = new Audio(audioURL)
    audio.play()
}

// this function utilizes HTML canvas to draw win lines. 
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    // this line accesses our HTML canvas element.
    const canvas = document.getElementById('win-lines')
    // this line gives us access to methods and properties to use on canvas.
    const c = canvas.getContext('2d')
    // This line indicates where the start of a line x axis is. 
    let x1 = coordX1,
        // this line indicates where the start of a line y axis is.
        y1 = coordY1,
        // this line indicates where the end of a line x axis is.
        x2 = coordX2,
        // this line indicates where the end of a line y axis is.
        y2 = coordY2,
        // This variable store temporary x axis data we update in our animation loop.
        x = x1,
        // This variable store temporary y axis data we update in our animation loop.
        y = y1
    // this function interacts with the canvas.
    function animateLineDrawing() {
        // this variable creates a loop.
        const animationLoop = requestAnimationFrame(animateLineDrawing)
        // this method clears content from the last loop iteration.
        c.clearRect(0, 0, 608, 608);
        // this method starts a new path
        c.beginPath()
        // this method moves us to a starting point in our line
        c.moveTo(x1, y1)
        // this method indicates the end point in our line. 
        c.lineTo(x, y)
        // this method sets the width of our line.
        c.lineWidth = 10
        // this set the color of our line.
        c.strokeStyle = 'rgba(70,255,33,.8)'
        // this method draws everything we laid out before.
        c.stroke()
        // this condition check if we have reached the endpoints.
        if (x1 <= x2 && y1 <= y2) {
            // this condition adds 10 to the previous end x endpoint.
            if (x < x2) { x += 10 }
            // this condition adds 10 to the previous end y endpoint.
            if (y < y2) {
                y += 10
            }
            // this condition is similar to the above one
            // this is necessary for the 6,4,2 win conditions.
            if (x >= x2 && y >= y2) {
                cancelAnimationFrame(animationLoop)
            }
        }
        // this condition is simmilar to the one above  
        // this is neccessary for the 6,4,2 win condition.
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10 }
            if (y > y2) {
                y -= 10
            }
            if (x >= x2 && y <= y2) {
                cancelAnimationFrame(animationLoop)
            }
        }
    }
    // this function clears our canvas after our win line is drawn.
    function clear() {
        // this line start our animation loop.
        const animationLoop = requestAnimationFrame(clear)
        // this line clears our canvas.
        c.clearRect(0, 0, 608, 608)
        // this line stops our animation loop.
        cancelAnimationFrame(animationLoop)
    }
    // this line disallows clicking whilte the win sound is playing
    disableClick()
    // this line plays the win sounds.
    audio('./media/win2.mp3')
    // this line calls our main animation loop.
    animateLineDrawing()
    // this line waits 1 sec. then clears canvas, resets game, and allows clicking again.
    setTimeout(function () { clear(); resetGame() }, 1000)
}

// this function resets the game in the event of a tie or win.
function resetGame(){
    // this for loop iterates through each HTML square element. 
    for (let i =0; i<9;i++){
        // this variable get each of the squares. 
        let square = document.getElementById(String(i))
        // this removes our elements backgroundImage.
        square.style.backgroundImage = ''
    
    }
    // this resets our array so it is empty and we can start over.
    selectedSquares =[]
}