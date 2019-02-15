class GenericNumber<T> {
    add: ((val1: T, val2: T) => T) | undefined;
}

var aNumber = new GenericNumber<number>();

aNumber.add = function (x, y) {
    return x + y;
};

console.log(`5 + 4 = ${aNumber.add(5, 4)}`);

var aStrNum = new GenericNumber<string>();

aStrNum.add = function (x, y) {
    return String(Number(x) + Number(y));
};

console.log(`5 + 6 = ${aStrNum.add("5", "6")}`);
