class Person {
    constructor(name = 'Anon', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting() {
        return `Hi I am ${this.name}!`
    }

    getDescription() {
        return `Hi, I am ${this.name}. I am ${this.age} years old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();

        if (this.hasMajor()) {
            description += ` My major is ${this.major}.`;
        }

        return description;
    }
}

class Traveller extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation() {
        return !!this.homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();

        if (this.hasHomeLocation()) {
            greeting += ` I am visiting from ${this.homeLocation}.`
        }
        return greeting;
    }
}

const me = new Student('Ozzy', 35);
const you = new Student('Ozzy', 35, 'Music');
const meAgain = new Traveller('Ozzy', 35, 'Chicago');

console.log(me.getDescription());
console.log(you.getDescription());
console.log(meAgain.getGreeting());