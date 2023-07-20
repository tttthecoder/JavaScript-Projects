// Create a dictionary.
var student = {
    firstName: 'Peter',
    lastName: 'Pham',
    grade: '9',
    class: '9a',
    hobbies: ['watch movies', "playing games", "jogging"],
}
// This is to show how to access a value in a given dictionary.
function getStudentName() {
    document.getElementById('Dictionary').innerHTML = 'The key-value pair is firstName - ' + student.firstName
}
// This is to show how to delete a value in a given dictionary.
function deleteGrade() {
    deleted = student.grade;
    delete student.grade;
    document.getElementById('Dictionary2').innerHTML = 'The deleted value was: ' + deleted
}
