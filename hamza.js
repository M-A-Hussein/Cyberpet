import inquirer from 'inquirer';

 //array list of all pets 
 const petList = ["Cat", "Dog", "Parrot", "Rabbit"];


const questions = [
    {
        type: 'list',
        name: 'petType',
        message: "What's your name?",
        choices: petList
    },
    {
        type: 'input',
        name: 'getName',
        message: "What would you like to name your pet?"
    }
]

// use inquirer to prompt the questions in the questions array in the terminal
const response = await inquirer.prompt(questions)
// create instance of PetShop class passing the name typed in the terminal
 console.log(`You chose a ${response.petType} and named it ${response.getName}`)


let affection = 50;
let Hygenie = 70;
let Hunger = 70;

// writes pets stats live
 const livePetStat = () => {
    process.stdout.clearLine();
    process.stdout.cursorTo(10);
    process.stdout.write(`${response.getName}'s: Affection: ${affection} Hygenie: ${Hygenie} Hunger: ${Hunger}`);
}

//pet loses affection gradually every 10 seconds
let countDown1 = setInterval(loseAffection, 500); 
// pet loses hygenie gradually every 2 seconds
let countDown2 = setInterval(loseHygenie, 2000);
// pet loses hunger gradually every 4 seconds
let countDown3 = setInterval(loseHunger, 4000);


function loseAffection() {
    if(affection == 39) {
    console.log(` ${response.getName} is losing affection`);
    livePetStat();
    affection--;
    }
    else if(affection == 0){
        clearInterval(countDown1);
        failConditionCheck();        
    }
    else {
      // lowers Affection by 1
    affection--;
    livePetStat();
    }
}

function loseHygenie() {
    if(Hygenie == 0){

    clearInterval(countDown2);
    console.log(` ${response.getName} is very dirty`);
    failConditionCheck();
    affection = affection -20
    }
    else{
    // lowers Hygenie by 1
    Hygenie--
    livePetStat();
    }
}

function loseHunger() {
    if(Hunger == 0){
    clearInterval(countDown3);
    console.log(` ${response.getName} is very hungry`);
    affection = affection -20
    }
    else{
    Hunger--;
    livePetStat();
    }
}


const failConditionCheck = () => {
    if(affection == 0){
    clearInterval(countDown1);
    clearInterval(countDown2);
    clearInterval(countDown3);
    console.log(`\n ${response.getName} ran away`);
    }
    else {
        livePetStat();
    }
}