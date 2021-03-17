class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }
  shuffleCards() {
    if (!this.cards){
      return undefined;
    }
    // if (this.cards.length === 0) {
    //   return undefined;
    // }
      // -- To shuffle an array a of n elements (indices 0..n-1):
      // for i from n−1 downto 1 do
      //      j ← random integer such that 0 ≤ j ≤ i
      //      exchange a[j] and a[i]
      //       function entierAleatoire(min, max)
      // {
      //  return Math.floor(Math.random() * (max - min + 1)) + min;
      // }

      for (let i = 0; i < this.cards.length;i++){
        let rand = Math.trunc(Math.random() * (i + 1));
        let shuffledValue = this.cards[i];
        this.cards[i] = this.cards[rand];
        this.cards[rand] = shuffledValue;
      }
      return this.cards;
  }
  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2){
      this.pairsGuessed++;
      return true;
    }else{
      return false;
    }
  }
  isFinished() {
    return this.pairsGuessed === 12 ? true : false;
  }
}