"use strict";
var _a;
// simple object
var randVals = { x: 1, y: 2, z: 3 };
var x = randVals.x, y = randVals.y, z = randVals.z;
console.log(x + " " + y + " " + z);
_a = [z, y, x], x = _a[0], y = _a[1], z = _a[2];
console.log("Switch : " + x + " " + y + " " + z);
// spread operator
function theSum(x, y, z) {
    console.log("Sum: " + (x + y + z));
}
var args = [4, 5, 6];
theSum.apply(void 0, args);
// enum
var Emotion;
(function (Emotion) {
    Emotion[Emotion["Happy"] = 1] = "Happy";
    Emotion[Emotion["Sad"] = 2] = "Sad";
    Emotion[Emotion["Angry"] = 3] = "Angry";
})(Emotion || (Emotion = {}));
var myFeeling = Emotion.Happy;
myFeeling = 1;
