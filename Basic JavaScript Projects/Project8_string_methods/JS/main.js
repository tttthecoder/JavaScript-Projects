// string concatenation operation. 
function full() {
    var part1 = 'I have '
    var part2 = 'made this '
    var part3 = 'into a complete '
    var part4 = 'sentence.'
    var whole_sentence = part1 + part2 + part3 + part4;
    document.getElementById('concatenate').innerHTML = whole_sentence;
}
// slice method operation. 
function sliceMethod() {
    var sentence = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio harum reiciendis voluptatum, adipisci ut fugiat autem. Maxime quam dicta nihil perspiciatis. Ab, ea odio reiciendis ut praesentium nihil non exercitationem!"
    // slice up the string.
    var section = sentence.slice(0, 5);
    document.getElementById('slice').innerHTML = section
}

// declare a variable and use the search and toUpperCase methods. 
var text = "This is a string to work with"
console.log(text, '-->', 'Uppercase version: ', text.toUpperCase())
console.log('The location of "is" is : ', text.search('is'))

// toString method.
function stringMethod() {
    var X = 110;
    document.getElementById("numberToString").innerHTML = X.toString()
}

// toPrecision method.
function precisionMethod() {
    var X = 1234.4214131231;
    document.getElementById("precision").innerHTML = X.toPrecision(6)
}

// toFixed() method
var n = 123.12512312
console.log(n.toFixed(2))
// valueOf() method. 
var text = new String('this is a string object')
console.log('variable text 1 has type of', typeof (text))
var text2 = text.valueOf()
console.log('variable text 2 now has type of', typeof (text2), 'and has value:', text2)
