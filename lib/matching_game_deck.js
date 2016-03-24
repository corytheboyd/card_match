import Deck from './deck'
import Card from './card'

class MatchingGameDeck extends Deck {
  constructor() {
    var cards = [
      new Card('2'), new Card('2'), new Card('2'), new Card('2'),
      new Card('3'), new Card('3'), new Card('3'), new Card('3'),
      new Card('4'), new Card('4'), new Card('4'), new Card('4'),
      new Card('5'), new Card('5'), new Card('5'), new Card('5'),
      new Card('6'), new Card('6'), new Card('6'), new Card('6'),
      new Card('7'), new Card('7'), new Card('7'), new Card('7'),
      new Card('8'), new Card('8'), new Card('8'), new Card('8'),
      new Card('9'), new Card('9'), new Card('9'), new Card('9'),
      new Card('10'), new Card('10'), new Card('10'), new Card('10'),
      new Card('J'), new Card('J'), new Card('J'), new Card('J'),
      new Card('Q'), new Card('Q'), new Card('Q'), new Card('Q'),
      new Card('K'), new Card('K'), new Card('K'), new Card('K'),
      new Card('A'), new Card('A'), new Card('A'), new Card('A')
    ]
    super(cards)
  }
}

export default MatchingGameDeck