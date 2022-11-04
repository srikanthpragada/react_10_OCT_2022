// Superclass 
class Person {
    constructor(name, age = 30) {
        this.name = name
        this.age = age
    }

    getCategory() {
        if (this.age < 30)
            return "Young";
        else
            if (this.age < 60)
                return "Middle-aged";
            else
                return "Old";
    }

    getInfo() {
        return `${this.name} is ${this.getCategory()}`
    }
}


// Subclass 
class Player extends Person {

    constructor(name, age = 30, game = 'Football') {
        super(name, age) // call constructor of superclass 
        this.game = game
    }

    // Overriding 
    getInfo() {
        return `${this.name} is ${this.getCategory()} and playing ${this.game}`
    }

}

var c = new Player("Dhoni", 40, "Cricket");
console.log(c.getInfo())
