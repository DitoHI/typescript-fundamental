"use strict";
var GenericNumber = /** @class */ (function () {
    function GenericNumber() {
    }
    return GenericNumber;
}());
var aNumber = new GenericNumber();
aNumber.add = function (x, y) {
    return x + y;
};
console.log("5 + 4 = " + aNumber.add(5, 4));
var aStrNum = new GenericNumber();
aStrNum.add = function (x, y) {
    return String(Number(x) + Number(y));
};
console.log("5 + 6 = " + aStrNum.add("5", "6"));
