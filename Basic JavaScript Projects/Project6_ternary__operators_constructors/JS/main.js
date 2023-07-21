
// This is for the ternary operation. 
function rideFunction() {
    var height, canRide;
    height = document.getElementById('height').value;
    canRide = (height < 52) ? "You are too short" : "You are tall enough";
    document.getElementById('ride').innerHTML = canRide + ' to ride.';
}



// This is for using the class contructor and the keywords new and this. 
function Car(make, model, year, color){
    this.color = color;
    this.year = year;
    this.model = model;
    this.make = make;

}
    
var car1 = new Car('Dodge', 'Viper', 2020, 'red')
// this define the function to be invoked by the html element.
function displayACar() {
    document.getElementById("New_and_This").innerHTML = 'Erik drives a ' + car1.color + "-colored " + car1.model + " manufactured in " + car1.year;

}
// This is for showing nested functions.
function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    // this define a nested function.
    function Count() {
        starting_point = 9;
        // another nested function.
        function plus_one() { starting_point += 1 };
        plus_one();
        return starting_point
    }
}

