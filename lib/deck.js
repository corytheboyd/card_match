class Deck {
  constructor(cards) {
    this._cards = cards
  }

  get cards() {
    return this._cards
  }

  // Implements Fisher–Yates Shuffle
  // https://bost.ocks.org/mike/shuffle/
  shuffle() {
    var m = this.cards.length, t, i;

    // While there remain elements to shuffle…
    while (m) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = this.cards[m];
      this.cards[m] = this.cards[i];
      this.cards[i] = t;
    }
  }
}

export default Deck
