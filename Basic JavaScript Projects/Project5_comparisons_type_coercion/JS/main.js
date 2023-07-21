//  This is for the typeof operator. 
var text = "this is a string";
document.write("The type of the variable text is: ", typeof text)

// This is for the type coersion operation.
document.write("<br> <br>", "result for the addition of '12' + 5: ", "12" + 5)
// This is for displaying the NaN value.
document.write("<br> <br>", "result for the division of 0/0 is: ", 0 / 0)
// This is for utilizing the isNaN function.
document.write("<br> <br>", "Is 0.4 not a number? ", isNaN(0.4))
// This is for utilizing the isNaN function.
document.write("<br> <br>", "Is 'this is a string' not a number? ", isNaN('this is a string'))
// This is for showing the infinity values.
function showInfinity() {
    document.getElementById("infinity").innerHTML = 2E310
}
function showNegativeInfinity() {
    document.getElementById("negativeInfinity").innerHTML = -2E310
}
// This is for the boolean operators < and >.

document.write("<br> <br>", "Is 5 greater than 2? ", 5 > 2)
document.write("<br> <br>", "Is 5 less than 3? ", 5 < 3)
// this is for the console.log() method. 

console.log(2 + 2)
console.log(2 > 2)

// this is for the double equal signs.

document.write("<br> <br>", "result for the comparision of 5 = 5 is: ", '5' == 5.0)
document.write("<br> <br>", "result for the comparision of 5 = 10 is: ", 5 == 10)

// this is for showing how the triple equal signs work. 
document.write("<br> <br>", "result for the comparision of the number 5 and number 5 is : ", 5 === 5.0)
document.write("<br> <br>", "result for the comparision of the number 5 and string 'text' is : ", 5 === 'text')
document.write("<br> <br>", "result for the comparision of the number 5 and string '5' is : ", 5 === '5')
document.write("<br> <br>", "result for the comparision of the number 5 and number 6 is : ", 5 === 6)
// this is for showing how the And and Or operators work. 
document.write("<br> <br>", "result for the expression 5 > 2 and 10 < 10 is : ", 5 > 2 && 10 < 10)
document.write("<br> <br>", "result for the expression 5 > 2 and 10 = 10 is : ", 5 > 2 && 10 == 10)
document.write("<br> <br>", "result for the expression 15 > 2 or 10 = 10 is : ", 15 > 2 || 10 == 10)
document.write("<br> <br>", "result for the expression 15 < 2 or 10 > 10 is : ", 15 < 2 || 10 > 10)


//The not operator's action.
document.write("<br> <br>", "result for the expression (not (15 < 2)) is : ", !(15 < 2))
document.write("<br> <br>", "result for the expression (not (15 > 2)) is : ", !(15 > 2))






