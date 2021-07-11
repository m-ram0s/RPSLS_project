const Player = require('./Player')
const prompt = require('prompt-sync')();

class Human extends Player {
    constructor(name){
        super(name);
        this.name = name;
        this.choiceCollection = [
            "Rock",
            "Paper",
            "Scissors",
            "Lizard",
            "Spock"
        ];
        this.score = 0;
    }
    chooseItem(){
        console.log(this.name + 'Make a Selection: ')
        let chosenItem = prompt("\nRock = 1\nPaper =2\nScissors = 3\nLizard =  4\nSpock = 5");
        if (chosenItem === '1'){
            selection = this.choiceCollection[0];
            return selection;
        }
        else if (chosenItem === '2'){
            selection = this.choiceCollection[1];
            return selection;
        }
        else if (chosenItem === '3'){
            selection = this.choiceCollection[2];
            return selection;
        }
        else if (chosenItem === '4'){
            selection = this.choiceCollection[3];
            return selection;
        }
        else if (chosenItem === '5');{
            selection = this.choiceCollection[4]
            return selection;
        }
        return selection;
    }
}
module.exports = Human;  