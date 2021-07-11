
class Player {
    constructor(name) {
        this.name = name;
        this.choiceCollection = [
          "Rock",
          "Paper",
          "Scissors",
          "Lizard",
          "Spock"
      ];
      this.score = 0;
      this.chosenItem;
    }
  }

  module.exports = Player;