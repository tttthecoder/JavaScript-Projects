
// This function is the event handler for the button and paragraph with the id of "btn"
function onClickEventHandler() {
    var text1 = "This is our first text for the button. "
    var text2 = "This is our second text for the button"
    document.getElementById('btn').innerText = text1 + text2
}
// this is the function event handler for the paragraph element with the id of "concatenate".
function displayTheParagraph() {
    var sentence = 'This is a paragraph to be displayed on click!'
    sentence += " This part is for the concatenation operation."
    document.getElementById('concatenate').innerHTML = sentence
}