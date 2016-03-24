import Deck from './deck'
import Card from './card'

class MatchingGameDeck extends Deck {
  constructor() {
    var cards = [
      new Card('2', 'S'), new Card('2', 'H'), new Card('2', 'D'), new Card('2', 'C'),
      new Card('3', 'S'), new Card('3', 'H'), new Card('3', 'D'), new Card('3', 'C'),
      new Card('4', 'S'), new Card('4', 'H'), new Card('4', 'D'), new Card('4', 'C'),
      new Card('5', 'S'), new Card('5', 'H'), new Card('5', 'D'), new Card('5', 'C'),
      new Card('6', 'S'), new Card('6', 'H'), new Card('6', 'D'), new Card('6', 'C'),
      new Card('7', 'S'), new Card('7', 'H'), new Card('7', 'D'), new Card('7', 'C'),
      new Card('8', 'S'), new Card('8', 'H'), new Card('8', 'D'), new Card('8', 'C'),
      new Card('9', 'S'), new Card('9', 'H'), new Card('9', 'D'), new Card('9', 'C'),
      new Card('10', 'S'), new Card('10', 'H'), new Card('10', 'D'), new Card('10', 'C'),
      new Card('J', 'S'), new Card('J', 'H'), new Card('J', 'D'), new Card('J', 'C'),
      new Card('Q', 'S'), new Card('Q', 'H'), new Card('Q', 'D'), new Card('Q', 'C'),
      new Card('K', 'S'), new Card('K', 'H'), new Card('K', 'D'), new Card('K', 'C'),
      new Card('A', 'S'), new Card('A', 'H'), new Card('A', 'D'), new Card('A', 'C')
    ]
    super(cards)
  }
}

export default MatchingGameDeck
