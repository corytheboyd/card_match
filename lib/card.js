class Card {
  constructor(rank) {
    this._faceUp = false
    this._rank = rank
    if (this.numericRank() === -1) {
      throw Error("Invalid rank '" + rank + "'")
    }
  }

  get faceUp() {
    return this._faceUp
  }

  get rank() {
    return this._rank
  }

  setFaceUp() {
    this._faceUp = true
  }

  setFaceDown() {
    this._faceUp = false
  }

  rankIsEqual(card) {
    return this.numericRank() === card.numericRank()
  }

  numericRank() {
    switch(this.rank) {
      case '2':
        return 2
      case '3':
        return 3
      case '4':
        return 4
      case '5':
        return 5
      case '6':
        return 6
      case '7':
        return 7
      case '8':
        return 8
      case '9':
        return 9
      case '10':
        return 10
      case 'J':
        return 11
      case 'Q':
        return 12
      case 'K':
        return 13
      case 'A':
        return 14
      default:
        return -1
    }
  }
}

export default Card
