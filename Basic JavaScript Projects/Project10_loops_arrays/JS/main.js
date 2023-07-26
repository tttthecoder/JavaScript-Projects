// Create a white loop
function Call_Loop() {
    var x = 1
    var count = 0
    while (x < 41) {
        count += "<br>" + x;
        x++
    }
    // display the counting numbers.
    document.getElementById("Loop").innerHTML = count;
}

// using the length property
function length_function() {
    document.getElementById("length").innerHTML = document.getElementById("length").innerHTML.length + " characters"
}

// using the for loop.
var instruments = ['guitar', 'drums', 'piano', 'bass', 'violin', 'trumpet', 'flute']
var content = ''
var y
function for_loop() {
    for (y = 0; y < instruments.length; y++)
        content += instruments[y] + '<br>'
    document.getElementById('listOfInstruments').innerHTML = content.toUpperCase();

}
// Using an array
var studentNames = ['Peter', 'Jannet', 'John', 'Rob']
function array_function() {
    var Class = ''
    for (s = 0; s < studentNames.length; s++)
        Class += '<br>' + studentNames[s]
    document.getElementById('array').innerHTML = 'The students in our class are: ' + Class
}
//Create a const 
const student = { name: 'Tin', grade: '12', className: 'Physics' }
function constant_function() {
    student.GPA = 3.6
    student.grade = '11'
    document.getElementById('constant').innerHTML = "He is one of the students in " + student.className + " class." + " His GPA so far is " + student.GPA + " and his grade is " + student.grade
}

// using the let keyword.
let txt = "This value is declared using a let keyword."
document.getElementById("letKeyword").innerHTML = txt

// Object assignment. 
let car = {
    make: 'Dodge', model: 'Viper', year: "2021", color: "red", description: function () {
        return "The car is a " + this.year + " " + this.color + " " + this.make + " " + this.model
    }
}

document.getElementById('car').innerText = car.description()
