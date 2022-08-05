import inquirer from 'inquirer';


let actions = {
    play:'',
    feed: '',
    pet: '',
    clean: ``
};


let playStat = 60;
let affection = 50;
let hygiene = 50;
let hunger = 50;

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
    if(playStat < 100){
        console.log("you play with the pet");
        affection += 10;
        playStat = 100;
        hygiene -= 20;
        console.log(playStat);   
        ask();       
    } 
    else if(playStat >= 100){            
        console.log("doesn't want to play");
        affection -= 10;
        console.log(playStat);
        console.log(`Affection ${affection}`);
        ask();
    }
    else{
        console.log("error");
    }
};

// add more functions for each stat
//feed things that are going to change are - hunger / affection
function checkFeedStat () {
    if(hunger < 100){
        console.log("you have fed the pet");
        console.log('It is now full');
        affection += 10;
        hunger = 100;
        hygiene -= 10;
        console.log(hunger);   
        ask();       
    }
    else if(hunger >= 100){            
        console.log("Doesn't want to eat");
        affection -= 10
        console.log(hunger);
        console.log(`Affection ${affection}`);
        ask();
    }
    else{
        console.log("error");
    }
};

//feed things that are going to change are - affection /hygiene
function checkPetStat(){
    if( affection < 100){
        console.log("You have petted your pet");
        console.log('It is now Happy');
        affection = 100;
        playStat -= 10
        hygiene -= 10;
        console.log(affection);   
        ask();
    }
    else if(affection >= 100){            
        console.log("Doesn't want to be petted anymore");
        affection -= 10;
        console.log(affection);
        console.log(`Hygiene ${hygiene}`);
        ask();
    }
    else{
        console.log("error");
    }
};

//feed things that are going to change are - hygiene / playStat
function  checkCleanStat(){
    if( hygiene < 100){
        console.log("You have cleaned your pet");
        console.log('Pet is now Germ Free');
        affection -= 10;
        playStat -= 10
        hygiene = 100;
        console.log(hygiene);   
        ask();
    }
    else if(hygiene >= 100){            
        console.log("Doesn't want to be cleaned again");
        affection -= 10;
        console.log(hygiene);
        console.log(`Play ${playStat}`);
        ask();
    }
    else{
        console.log("error");
    }
};

function failConditions (){
   if (hygiene == 0){
        affection -= 30;
    }
    else if(playStat == 0){
        affection -= 30;
    }
};

function gameOver (){
    if ( hunger == 0){
        console.log('Pet has died');
    }else if (affection == 0){
        console.log(`Your pet has ran away`);
    }
};

ask();

