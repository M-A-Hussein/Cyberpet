import inquirer from 'inquirer';
import chalk, { Chalk } from 'chalk';

class Animal {
    constructor(name){
        // properties
        this.name = name;
    }
    // ------------------------------ Feed Method ------------------------------
    feedPet(){
        // Below 100
        if (this.hunger < 100){
            // ----\/----
            this.affection += 10;
            // ----/\----
            // ----\/----
            this.hunger += 20;
            // ----/\----
            this.hygiene -= 5;
            this.play -= 5;
            this.pet -= 5;
            log(`\nYou fed ${this.name}.`);
            log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                chalk.greenBright(`\nAffection: +10\nHunger: + 20`)+
                chalk.red(`\nHygiene: -5\nPlay: -5\nPet: -5\n`));
            this.CheckStats();
            // Loops Question2
            this.CheckLow();
        }
        // Above 100 or equal to 100
        else if (this.hunger >= 100){
            // ----\/----
            this.affection -= 10;
            // ----/\----
            // ----\/----
            this.hunger = 100;
            // ----/\----
            this.hygiene -= 5;
            this.play -= 5;
            this.pet -= 5;
            log(chalk.bold(`\n${this.name} does not want eat!`));
            log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                chalk.red(`\nAffection: -10\nHunger: Full\nHygiene: -5\nPlay: -5\nPet: -5\n`));
            this.CheckStats();
             // Loops Question2            
            this.CheckLow();            
        }
        else{
            log(error)
        }
    }
    // ------------------------------ Clean Method ------------------------------
    cleanPet(){
        // if Hygiene is below 100 clean pet
        if (this.hygiene < 100){
            // ----\/----
            this.affection += 10;
            // ----/\----
            this.hunger -= 5;
            // ----\/----
            this.hygiene += 20;
            // ----/\----
            this.play -= 5;
            this.pet -= 5;
            log(`\nYou clean ${this.name}.`);
            log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                chalk.greenBright(`\nAffection: +10\nHygiene: + 20`)+
                chalk.red(`\nHunger: -5\nPlay: -5\nPet: -5\n`));
            this.CheckStats();
            // Loops Question2
            this.CheckLow();
        }
        // if above 100 or equal to 100
        else if (this.hygiene >= 100){
            // ----\/----
            this.affection -= 10;
            // ----/\----
            this.hunger -= 5;
            // ----\/----
            this.hygiene = 100;
            // ----/\----
            this.play -= 5;
            this.pet -= 5;
            log(chalk.bold(`\n${this.name} does not want to be cleaned!`));
            log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                chalk.red(`\nAffection: -10\nHygiene: Full\nHunger: -5\nPlay: -5\nPet: -5\n`));
            this.CheckStats();
            // Loops Question2
            this.CheckLow();
        }
        else{
            log("error");
        }
    }
    // ---------------------------
    // playPet in Class Extentions
    // ---------------------------
    // ------------------------------ Petting Method ------------------------------
    petPet(){
        if (this.pet < 100){
            // ----\/----
            this.affection += 10;
            // ----/\----
            this.hunger -= 5;
            this.hygiene -= 5;
            this.play -= 5;
            // ----\/----
            this.pet += 20;
            // ----/\----
            log(`\nYou pet ${this.name}.`);
            log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                chalk.greenBright(`\nAffection: +10\nPet: + 20`)+
                chalk.red(`\nHunger: -5\nHygiene: -5\nPlay: -5\n`));
            this.CheckStats();
            // Loops Question2
            this.CheckLow();
        }
        else if (this.pet >= 100){
            // ----\/----
            this.affection -= 10;
            // ----/\----
            this.hunger -= 5;
            this.hygiene -= 5;
            this.play -= 5;
            // ----\/----
            this.pet = 100;
            // ----/\----
            log(chalk.bold(`\n${this.name} does not want to be petted!`));
            log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                chalk.red(`\nAffection: -10\nPet: Full \nHunger: -5\nHygiene: -5 \nPlay: -5\n`));
            this.CheckStats();
            // Loops Question2
            this.CheckLow();
        }
        else{
            log("error");
        }
    }
    // ------------------------------ Fail Method ------------------------------
    // Checks if Pet Affection is 0 or Hunger is 0 below if not it loops question
    failCondition(){
        // if hunger and affection is 0 pet dies
        if(this.affection <= 0 && this.hunger <= 0){
            this.hunger = 0;
            this.affection = 0;
            log(chalk.red(`Affection: ${this.affection}`))
            log(chalk.red(`Hunger: ${this.hunger}`))
            log(chalk.red.bold(`${[this.name]} the ${animalPicked} ran away and died!`));
            petsOwned++
            //Loop whole game asks if you want another pet
            this.reset();
        }
        else if(this.affection <= 0 && this.hunger > 0){
            this.affection = 0;
            log(chalk.red(`Affection: ${this.affection}`))
            log(chalk.red.bold(`${[this.name]} the ${animalPicked} has ran away!`));
            petsOwned++
            //Loop whole game asks if you want another pet
            this.reset();
        }
        else if(this.hunger <= 0 && this.affection > 0){
            this.hunger = 0;
            log(chalk.red(`Hunger: ${this.hunger}`))
            log(chalk.red.bold(`${[this.name]} the ${animalPicked} has died!`));
            petsOwned++
            //Loop whole game asks if you want another pet
            this.reset();
        }
        else{
            // loops question if no fail conditons are met
            ask2();
        }
    }
    // Shows Pet Stats
    Status(){
        let petValue = `???`
        // if affection is High you know pet value
        if (this.affection >= 70){
            petValue = this.pet;
            this.CheckStats();
            log(chalk.blue.bold.underline(`\n${this.name}'s Stats:`))
            log(chalk.red(`Hunger: ${this.hunger}%`) + 
            chalk.magenta(`\nAffection: ${this.affection}%`) + 
            chalk.green(`\nHygiene: ${this.hygiene}%`) + 
            chalk.cyan(`\nPlay: ${this.play}%`) + 
            chalk.white(`\nPet: ${petValue}%`));
            log(``);
            this.failCondition();
        }
        // if affection is Low you don't know pet value
        else if (this.affection < 70){
            petValue = `???`
            this.CheckStats();
            log(chalk.blue.bold.underline(`\n${this.name}'s Stats:`))
            log(chalk.red(`Hunger: ${this.hunger}%`) + 
            chalk.magenta(`\nAffection: ${this.affection}%`) + 
            chalk.green(`\nHygiene: ${this.hygiene}%`) + 
            chalk.cyan(`\nPlay: ${this.play}%`) + 
            chalk.white(`\nPet: ${petValue}`));
            log(``);
            this.CheckLow();
        }
        
        
    }
    CheckLow(){
        function petLow(){
            if (pet.pet <=0){
                pet.pet = 0;
                pet.affection -=10
                log(chalk.red.bold(`Pet: ${pet.pet}\n Affection: -10`))
                return; 
            }
            else{
                return;
            }
        }
        function playLow(){
            if (pet.play <=0){
                pet.play = 0;
                pet.affection -=10
                log(chalk.red.bold(`Play: ${pet.play}\n Affection: -10`))
                return; 
            }
            else{
                return;
            }
        }
        function hygieneLow(){
            if (pet.hygiene <=0){
                pet.hygiene = 0;
                pet.affection -=10
                log(chalk.red.bold(`Hygiene: ${pet.hygiene}\n Affection: -10`))
                return;        
            }
            else{
                return;
            }
        }
        petLow();
        playLow();
        hygieneLow();
        setTimeout(() => {
            this.failCondition();            
        }, 2000);
        
    }
    // These check if Pet stats are Above 100 or below 0
    CheckStats (){
        function checkMaxHunger(){
            if (pet.hunger > 100) {
                return pet.hunger = 100;
            }
            else if(pet.hunger <= 0){
                return pet.hunger = 0;
            }
            else{
                return;
            }
        };
        function checkMaxAffection(){
            if (pet.affection >= 100) {
                return pet.affection = 100;
            }
            else if(pet.affection <= 0){
                return pet.affection = 0;
            }
            else{
                return;
            }
        };
        function checkMaxHygiene(){
            if (pet.hygiene >= 100) {
                return pet.hygiene = 100;
            }
            else if(pet.hygiene <= 0){
                return pet.hygiene = 0;
            }
            else{
                return;
            }
        };
        function checkMaxPlay(){
            if (pet.play >= 100) {
                return pet.play = 100;
            }
            else if(pet.play <= 0){
                return pet.play = 0;
            }
            else{
                return;
            }
        };
        function checkMaxPet(){
            if (pet.pet >= 100) {
                return pet.pet = 100;
            }
            else if(pet.pet <= 0){
                return pet.pet = 0;
            }
            else{
                return;
            }
        };
        // calls all functions
        checkMaxHunger();
        checkMaxAffection();
        checkMaxHygiene();
        checkMaxPlay();
        checkMaxPet();
    }
    async reset(){
        const question3 = [
            {
                type: 'list',
                name: 'YesNo',
                message: chalk.yellowBright.bold("  Do you want to try another Pet?"),
                choices: ["Yes","No"]
            }
        ]
        const response = await inquirer.prompt(question3)
        if(response.YesNo == "Yes"){
            ask1();
        }
        else if(response.YesNo == "No"){
            if(petsOwned <= 1){
                log(chalk.yellowBright.bold(`You have owned ${petsOwned} Pet.`))
                log(chalk.red.bold("\nGameOver\n")+chalk.bold(`\nCredits:`)+(`\nHamza S\nMohammed A\nHasan K\nSasha R`));   
            }
            else if(petsOwned > 1){
                log(chalk.yellowBright.bold(`You have owned ${petsOwned} Pets.`))
                log(chalk.red.bold("GameOver")+chalk.bold(`\nCredits:`)+(`\nHamza S\nMohammed A\nHasan K\nSasha R`));  
            }
        }
        else{
            log(`error`);
        }
    }
    // asks if you want to sell pet
    async sellPet(){
        const question4 = [
            {
                type: 'list',
                name: 'YesNo',
                message: chalk.yellowBright.bold(`  Are you sure you want to sell ${this.name} the ${animalPicked}?`),
                choices: ["No","Yes"]
            }
        ]
        const response = await inquirer.prompt(question4)
        if(response.YesNo == "Yes"){
            petsOwned++
            // if one or less than one pet was owned
            if(petsOwned <=1){
                log(chalk.yellowBright.bold(`You sold ${this.name} the ${animalPicked}!`))
                log(chalk.yellowBright.bold(`You have owned ${petsOwned} Pet.`))
                setTimeout(() => {
                // asks if they want another pet
                this.reset();                
                }, 2000);
            }
            // if more than one pet was owned
            else if(petsOwned > 1){
                log(chalk.yellowBright.bold(`You sold ${this.name} the ${animalPicked}!`))
                log(chalk.yellowBright.bold(`You have owned ${petsOwned} Pets.`))
                setTimeout(() => {
                // asks if they want another pet
                this.reset();                
                }, 2000);
            }
            
        }
        else if(response.YesNo == "No"){
            this.CheckLow();             
        }
        else{
            log(`error`);
        }
    }

};
    // ------------------------------ Dog Class Extention ------------------------------ 
    class Dog extends Animal {
        constructor(name) {
            //Dog specific properties here
            super (name);
            // Dog Base stats affection 50 - 70,  hunger 80 - 100,  hygiene 40 - 60, play 30 - 60, pet 40 - 70
            this.affection = randomNum(50,70);
            this.hunger = randomNum(80,100);
            this.hygiene = randomNum(40,60);
            this.play = randomNum(30,60);
            this.pet = randomNum(40,70);
        }
        // ------------------------------ Play Ball Method ------------------------------ 
        playBall(){
            if (this.play < 100){
                // ----\/----
                this.affection += 10
                // ----/\----
                this.hunger -= 5;
                this.hygiene -= 5;
                // ----\/----
                this.play += 20;
                // ----/\----
                this.pet -= 5;
                log(`\nYou play ball with ${this.name}.`);
                log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                    chalk.greenBright(`\nAffection: +10\nPlay: + 20`)+
                    chalk.red(`\nHunger: -5\nHygiene: -5\nPet: -5\n`));
                this.CheckStats();
                // Loops Question2
                this.failCondition();
            }
            else if (this.play >= 100){
                // ----\/----
                this.affection -= 10
                // ----/\----
                this.hunger -= 5;
                this.hygiene -= 5;
                // ----\/----
                this.play = 100;
                // ----/\----
                this.pet -= 5;
                log(chalk.bold(`\n${this.name} does not want to play!`));
                log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                    chalk.red(`\nAffection: -10\nPlay: Full \nHunger: -5\nHygiene: -5 \nPet: -5\n`));
                this.CheckStats();
                // Loops Question2
                this.CheckLow();             
            }
            else{
                log("error");
            }
        }
    };
    // ------------------------------ Cat Class Extention ------------------------------ 
    class Cat extends Animal {
        constructor(name) {
            //Cat specific properties here
            super (name);
            // Cat Base stats affection 40 - 70,  hunger 80 - 100,  hygiene 70 - 100, play 30 - 70, pet 60 - 100
            this.affection = randomNum(40,70);
            this.hunger = randomNum(80,100);
            this.hygiene = randomNum(70,100);
            this.play = randomNum(30,70);
            this.pet = randomNum(60,100);
        }
        // ------------------------------ Play Wool Method ------------------------------ 
        playWool(){
            // If play is less than 100
            if (this.play < 100){
                 // ----\/----
                 this.affection += 10;
                 // ----/\----
                 this.hunger -= 5;
                 this.hygiene -= 5;
                 // ----\/----
                 this.play += 20;
                 // ----/\----
                 this.pet -= 5;
                 log(`\nYou let ${this.name} play with a ball of wool.`);
                 log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                     chalk.greenBright(`\nAffection: +10\nPlay: + 20`)+
                     chalk.red(`\nHunger: -5\nHygiene: -5\nPet: -5\n`));
                 this.CheckStats();
                 // Loops Question2
                 this.failCondition();
            }
            // If play is greater than 100 or equal
            else if(this.play >= 100){
                // ----\/----
                this.affection -= 10;
                // ----/\----
                this.hunger -= 5;
                this.hygiene -= 5;
                // ----\/----
                this.play = 100;
                // ----/\----
                this.pet -= 5;
                log(chalk.bold(`\n${this.name} does not want to play!`));
                log(chalk.blue.bold.underline(`\n${this.name}'s Stat Changes:`)+
                    chalk.red(`\nAffection: -10\nPlay: Full \nHunger: -5\nHygiene: -5 \nPet: -5\n`));
                this.CheckStats();
                // Loops Question2
                this.failCondition();  
            }
            else{
                log("error");
            }
        }
    };

