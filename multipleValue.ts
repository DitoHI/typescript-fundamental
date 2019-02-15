var employees: string[] = ["Bob", "Sally", "Sam"];
var randArray = [5, 6, 7, 8];

for (var rand in randArray) {
    console.log(rand);
}
var strArray = randArray.map(String);

for (var val of strArray) {
    console.log(val);
}

console.log(employees);
