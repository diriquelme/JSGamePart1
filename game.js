
let wins = 0;
let p1HP= 40;
let grantHP = 10;
let play = "";
let attack = "";

function playGame(){
    playGame = prompt("Do you want to play a game?");
    if (playGame == "no") {
  console.log("Ok, see you next time");
    } else if (playGame == "yes") {
  const p1 = prompt("Enter your name");
  console.log("Hi " + p1 + " let's the battle begin!");
    }
}

  function damageStatus() {
      p1HP -= Math.floor((Math.random() * 5) +1);
      grantHP -= Math.floor((Math.random() * 5) +1);
}
damageStatus();

function startGame() {
    while (play) {
        attack = prompt("Attack or quit");
        if (attack == "attack") {
            damageStatus();
            console.log(`${p1} has ${p1HP} health left.`);
            console.log(`Grant has ${grantHP} health left.`);
        if (grantHP <= 0) {
            wins++;
            grantHP = 10;
        if (wins === 3) {
            console.log(`${p1} wins the game.`);
            break;
        } else {
            console.log(`Grant has been defeated. ${p1} has to beat Grant ${3 - wins} more time(s).`);
        }
        }
        if (p1HP <= 0) {
            console.log(`${p1} has been defeated.`);
            break;
            }
        } else {
            return;
        }
    }
 }
 startGame();

 const userHealth = (name,startingHealth) => {

    const decreaseHealth = () => {
      startingHealth -= Math.floor(Math.random() *2) + 1;
      //console.log(startingHealth);
      console.log(`${name}'s health is: ${startingHealth}`);
    }
    return decreaseHealth;
  }
  
  const myHealth = userHealth('Ivan',40);
  const grantHealth = userHealth('Grant',10);
  grantHealth();
  myHealth();
  grantHealth();
  myHealth();
  grantHealth();
  myHealth();
  grantHealth();
  myHealth();
  grantHealth();
  myHealth();
  grantHealth();
  myHealth();
  grantHealth();
  myHealth();


