"use strict";
var employees = ["Bob", "Sally", "Sam"];
var randArray = [5, 6, 7, 8];
for (var rand in randArray) {
    console.log(rand);
}
var strArray = randArray.map(String);
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    console.log(val);
}
console.log(employees);
