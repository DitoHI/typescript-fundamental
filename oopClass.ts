class Animal {
    public favFood: string = "";

    static numOfAnimals: number = 0;

    constructor(private name: string, private owner: string) {
        Animal.numOfAnimals++;
    }

    ownerInfo() {
        console.log(`${this.name} is owned by ${this.owner}`);
    }

    static howManyAnimals(): number {
        return Animal.numOfAnimals;
    }

    private _weight: number = 0;

    get weight(): number {
        return this._weight;
    }

    set weight(weight: number) {
        this._weight = weight;
    }
}

var spot = new Animal("Spot", "Doug");

spot.ownerInfo();
spot.weight = 100;

console.log(`Spot's weight is ${spot.weight}`);
console.log(`# of Animals: ${Animal.howManyAnimals()}`);

class Dog extends Animal{
    constructor(name: string, owner: string) {
        super(name, owner);
        Dog.numOfAnimals++;
    }
}

var grover = new Dog("Grover", "Jimmy");

console.log(`# of Animals: ${Animal.howManyAnimals()}`);
console.log(`Is a Dog an Animal: ${grover instanceof Animal}`);
console.log(`Does grover have a name : ${'name' in grover}`);
