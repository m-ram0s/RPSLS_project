const Player = require('./Player');
const prompt = require('prompt-sync')();

class Ai extends Player {
    constructor(name){
        super(name);
        this.score = 0;
        this.choiceCollection = [
            'Rock',
            'Paper',
            'Scissors',
            'Lizard',
            'Spock'
        ];
        this.name = 'HAL 9000';
    } 
    chooseItem() {
        //console.log('${CPU make a selection: ')
        let chosenItem = this.choiceCollection[Math.floor(Math.random() * this.choiceCollection.length)];
        return chosenItem;
    }
}
module.exports = Ai;