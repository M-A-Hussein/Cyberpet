import inquirer from 'inquirer';


class Animal {
    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.affection = 60;
        this.hygiene = 100;
        this.play = 70;
    }

    // feed() {
    //     this.hunger += 5;
    //     return this;
    // }
    // playAction() {
    //     this.affection += 10;
    //     this.hunger -= 10;
    //     console.log(`${this.name}'s health is ${this.health}`);
    //     return this;
    // }
    // clean() {
    //     return console.table({
    //         name: this.name,
    //         affection: this.affection,
    //     });
    // }
    // pet() {
    //     return console.table({
    //         name: this.name,
    //         affection: this.health,
    //     });
    // }
    // fullStats() {
    //     return console.table({
    //         name: this.name,
    //         hunger: this.hunger,
    //         affection: this.affection,
    //         hygiene: this.hygiene,
    //         play: this.play,
    //     });
    // }
}

class Dog extends Animal {
    constructor(name) {
        //Dog specific properties here
        super (name);
    }
    //Dog specific methods

    // playBall() {
    //     this.health += 10;
    //     this.hunger -= 10;
    //     console.log(`${this.name} is happy`);
    //     return this;
    // }
    // walks() {
    //     console.log(`Taking ${this.name} for a walk, they are`);
    //     this.health += 10;
    //     return this;
    // }
}


class Cat extends Animal {
    constructor(name) {
        super(name);
    }
    // playWool() {
    //     this.health += 10;
    //     this.hunger -= 10;
    //     console.log(`${this.name} is happy ${this.affection}`);
    //     return this;
    // }
}

// sets empty variable
let petChosen = ""

 //array list of all pets 
 const petList = ["Cat", "Dog"];


const questions = [
    {
        type: 'list',
        name: 'petType',
        message: "What pet do you want?",
        choices: petList
    },
    {
        type: 'input',
        name: 'petName',
        message: "What would you like to name your pet?"
    }
]

// use inquirer to prompt the questions in the questions array in the terminal
const response = await inquirer.prompt(questions)
// create instance of Pet class passing the name typed in the terminal
if(response.petType == "Dog"){
    petChosen = new Dog(response.petName)
    console.log("You chose Dog " + petChosen.name)
    // petChosen.walks()
}
else if (response.petType == "Cat"){
    petChosen = new Cat(response.petName)
    console.log("You chose Cat " + petChosen.name)
}

console.log(`You chose a ${response.petType} and named it ${response.petName}`)


async function ask (){
    const questions = [
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: ["play","feed","pet","clean"]
        }
    ]
    
    const response = await inquirer.prompt(questions);
    console.log(`you chose to ${response.action}`);
    if(response.action == "play"){
        failConditions();
        gameOver();
        livePetStat();
        checkPlayStat();
    }
    else if(response.action == "feed"){
        failConditions();
        gameOver();
        livePetStat();
        checkFeedStat();
    }
    else if (response.action == "pet"){
        failConditions();
        gameOver();
        livePetStat();
        counter()
        checkPetStat();
    }
    else if (response.action == "clean"){
        failConditions();
        gameOver();
        livePetStat();
        checkCleanStat();
    }
};

// checks if pet has played
function checkPlayStat(){
    if(petChosen.play < 100){
        console.log(`\nYou play with the pet`);
        petChosen.affection += 10;
        petChosen.play = 100;
        petChosen.hygiene -= 20;
        console.log(petChosen.play);   
        ask();       
    } 
    else if(petChosen.play >= 100){            
        console.log(`\ndoesn't want to play`);
        petChosen.affection -= 10;
        console.log(petChosen.play);
        console.log(`\nAffection ${petChosen.affection}`);
        ask();
    }
    else{
        console.log("\nerror");
    }
};

