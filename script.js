// TASK1
class Car {
    constructor(Brand, Model, currentFuel, fuelFor1Km, Millage) {
        this.Brand = Brand,
            this.Model = Model,
            this.currentFuel = currentFuel,
            this.fuelFor1Km = fuelFor1Km,
            this.Millage = Millage
    }
    Drive(distance) {
        let fuel = this.fuelFor1Km * distance
        if (this.currentFuel >= fuel) {
            this.Millage = this.Millage + distance;
            this.currentFuel = this.currentFuel - fuel
            console.log("Masinin hal-hazirki benzini:"+" "+this.currentFuel);
            console.log("Indiye qeder nece km mesafe qet etidiyi:"+" "+this.Millage);

        }
        else {
            console.log("xeta mesafe ucun benzininiz kifayet deyildir!!!");
        }
    }

}
let car1 = new Car('kia', ' 10.89 ', 800, 3, 10)
let car2 = new Car('BMW', ' 3 Series ', 40, 2, 10)
car1.Drive(30);
car2.Drive(60);


// TASK2
class Product{
    constructor(name,price){
        this.mname=mname,
        this.price=price
    }
}
class milk extends Product{
    
    constructor(fatPercent){
        super(mname,price);
        this.fatPercent=fatPercent,
        this.mname=mname,
        this.price=price
    }
    avgfat(){
      
    }
}
let fatPercent1=milk('Buttermilk',1.5,10)
let fatPercent2=milk('Soya milk',2.5,10)
let fatPercent3=milk('Oat milk',3,100)
