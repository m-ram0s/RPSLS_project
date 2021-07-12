const Player = require('./Player');
const Human = require('./Human');
const Ai = require('./Ai');
const prompt = require('prompt-sync')();

class Game {
    constructor(){  
        // this.player1 = new Human("Player 1");
        // this.player2 = new Human("Player 2");
        //this.cpu = new Ai("AI");
        let startGameMenu = prompt('Welcome to RPSLR. Select "1" for Player vs Player. Select "2" for Player vs Computer: ');
        console.log('\n');
            if (startGameMenu === "1") {
                this.player1 = new Human(prompt('Enter Player 1 name: '));
                console.log('Get Ready, ' + this.player1.name + '\n');
                this.player2 = new Human(prompt('Enter Player 2 name: '));
                console.log('Get Ready, ' + this.player2.name + '\n');
            }
                else if (startGameMenu === "2") {
                    this.player1 = new Human(prompt('Enter Player 1 name: '));
                    console.log('\nGet Ready, ' + this.player1.name + '\n');
                    this.player2 = new Ai;
                    console.log('Get Ready, ' + this.player2.name + '\n');
                }
                else {
                    console.log('!!! Invalid Input - Please try again !!!');
                    this.startGameMenu;
                }
    }
    
     run() {
        //Human.chooseItem();
        do {
        let player1Choice = this.player1.chooseItem();
        let player2Choice = this.player2.chooseItem();
        if (player1Choice === this.player1.choiceCollection[0] && player2Choice === this.player2.choiceCollection[2]) {
            this.player1.score++;
            console.log(player1Choice + ' crushes ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[0] && player1Choice === this.player1.choiceCollection[2]) {
                this.player2.score++;
                console.log(player2Choice + ' crushes ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[1] && player2Choice === this.player2.choiceCollection[0]) {
                this.player1.score++;
                console.log(player1Choice + ' covers ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');     
        }
            else if (player2Choice === this.player2.choiceCollection[1] && player1Choice === this.player1.choiceCollection[0]) {
                this.player2.score++;
                console.log(player2Choice + ' covers ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[2] && player2Choice === this.player2.choiceCollection[1]) {
                this.player1.score++;
                console.log(player1Choice + ' cuts ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[2] && player1Choice === this.player1.choiceCollection[1]) {
                this.player2.score++;
                console.log(player2Choice + ' cuts ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[0] && player2Choice === this.player2.choiceCollection[3]) {
                this.player1.score++;
                console.log(player1Choice + ' crushes ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[0] && player1Choice === this.player1.choiceCollection[3]) {
                this.player2.score++;
                console.log(player2Choice + ' crushes ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[3] && player2Choice === this.player2.choiceCollection[4]) {
                this.player1.score++;
                console.log(player1Choice + ' poisons ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[3] && player1Choice === this.player1.choiceCollection[4]) {
                this.player2.score++;
                console.log(player2Choice + ' poisons ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[4] && player2Choice === this.player2.choiceCollection[2]) {
                this.player1.score++;
                console.log(player1Choice + ' smashes ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[4] && player1Choice === this.player1.choiceCollection[2]) {
                this.player2.score++;
                console.log(player2Choice + ' smashes ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[2] && player2Choice === this.player2.choiceCollection[3]) {
                this.player1.score++;
                console.log(player1Choice + ' decapitates ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[2] && player1Choice === this.player1.choiceCollection[3]) {
                this.player2.score++;
                console.log(player2Choice + ' decapitates ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[3] && player2Choice === this.player2.choiceCollection[1]) {
                this.player1.score++;
                console.log(player1Choice + ' eats ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[3] && player1Choice === this.player1.choiceCollection[1]) {
                this.player2.score++;
                console.log(player2Choice + ' eats ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[1] && player2Choice === this.player2.choiceCollection[4]) {
                this.player1.score++;
                console.log(player1Choice + ' disproves ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[1] && player1Choice === this.player1.choiceCollection[4]) {
                this.player2.score++;
                console.log(player2Choice + ' disproves ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[4] && player2Choice === this.player2.choiceCollection[0]) {
                this.player1.score++;
                console.log(player1Choice + ' vaporizes ' + player2Choice + '! ' + this.player1.name + ' wins!' + ' - Score: ' + this.player1.score + ' for ' + this.player1.name + '\n');
        }
            else if (player2Choice === this.player2.choiceCollection[4] && player1Choice === this.player1.choiceCollection[0]) {
                this.player2.score++;
                console.log(player2Choice + ' vaporizes ' + player1Choice + '! ' + this.player2.name + ' wins!' + ' - Score: ' + this.player2.score + ' for ' + this.player2.name + '\n');
        }
            else if (player1Choice === this.player1.choiceCollection[0] && player2Choice === this.player2.choiceCollection[0]) {
                console.log("No winner! It's a tie! -- " + "Score: " + this.player1.name + ': ' + this.player1.score + ' - ' + this.player2.name + ': ' + this.player1.score + '\n');
            }
            else if (player1Choice === this.player1.choiceCollection[1] && player2Choice === this.player2.choiceCollection[1]) {
                console.log("No winner! It's a tie! -- " + "Score: " + this.player1.name + ': ' + this.player1.score + ' - ' + this.player2.name + ': ' + this.player1.score + '\n');
            }
            else if (player1Choice === this.player1.choiceCollection[2] && player2Choice === this.player2.choiceCollection[2]) {
                console.log("No winner! It's a tie! -- " + "Score: " + this.player1.name + ': ' + this.player1.score + ' - ' + this.player2.name + ': ' + this.player1.score + '\n');
            }
            else if (player1Choice === this.player1.choiceCollection[3] && player2Choice === this.player2.choiceCollection[3]) {
                console.log("No winner! It's a tie! -- " + "Score: " + this.player1.name + ': ' + this.player1.score + ' - ' + this.player2.name + ': ' + this.player1.score + '\n');
            }
            else if (player1Choice === this.player1.choiceCollection[4] && player2Choice === this.player2.choiceCollection[4]) {
                console.log("No winner! It's a tie! -- " + "Score: " + this.player1.name + ': ' + this.player1.score + ' - ' + this.player2.name + ': ' + this.player1.score + '\n');
            }

        } while (this.player1.score <= 3 && (this.player2.score <+ 3));
            this.gameWinner();
            this.startOver();

        }
    gameWinner() {
        if(this.player1.score === 3) {
            console.log(this.player1.name + ' wins the game!! : ' + this.player1.score + ' - ' + this.player2.score + '\n');
        }
            else if (this.player2.score === 3) {
            console.log(this.player2.name + ' wins the game!! : ' + this.player1.score + ' - ' + this.player2.score + '\n');
            }
    
    }
    startOver() {
        let newGame = prompt('Would you like to play another game? Select "1" for <Yes> --- "2" for <No>: ')
        console.log('\n');
        if (newGame === '1') {
            this.run();
        }
            else if (newGame === '2') {
                console.log('Thanks for playing RPSLS!');
            }
    }
}
module.exports = Game;