const ValidCardSuits = /S|H|D|C/
const ValidCardRanks = /2|3|4|5|6|7|8|9|10|J|Q|K|A/

class Card {
  constructor(rank, suit) {
    this._rank = rank
    this._suit = suit

    if (!suit.match(ValidCardSuits)) {
      throw new Error(`Invalid suit '${this.suit}'`)
    }

    if (!rank.match(ValidCardRanks)) {
      throw new Error(`Invalid rank '${this.rank}'`)
    }
  }

  get rank() {
    return this._rank
  }

  get suit() {
    return this._suit
  }
}

Card.deserialize = (serialized) => {
  var tokens = serialized.split(':')

  if (tokens.length !== 2) {
    throw new Error(`Malformed data '${serialized}'`)
  }

  return new Card(tokens[0], tokens[1])
}

export default Card
