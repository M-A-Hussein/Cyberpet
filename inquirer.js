import inquirer from 'inquirer';

class Animal {
    constructor(name) {
        this.name = name;
        this.hunger = 100;
        this.affection = 60;
        this.hygiene = 100;
        this.play = 70;
        this.pet = 50;
    }
}

class Dog extends Animal {
    constructor(name) {
        //Dog specific properties here
        super (name);
    }
}


class Cat extends Animal {
    constructor(name) {
        super(name);
    }
}

// sets empty variable
let petChosen = ""

petChosen = new Cat("Dan")

console.log(petChosen.affection)



let actions = {
    play:'',
    feed: '',
    pet: '',
    clean: ``
};


async function ask (){
    const questions = [
        {
            type: 'list',
            name: 'action',
            message: 'What do you want to do?',
            choices: [...Object.keys(actions)]
        }
    ]
    
    const response = await inquirer.prompt(questions);
    console.log(`you chose to ${response.action}`);
    if(response.action == "play"){
        failConditions();
        gameOver();
        checkplayStat();
    }
    else if(response.action == "feed"){
        failConditions();
        gameOver();
        checkFeedStat();
    }
    else if (response.action == "pet"){
        failConditions();
        gameOver();
        checkPetStat();
    }
    else if (response.action == "clean"){
        failConditions();
        gameOver();
        checkCleanStat();
    }
};

// checks if pet has played
function checkplayStat(){
    if(petChosen.play < 100){
        console.log("You have played with the pet");
        console.log(`+20 Play  +10 Affection  -10 Pet  -10 Hygiene  -10 Hunger`);
        petChosen.affection += 10;
        petChosen.pet -= 10;
        petChosen.play += 20;
        petChosen.hygiene -= 20;
        console.log(petChosen.play);   
        ask();       
    } 
    else if(petChosen.play >= 100){            
        console.log("doesn't want to play");
        petChosen.affection -= 10;
        console.log(petChosen.play);
        console.log(`Affection ${petChosen.affection}`);
        ask();
    }
    else{
        console.log("error");
    }
};

// add more functions for each stat
//feed things that are going to change are - hunger / affection
function checkFeedStat () {
    if(petChosen.hunger < 100){
        console.log(`+20 Pet +10 Affection  -10 Play -10 Hygiene -10 Hunger`);
        console.log("you have fed the pet");
        console.log('It is now full');
        petChosen.affection += 10;
        petChosen.hunger += 20;
        petChosen.hygiene -= 10;
        console.log(petChosen.hunger);   
        ask();       
    }
    else if(petChosen.hunger >= 100){            
        console.log("Doesn't want to eat");
        petChosen.affection -= 10;
        console.log(petChosen.hunger);
        console.log(`Affection ${petChosen.affection}`);
        ask();
    }
    else{
        console.log("error");
    }
};

//feed things that are going to change are - affection /hygiene
function checkPetStat(){
    if(petChosen.pet < 100){
        console.log(`+20 Pet  +10 Affection  -10 Play  -10 Hygiene  -10 Hunger`);
        console.log("You have petted your pet");
        petChosen.affection += 10;
        petChosen.play -= 10;
        petChosen.hygiene -= 10;
        petChosen.hunger -=10;
        petChosen.pet +=20;
        console.log(petChosen.affection);   
        ask();
    }
    else if(petChosen.pet >= 100){            
        console.log("Doesn't want to be petted anymore");
        petChosen.affection -= 10;
        petChosen.hunger -=10;
        petChosen.play -= 10
        petChosen.hygiene -= 10;
        console.log(petChosen.affection);
        console.log(`Hygiene ${petChosen.hygiene}`);
        ask();
    }
    else{
        console.log("error");
    }
};

//feed things that are going to change are - hygiene / play
function  checkCleanStat(){
    if(petChosen.hygiene < 100){
        console.log(`+20 Hygiene -10 Affection  -10 Play -10 Hygiene -10 Hunger`);
        console.log("You have cleaned your pet");
        console.log('Pet is now Germ Free');
        petChosen.affection -= 10;
        petChosen.play -= 10
        petChosen.hygiene += 20;
    
        console.log(petChosen.hygiene);   
        ask();
    }
    else if(petChosen.hygiene >= 100){            
        console.log("Doesn't want to be cleaned again");
        petChosen.affection -= 10;
        console.log(petChosen.hygiene);
        console.log(`Play ${petChosen.play}`);
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

checkMax(petChosen.affection);
checkMax(`affection`)
function checkMaxAffection(petChosen){
    if (petChosen.check >= 100) {
        petChosen.check = 100;
    }
}




