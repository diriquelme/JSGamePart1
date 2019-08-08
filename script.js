const playerName = "";
const p2Name = "Grant";

//this will start the game and store p1 names when user enters their name
const playGame = prompt("do you want to play a game?");
    while (playGame.toLowerCase() === "no" || playGame.toLowerCase() === "n") {
        console.log("Goodbye");
    }   
    if (playGame.toLowerCase() === "yes" || playGame.toLowerCase() === "y") {
        p1Name = prompt("Enter your name");
    }

    let p1Hp = 40;
//    p2Name = p2;
    let p2Hp = 10;
    let wins = 0;
//    let random = Math.floor(Math.random() * 2) + 1;
//    let x = 1;

    function decreaseHealth (p1Name,p2Name){
        return Math.floor(Math.random() * 2) + 1;
    }

    while (playGame === "yes") {
        if (wins === 3) {
            //console.log("Winner");
            break;
        }
        if (playGame === "yes") {
            p1Hp -= decreaseHealth();
            p2Hp -= decreaseHealth();
            console.log(p1Name + "'s health points: " + p1Hp);
            console.log(p2Name + "'s health points: " + p2Hp);
        }
        if (p1Hp <= 0) {
            console.log("You lose!");
            break;
          }
        //if I set it to 0 it will allow health points to be negative
        if (p2Hp <= 0) { 
            wins++;
            p2Hp = 10;
            console.log("You won!");
        }
    }