// add more functions for each stat
//feed things that are going to change are - hunger / affection
function checkFeedStat () {
    if(petChosen.hunger < 100){
        console.log("\nyou have fed the pet");
        console.log('\nIt is now full');
        petChosen.affection += 10;
        petChosen.hunger = 100;
        petChosen.hygiene -= 10;
        console.log(hunger);   
        ask();       
    }
    else if(petChosen.hunger >= 100){            
        console.log(`\nDoesn't want to eat`);
        petChosen.affection -= 10
        console.log(petChosen.hunger);
        console.log(`\nAffection ${petChosen.affection}`);
        ask();
    }
    else{
        console.log("\nerror");
    }
};

//feed things that are going to change are - affection /hygiene
function checkPetStat(){
    if( petChosen.affection < 100){
        console.log(`\nYou have petted your pet`);
        console.log('\nIt is now Happy');
        petChosen.affection = 100;
        petChosen.play -= 10
        petChosen.hygiene -= 10;
        console.log(petChosen.affection);   
        ask();
    }
    else if(petChosen.affection >= 100){            
        console.log(`\nDoesn't want to be petted anymore`);
        petChosen.affection -= 10;
        console.log(petChosen.affection);
        console.log(`\nHygiene ${hygiene}`);
        ask();
    }
    else{
        console.log("\nerror");
    }
};

//feed things that are going to change are - hygiene / petChosen.play
function  checkCleanStat(){
    if( hygiene < 100){
        console.log(`\nYou have cleaned your pet`);
        console.log('\nPet is now Germ Free');
        petChosen.affection -= 10;
        petChosen.play -= 10
        petChosen.hygiene = 100;
        console.log(petChosen.hygiene);   
        ask();
    }
    else if(hygiene >= 100){            
        console.log(`Doesn't want to be cleaned again`);
        petChosen.affection -= 10;
        console.log(petChosen.hygiene);
        console.log(`\nPlay ${petChosen.play}`);
        ask();
    }
    else{
        console.log("error");
    }
};

function failConditions (){
   if (petChosen.hygiene == 0){
        petChosen.affection -= 30;
    }
    else if(petChosen.play == 0){
        petChosen.affection -= 30;
    }
};

function gameOver (){
    if ( petChosen.hunger == 0){
        console.log('Pet has died');
    }else if (petChosen.affection == 0){
        console.log(`Your pet has ran away`);
    }
};

ask();

// writes pets stats live
const livePetStat = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`${response.petName}'s: Affection: ${petChosen.affection} Hygenie: ${petChosen.hygiene} Hunger: ${petChosen.hunger}`);
}

let countDown1 = ""
let countDown2 = ""
let countDown3 = ""

// function counter(){
//     //pet loses affection gradually every 10 seconds
//     countDown1 = setInterval(loseAffection, 10000); 
//     // pet loses hygenie gradually every 2 seconds
//     countDown2 = setInterval(loseHygenie, 2000);
//     // pet loses hunger gradually every 4 seconds
//     countDown3 = setInterval(loseHunger, 4000);
//     ask ()
// }

function loseAffection() {
    if(petChosen.affection == 39) {
    console.log(` ${response.petName} is losing affection`);
    livePetStat();
    petChosen.affection--;
    }
    else if(petChosen.affection == 0){
        clearInterval(countDown1);
        failConditionCheck();        
    }
    else {
      // lowers Affection by 1
      petChosen.affection--;
    livePetStat();
    }
}

function loseHygenie() {
    if(petChosen.affection == 0){

    clearInterval(countDown2);
    console.log(` ${response.petName} is very dirty`);
    failConditionCheck();
    petChosen.affection -= 10
    }
    else{
    // lowers Hygenie by 1
    petChosen.hygiene--
    livePetStat();
    }
}

function loseHunger() {
    if(Hunger == 0){
    clearInterval(countDown3);
    console.log(` ${response.petName} is very hungry`);
    petChosen.affection -= 10
    }
    else{
    Hunger--;
    livePetStat();
    }
}


const failConditionCheck = () => {
    if(petChosen.affection == 0){
    clearInterval(countDown1);
    clearInterval(countDown2);
    clearInterval(countDown3);
    console.log(`\n ${response.petName} ran away`);
    }
    else {
        livePetStat();
    }
}