const Player = require('./Player');
const Human = require('./Human');
const AI = require('./Ai');
const prompt = require('prompt-sync')();

class Game {
    constructor(){
        // this.player1 = new Human("Player 1");
        // this.player2 = new Human("Player 2");
        //this.cpu = new Ai("AI");
        let startMenu = prompt('Welcome to RPSLR. Select "1" for Player vs Player. Select "2" for Player vs Computer:  ');
            if (startMenu === "1") {
                this.player1 = new Human;
                console.log('Ready Player 1');
                this.player2 = new Human;
                console.log('Ready Player 2');
            }
                else if (startMenu === "2") {
                    this.player1 = new Human;
                    console.log('Ready Player 1');
                    this.player2 = new Ai;
                    console.log('Ready Computer');
                }
                else {
                    console.log('!!! Invalid Input - Please try again !!!')
                }
        }
    }
    function run() {
        //Human.chooseItem();
        let player1Choice = this.player1.chooseItem();
        let player2Choice = this.player2.chooseItem();
        if (player1Choice === this.player1.choiceCollection[0] && player2Choice === this.player2.choiceCollection[2]) {
            console.log(this.player1.name + "wins!" + "Score: ", this.player1.score);
            this.player1.score++;
        }
            else if (player2Choice === this.player2.choiceCollection[0] && player1Choice === this.player1.choiceCollection[2]) {
                console.log(this.player2.name + "wins!" + "Score: ", this.player2.score);
                this.player2.score++;
        }
            else if (player1Choice === this.player1.choiceCollection[1] && player2Choice === this.player2.choiceCollection[0]) {
                console.log(this.player1.name + "wins!" + "Score: ", this.player1.score);
                this.player1.score++;
        }
            else if (player2Choice === this.player2.choiceCollection[1] && player1Choice === this.player1.choiceCollection[0]) {
                console.log(this.player2.name + "wins!" + "Score: ", this.player2.score);
                this.player2.score++;
         }

    }
module.exports = Game;