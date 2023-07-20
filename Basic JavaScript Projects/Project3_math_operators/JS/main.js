// this is for the addition operator
function addition() {
    var a = 2 + 2;
    document.getElementById("Math1").innerHTML = "2 + 2 = " + a
}
// this is for the subtraction operator
function subtraction() {
    var a = 2 - 4;
    document.getElementById("Math2").innerHTML = "2 - 4 = " + a
}
// this is for the multiplication operator
function multiplication() {
    var a = 2 * 4;
    document.getElementById("Math3").innerHTML = "2 * 4 = " + a
}
// this is for the division operator
function division() {
    var a = 2 / 4;
    document.getElementById("Math4").innerHTML = "2 / 4 = " + a
}
// this is to show that we can do multiple operations in one line.
function moreMath() {
    var a = 20 / 4 - (10 * 2);
    document.getElementById("Math5").innerHTML = "20 divided by 4 minus 10 multiplied by 2 equals: " + a
}
// this is for the modulus operator
function modulusOperator() {
    var a = 27 % 2;
    document.getElementById("Math6").innerHTML = "the remainder of 27 divided by 2 is : " + a
}
// this is for the negation operator
function negationOperator() {
    var a = 27;
    document.getElementById("Math7").innerHTML = "the negation of 27 : " + -a
}
// this is for the increment operator
function increment() {
    var a = 5;
    a++;
    document.getElementById("Math8").innerHTML = a
}
// this is for the decrement operator
function decrement() {
    var a = 5;
    a--;
    document.getElementById("Math9").innerHTML = a
}

// this is for demonstration of how to use the Math object and its methods.
function randomGenerator() {
    var a = Math.random() * 100;
    document.getElementById("Math10").innerHTML = a
}
function floor() {
    var a = Math.floor(2.624);
    document.getElementById("Math11").innerHTML = a
}   
