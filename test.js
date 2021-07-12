const Player = require('./Player');
const Human = require('./Human');
const prompt = require('prompt-sync')()
const Computer = require('./Computer')
class Game{
    constructor(){
        // this.playerOne ;
        // this.playerTwo ;

        console.log(`Welcome Contestant!!!\n To select Human vs Human choose option '1'.\n To choose Human vs AI choose option '2'`);
        let gameMenu = prompt();
        switch(gameMenu){
          case '1':
            this.playerOne = new Human(prompt('Player #1 enter Name:'));


            this.playerTwo = new Human(prompt('Player #2 Enter Name:'));
            break;
          case '2':
            this.playerOne = new Human(prompt('Player #1 Enter Name:'));


            this.playerTwo = new Computer; 
        }
        // this.weapon = [];
        // this.weapon.push(new Weapon('Rock'));
        // this.weapon.push(new Weapon('Paper'));
        // this.weapon.push(new Weapon('Scissors'));
        // this.weapon.push(new Weapon('Lizard'));
        // this.weapon.push(new Weapon('Spock'));
    }


    runGame(){
        this.displayRules();

        do {
          let playerOneWeapon = this.playerOne.chooseWeapon();
          let playerTwoWeapon = this.playerTwo.chooseWeapon();

          if(playerOneWeapon === this.playerOne.weaponLists[0] && (playerTwoWeapon === this.playerTwo.weaponLists[2]  || this.playerTwo.weaponLists[3])) {
            console.log(this.playerOne.name + " wins this round!", this.playerOne.score);
            this.playerOne.score++;
          }
          else if(playerTwoWeapon === this.playerTwo.weaponLists[0] && (playerOneWeapon === this.playerOne.weaponLists[2] || this.playerOne.weaponLists[3])) {
            console.log(this.playerTwo.name + " wins this round!", this.playerTwo.score);
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[1] && (playerTwoWeapon === this.playerTwo.weaponLists[0] || this.playerTwo.weaponLists[4])){
            console.log(this.playerOne.name + " wins this round!", this.playerOne.score);
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[1] && (playerOneWeapon === this.playerOne.weaponLists[0] || this.playerOne.weaponLists[4])){
            console.log(this.playerTwo.name + " wins this round!", this.playerTwo.score);
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[2] && (playerTwoWeapon === this.playerTwo.weaponLists[1] || this.playerTwo.weaponLists[3])){
            console.log(this.playerOne.name + " wins this round!", this.playerOne.score);
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[2] && (playerOneWeapon === this.playerOne.weaponLists[1] || this.playerOne.weaponLists[3])){
            console.log(this.playerTwo.name + " wins this round!", this.playerTwo.score);
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[3] && (playerTwoWeapon === this.playerTwo.weaponLists[1] || this.playerTwo.weaponLists[4])){
            console.log(this.playerOne.name + " wins this round!", this.playerOne.score);
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[3] && (playerOneWeapon === this.playerOne.weaponLists[1] || this.playerOne.weaponLists[4])){
            console.log(this.playerTwo.name + " wins this round!", this.playerTwo.score);
            this.playerTwo.score++;
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[4] && (playerTwoWeapon === this.playerTwo.weaponLists[0] || this.playerTwo.weaponLists[2])){
            console.log(this.playerOne.name + " wins this round!", this.playerOne.score);
            this.playerOne.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[4] && (playerOneWeapon === this.playerOne.weaponLists[0] || this.playerOne.weaponLists[2])){
            console.log(this.playerTwo.name + " wins this round!", this.playerTwo.score);
            this.playerTwo.score++;
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[4] && playerOneWeapon === this.playerOne.weaponLists[4]){
            console.log("Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[3] && (playerOneWeapon === this.playerOne.weaponLists[3])){
            console.log("Tie!!! No Score");
          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[2] && (playerOneWeapon === this.playerOne.weaponLists[2])){
            console.log("Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[1] && (playerOneWeapon === this.playerOne.weaponLists[1])){
            console.log("Tie!!! No Score");

          }
          else if (playerTwoWeapon === this.playerTwo.weaponLists[0] && (playerOneWeapon === this.playerOne.weaponLists[0])){
            console.log("Tie!!! No Score");

          }
          else if (playerOneWeapon === this.playerOne.weaponLists[4] && playerTwoWeapon === this.playerTwo.weaponLists[4]){
            console.log("Tie!!! No Score");

          }
          else if (playerOneWeapon === this.playerOne.weaponLists[3] && (playerTwoWeapon === this.playerTwo.weaponLists[3])){
            console.log("Tie!!! No Score");
          }
          else if (playerOneWeapon === this.playerOne.weaponLists[2] && (playerTwoWeapon === this.playerTwo.weaponLists[2])){
            console.log("Tie!!! No Score");

          }
          else if (playerOneWeapon === this.playerOne.weaponLists[1] && (playerTwoWeapon === this.playerTwo.weaponLists[1])){
            console.log("Tie!!! No Score");

          }
          else if (playerOneWeapon === this.playerOne.weaponLists[0] && (playerTwoWeapon === this.playerTwo.weaponLists[0])){
            console.log("Tie!!! No Score");

          }
          else if (playerOneWeapon != this.playerOne.weaponLists.length && (playerTwoWeapon != this.playerTwo.weaponLists.length)){
            console.log("Please select another weapon!!");

          }

        } while(this.playerOne.score <=3 && (this.playerTwo.score <+3))

        this.displayGameWinner();
        this.runNewGame();
    }
    displayGameWinner(){
      if(this.playerOne.score === 3) {
        console.log(this.playerOne.name + " wins this game!");
      }
      else {(this.playerTwo.score === 3)
        console.log(this.playerTwo.name + " wins this game!");
      }

    }


    displayRules(){
        console.log("Welcome to the 'RPSLS' Tournament!")
        console.log("Two players will select a weapon and compare their results.")
        console.log("The winning weapon will earn that player a point");
        console.log("The first player to three points will win the game!");
      }

      runNewGame(){
        console.log(`Would you like to play again? 'Y' or 'N'`)
        let rerun = prompt().toLowerCase();
        switch(rerun){
          case 'y':
            this.runGame();
            break;
          case 'n':
            console.log('Thank You! Come Again! Bazinga!!!!!');
        }
      }
}

module.exports = Game;