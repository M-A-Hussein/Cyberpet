
let affection = Math.round(Math.random()*200);
console.log(`Affection: ${affection}`);



function checkMaxStat(check){
    if (check >= 100) {
        check = 100;
        console.log("condition 100")
        return check;
    }
    else if (check <= 0){
        check = 0;
        console.log("condition 0")
        return check;
    }
}

checkMaxStat(affection);
console.log(`Affection: ${affection}`);

