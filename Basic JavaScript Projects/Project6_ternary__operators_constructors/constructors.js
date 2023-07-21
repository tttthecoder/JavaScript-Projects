

function Vehicle(make, model, year, color) {
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}

var Jack = new Vehicle('Dodge', 'Viper', 2020, 'red');
var Emily = new Vehicle('Jeep', 'Trail Hawk', 2019, 'white and black');
var Erik = new Vehicle('Ford', 'Pinto', 1971, 'mustard');

function myFunction() {
    document.getElementById("keywordsAndConstructors").innerHTML = 'Erik drives a ' + Erik.vehicleColor + "-colored " + Erik.vehicleModel + " manufactured in " + Erik.vehicleYear;

}

console.log(Jack)



