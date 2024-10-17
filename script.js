// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return `${this.make} ${this.model}`;
};

function SportsCar(make, model, topSpeed) {
    Car.call(this, make, model); // Call Car constructor
    this.topSpeed = topSpeed;
}

SportsCar.prototype = Object.create(Car.prototype);
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

it('should create a SportsCar instance and verify properties', () => {
    cy.visit(baseUrl + "/main.html");

    cy.window().then(win => {
        const SportsCar = win.SportsCar;
        const car = new SportsCar("Ferrari", "Testarossa", 200);
        
        expect(car.make).to.equal("Ferrari");
        expect(car.model).to.equal("Testarossa");
    });
});

cy.window().then(win => {
    console.log(win.SportsCar); // Check if the SportsCar constructor is available
    const SportsCar = win.SportsCar;
    const car = new SportsCar("Ferrari", "Testarossa", 200);
    
    expect(car.make).to.equal("Ferrari");
    expect(car.model).to.equal("Testarossa");
});



function Car(make, model) {}

function SportsCar(make, model, topSpeed) {}

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
