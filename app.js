class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        console.log("Beep.");
    }
    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}`);
    }
}

const myFirstVehicle = new Vehicle("Honda", "Monster Truck", 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
    }
    numWheels() {
        console.log("4");
    }
}

const myFirstCar = new Car("Toyota", "Corolla", 2005);
myFirstCar.numWheels();
myFirstCar.honk();
myFirstCar.toString();

class Motorcycle extends Vehicle {
    constructor(make, model, year, numWheels) {
        super(make, model, year);
    }
    numWheels() {
        console.log("2");
    }
    revEngine() {
        console.log("VROOM!!!");
    }
}

const myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
myFirstMotorcycle.toString();
myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
myFirstMotorcycle.numWheels();

//constructor accepts arugument of capacity which becomes the limiter of how many items can be pushed onto the array
class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}