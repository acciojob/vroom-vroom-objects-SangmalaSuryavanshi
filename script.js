// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

// Adding the getMakeModel method to Car's prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    // Call the parent constructor to initialize make and model
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Set the prototype of SportsCar to an instance of Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

// Adding the getTopSpeed method to SportsCar's prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

const myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeModel()); // Output: Toyota Corolla

const mySportsCar = new SportsCar('Ferrari', '488', 211);
console.log(mySportsCar.getMakeModel()); // Output: Ferrari 488
console.log(mySportsCar.getTopSpeed()); // Output: 211

function Car(make, model) {}

function SportsCar(make, model, topSpeed) {}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
