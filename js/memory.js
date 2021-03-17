class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    if (!this.cards) {
      return undefined;
    }

    for (let i = 0; i < this.cards.length; i++) {
      let rand = Math.trunc(Math.random() * (i + 1));
      let shuffledValue = this.cards[i];
      this.cards[i] = this.cards[rand];
      this.cards[rand] = shuffledValue;
    }
    return this.cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) {
      this.pairsGuessed++;
      return true;
    } else {
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === 12 ? true : false;
  }
}