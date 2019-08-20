//create player blueprint 
class Player {
  //constructor creates the object and I am specifying what I want to create within the object inside the parenthesis
  constructor(name, health){
    this.name = name;
    this.health = health;
    //when we add a method within a class i don't need to separate by commas like in an object
  }
 
}
let playerOne = new Player ('diana', 40);
let opponentPlayer = new Player ('Grant', 10);

 getDamage = () => {
  return Math.floor((Math.random() *5) +1);
    //`${this.name} ${this.health}`;
}


startGame = () => {
const play = prompt("Do you want to play a game?");
if (play === 'yes'){
  const name = prompt('what is your name');
  console.log("Hi " + name + " let's begin combat!");
  startCombat(name, play);

}else if (play === 'no') {
  console.log('goodbye')
}
}
startCombat = (name,play) => {
  
    let wins = 0;
    while(play === "yes"){
      const attack = prompt ('do you want to attack or quit?');
      if(attack === 'attack'){
          playerOne.health-=getDamage();
          opponentPlayer.health-=getDamage();
          console.log(playerOne);
          console.log(opponentPlayer);
      }
      else if(attack === 'quit'){
        break;
        console.log('goodbye')
      }
    }
  }

startGame();


