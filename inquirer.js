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
    console.log(`you chose to ${response.action}`)
    if(response.action == "play"){
        checkplayStat();
    }
    else if(response.action == "feed"){
        
    }
    
}

// checks if pet has played
function checkplayStat(){
    if(playStat < 100 && affection > 0){
        console.log("you playStated with the pet");
        affection += 10;
        playStat += 20;
        hygiene -= 10;
        console.log(playStat);   
        ask()       
    }
    else if(playStat >= 100 && affection > 0 ){            
        console.log("doesn't want to play")
        affection -= 10
        console.log(playStat);
        console.log(`Affection ${affection}`);
        ask()
    }
    else if(affection <= 0 ){
        console.log(`affection: ${affection} so the pet ran away`)
    }
    else{
        console.log("error")
    };
}
// add more functions for each stat




// starts question
ask()