// creates empty variable for ask1 
let pet = "";
// lets you use log() instead of console.log()
let log = console.log;
// creats empty variable for ask1 animal type for ask2
let animalPicked = "";
// makes any strings first letter capitalized
function capital(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
// PetCounter logs which pet you are up to
let petsOwned = 0;
// Random number limit
function randomNum(min, max){
    let number = 0
    number = Math.floor(Math.random() * (max - min) + min); 
    return number; 
}

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

async function ask1 (){
    const question1 = [
        {
            type: 'list',
            name: 'petType',
            message: "What pet do you want?",
            choices: ["Dog","Cat"]
        },
        {
            type: 'input',
            name: 'petName',
            message: "What would you like to name your pet?"
        }
    ]
    const response = await inquirer.prompt(question1)
    if(response.petType == "Dog"){
        animalPicked = "Dog"
        //                              name,           
        pet = new Dog (capital(response.petName));
        // Ask for Pet Action
        ask2();
    }
    else if(response.petType == "Cat"){
        animalPicked = "Cat"
         //                              name,      
           
        pet = new Cat (capital(response.petName));
        // Ask for Pet Action
        ask2();
        
    }
}

// Asks for Pet and Pet Name
await ask1();

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

// Asks for action
async function ask2(){
    // Dog Questions
    if(animalPicked == "Dog"){
        const question2 = [
            {
                type: 'list',
                name: 'action',
                message: `What do you want do with ${pet.name}?`,
                choices: ["Feed",
                        "Clean",
                        "PlayBall",
                        "Pet",
                        "-Check Stats-",
                        "-----!SELL PET!-----"]
            }
        ]
        const response = await inquirer.prompt(question2)
        if(response.action == "Feed"){
            pet.feedPet();            
        }
        else if(response.action == "Clean"){
            pet.cleanPet();
        }
        else if(response.action == "PlayBall"){
            pet.playBall();            
        }
        else if(response.action == "Pet"){
            pet.petPet();            
        }
        else if (response.action == "-Check Stats-"){
            pet.Status();
        }
        else if (response.action == "-----!SELL PET!-----"){
            pet.sellPet();
        };
    }
     // Cat Questions
    else if(animalPicked === "Cat"){
        const question2 = [
            {
                type: 'list',
                name: 'action',
                message: `What do you want do with ${pet.name}?`,
                choices: ["Feed",
                        "Clean",
                        "PlayWool",
                        "Pet",
                        "-Check Stats-",
                        "-----!SELL PET!-----"]
            }
        ]
        const response = await inquirer.prompt(question2)
        if(response.action == "Feed"){
            pet.feedPet();  

        }
        else if(response.action == "Clean"){
            pet.cleanPet();
    
        }
        else if(response.action == "PlayWool"){
            pet.playWool();
            
        }
        else if(response.action == "Pet"){
            pet.petPet();            
        }
        else if (response.action == "-Check Stats-"){
            pet.Status();    
        }
        else if (response.action == "-----!SELL PET!-----"){
            pet.sellPet();
        }
    
    }
}






