//start by naming your functions, promt user, if yes, ask for name, 
let name;
const startGame = () => {
    const play = prompt("do you want to play a game?");
    if (play.toLowerCase() === "no" || playGame.toLowerCase() === "n") {
        console.log("Goodbye");
    } else if (play.toLowerCase() === "yes" || playGame.toLowerCase() === "y") {
       const name = prompt("Enter your name");
       startCombat(name);
    }
}

const startCombat = (name) => {
    let player = 40;
    let Grant = 10;
    let playerWins = 0;

    while (player >= 0 && playerWins <=3) {

        if (Grant <= 0) {
            Grant = 10;
            playerWins ++;
            console.log(`${name} has beaten Grant. ${name} must win ${3 - playerWins} more time(s).` );
        } if (playerWins === 3) {
            console.log(name + " has won game!");
            break;
        } if (player <=0){
            console.log("Grant has won the game!");
            break;
        }

        player -= getDamage();
        Grant -= getDamage();
        console.log(`Grant has ${Grant} health`);
        console.log(`${name} has ${player} health`);


        const getDamage = () => {
            return Math.floor(Math.random() * 5) + 1;
        };


    }
    
}