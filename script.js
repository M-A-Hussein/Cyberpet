import inquirer from 'inquirer';

class Animal {
    constructor(name) {
        this.name = name;
        this.health = 100;
        this.hunger = 100;
        this.affection = 60;
        this.hygiene = 100;
        this.play = 70;
    }
    drinks() {
        this.health += 5;
        return this;
    }
    eats() {
        this.health += 5;
        this.hunger += 10;
        console.log(`${this.name}'s health is ${this.health}`);
        return this;
    }
    stats() {
        return console.table({
            name: this.name,
            health: this.health,
        });
    }
    fullStats() {
        return console.table({
            name: this.name,
            health: this.health,
            hunger: this.hunger,
            affection: this.affection,
            hygiene: this.hygiene,
            play: this.play 
        });
    }
}


class Dog extends Animal {
    constructor(name, happy) {
        //Dog specific properties here
        super (name, happy);
        this.happy = happy;
    }
    //Dog specific methods
    playBall() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is happy`);
        return this;
    }
    walks() {
        console.log(`Taking ${this.name} for a walk, they are ${this.happy}`);
        this.health += 10;
        return this;
    }
}


class Cat extends Animal {
    constructor(name, content) {
        
        super(name, content);
        this.content = content;
    }
    
    playWool() {
        this.health += 10;
        this.hunger -= 10;
        console.log(`${this.name} is happy`);
        return this;
    }
    
    naps() {
        console.log(`${this.name} is taking a lovely nap, they are ${this.content}`);
        this.health += 10;
        return this;
    }
}