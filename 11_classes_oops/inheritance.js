class car {
    constructor(vehicleType){
        this.vehicleType = vehicleType;
    }

    vehicle(){
        return this.vehicleType;
    }
}

class model extends car {
    constructor(vehicleType, brand, engine){
        super(vehicleType);
        this.brand = brand;
        this.engine = engine;
    }

    vehicleSpecification(){
        return `Type : ${this.vehicleType} \nBrand : ${this.brand} \nEngine : ${this.engine}`;
    }
}

const cyberTruck = new model("4 wheels", "Tesla", "electric");
console.log(cyberTruck.vehicleSpecification());
console.log(cyberTruck.vehicle());