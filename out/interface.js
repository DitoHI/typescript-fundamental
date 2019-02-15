"use strict";
var superman = {
    realName: "Clark Kent",
    superName: "Superman"
};
var superheroes = [];
superheroes.push(superman);
superheroes.push({
    realName: 'Bruce Wayne',
    superName: 'Batman'
});
console.log(superheroes);
var Car = /** @class */ (function () {
    function Car(wheels) {
        this.wheels = wheels;
    }
    Car.prototype.drive = function () {
        console.log("The car drives with " + this.wheels + " wheels");
    };
    return Car;
}());
var Bicycle = /** @class */ (function () {
    function Bicycle(wheels) {
        this.wheels = wheels;
    }
    Bicycle.prototype.drive = function () {
        console.log("The bicycle drives with " + this.wheels + " wheels");
    };
    return Bicycle;
}());
var car = new Car(4);
var bike = new Bicycle(2);
car.drive();
bike.drive();
function GetWheels(veh) {
    return veh.drive();
}
GetWheels(car);
GetWheels(bike);
