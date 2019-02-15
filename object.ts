// simple object
var randVals = {x: 1, y: 2, z: 3};

var { x, y, z } = randVals;
console.log(`${x} ${y} ${z}`);

[x, y, z] = [z, y, x];
console.log(`Switch : ${x} ${y} ${z}`);

// spread operator
function theSum(x: number, y: number, z: number): void {
    console.log(`Sum: ${x + y + z}`);
}

var args: [number, number, number] = [4, 5, 6];
theSum(...args);

// enum
enum Emotion {
    Happy = 1,
    Sad,
    Angry
}

var myFeeling = Emotion.Happy;
myFeeling = 1;
