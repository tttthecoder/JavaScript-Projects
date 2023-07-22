// Define a global variable
var text = "This is a global variable"

function local1() {
    // define a local variable 
    var X_1 = 'This is local1'
    document.write("<br>" + X_1);
}
function local2() {
    // define a another local variable 
    var X_2 = 'This is local2'
    document.write("<br>" + X_2);
    // make a call to the not available local variable
    document.write("<br>" + X_1);
}
// calls to functions to display error in the console.
local1()
local2()


// Date().getHours() method illustration.
function get_Date() {
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "How are you today?";
    }
    else {
        document.getElementById("greeting").innerHTML = "Oh, seem like it's dark";
    }
}


// For if statements illustration. 
function goHome() {
    if (new Date().getHours() > 21) {
        document.getElementById("goHome").innerHTML = "It's late you gotta go home now";
    }
    else {
        document.getElementById("goHome").innerHTML = "Oh, seem like it's still early";
    }
}




// This is for showing how to work with else statements.
function canDrive() {
    age = document.getElementById('age').value
    if (age > 18) {
        document.getElementById('result').innerHTML = 'You are old enough to drive'
    }
    else {
        // this get executed when the condition evaluated to false.
        document.getElementById('result').innerHTML = 'You cannot drive'
    }
}

// this is for the else if statement.
function timeFunction() {
    var time = new Date().getHours();
    var reply;
// make a decision
    if (time < 12 && time >= 0) {
        reply = 'It is morning time!';
    }
    else if (time >= 12 && time < 18) {
        reply = 'It is afternoon.';
    }
    else {
        reply = 'It is evening time.';
    }
// display the time.
    document.getElementById('timeOfDay').innerHTML = reply;
}