// Complete the js code
// Car Constructor Function
function Car(make, model) {
    this.make = make;  // Initialize the make property
    this.model = model; // Initialize the model property
}

// Adding the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`; // Return a string combining make and model
};

// SportsCar Constructor Function
function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call the Car constructor to initialize make and model
    this.topSpeed = topSpeed; // Initialize the topSpeed property
}

// Set the prototype of SportsCar to an instance of Car
SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar; // Correctly set the constructor reference

// Adding the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed; // Return the top speed of the sports car
};

// Testing the implementation
let myCar = new Car('Toyota', 'Corolla');
console.log(myCar.getMakeModel()); // Outputs: Toyota Corolla

let mySportsCar = new SportsCar('Ferrari', 'F50', 202);
console.log(mySportsCar.getMakeModel()); // Outputs: Ferrari F50
console.log(mySportsCar.getTopSpeed()); // Outputs: 202


// function Car(make, model) {}

// function SportsCar(make, model, topSpeed) {}

// // Do not change the code below
// window.Car = Car;
// window.SportsCar = SportsCar;
