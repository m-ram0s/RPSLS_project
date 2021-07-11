const Player = require('./Player')

class Ai extends Player {
    constructor(name){
        super(name);
        this.name = HAL;
        this.choiceCollection = [
            "Rock",
            "Paper",
            "Scissors",
            "Lizard",
            "Spock"
        ];
    } 
    chooseItem() {
        //console.log('${CPU make a selection: ')
        let chosenItem = this.choiceCollection[Math.floor(Math.random() * this.choiceCollection.length)];
        return chosenItem;
    }
}

module.exports = Ai;