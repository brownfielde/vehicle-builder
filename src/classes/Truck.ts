// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// TODO: The Truck class should extend the Vehicle class and should implement the AbleToTow interface
class Truck extends Vehicle implements AbleToTow {
  vin: string;
  color: string;
  make: string;
  model: string;
  year: number;
  weight: number;
  topSpeed: number;
  wheels: Wheel[];
  towingCapacity: number;
  // TODO: Declare properties of the Truck class
  // TODO: The properties should include vin, color, make, model, year, weight, top speed, wheels, and towing capacity
  // TODO: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[]), towingCapacity (number)

  // TODO: Create a constructor that accepts the properties of the Truck class
    // TODO: The constructor should call the constructor of the parent class, Vehicle
    // TODO: The constructor should initialize the properties of the Truck class
    // TODO: The constructor should check if the wheels array has 4 elements and create 4 new default Wheel objects if it does not
  constructor(
    vin: string,
    color: string,
    make: string,
    model: string,
    year: number,
    weight: number,
    topSpeed: number,
    wheels: Wheel[],
    towingCapacity: number
  ) {
    super();
    this.vin = vin;
    this.color = color;
    this.make = make;
    this.model = model;
    this.year = year;
    this.weight = weight;
    this.topSpeed = topSpeed;
    this.towingCapacity = towingCapacity;
    this.wheels = wheels.length === 4 ? wheels : Array(4).fill(new Wheel());
  }
  // TODO: Implement the tow method from the AbleToTow interface
  tow(vehicle: Truck | Motorbike | Car): void {
    // TODO: Get the make an model of the vehicle if it exists
    // TODO: Check if the vehicle's weight is less than or equal to the truck's towing capacity
    // TODO: If it is, log that the vehicle is being towed
    // TODO: If it is not, log that the vehicle is too heavy to be towed
    const vehicleMake = vehicle.make;
    const vehicleModel = vehicle.model;
    if (vehicle.weight <= this.towingCapacity) {
      console.log(`Towing ${vehicleMake} ${vehicleModel}`);
    }
    else {
      console.log(`The ${vehicleMake} ${vehicleModel} cannot be towed'); `);
    }
  }

  // TODO: Override the printDetails method from the Vehicle class
    // TODO: The method should call the printDetails method of the parent class
    // TODO: The method should log the details of the Truck
    // TODO: The details should include the VIN, make, model, year, weight, top speed, color, towing capacity, and wheels

    override printDetails(): void {
    super.printDetails();
    console.log(`Truck VIN: ${this.vin}`);
    console.log(`Truck Make: ${this.make}`);
    console.log(`Truck Model: ${this.model}`);
    console.log(`Truck Year: ${this.year}`);
    console.log(`Truck Weight: ${this.weight}`);
    console.log(`Truck Top Speed: ${this.topSpeed}`);
    console.log(`Truck Color: ${this.color}`);
    console.log(`Truck Towing Capacity: ${this.towingCapacity}`);   
    console.log(`Truck Wheels:`);
    this.wheels.forEach((wheel, index) => {
      console.log(`Wheel ${index + 1}: Diameter: ${wheel.getDiameter}, Tire Brand: ${wheel.getTireBrand}`);
    }
    );  
    

  } 
}

// Export the Truck class as the default export
export default Truck;
