import Card from '../../lib/card'
import Deck from '../../lib/deck'

jest.unmock('../../lib/card')
jest.unmock('../../lib/deck')

describe('Deck', () => {
  describe('constructor', () => {
    it('sets cards from parameters', () => {
      var two = new Card('2', 'S')
      var ten = new Card('10', 'H')
      var ace = new Card('A', 'D')
      var deck = new Deck([two, ten, ace])
      expect(deck.cards.length).toEqual(3)
      expect(deck.cards).toContain(two)
      expect(deck.cards).toContain(ten)
      expect(deck.cards).toContain(ace)
    })
  })

  describe('shuffle', () => {
    var serializeCards = (cards) => {
      return cards.map(c => c.serialize()).join('')
    }

    it('randomizes order of cards in the deck', () => {
      var two = new Card('2', 'S')
      var three = new Card('3', 'H')
      var four = new Card('4', 'D')
      var five = new Card('5', 'C')
      var six = new Card('6', 'S')
      var seven = new Card('7', 'H')
      var eight = new Card('8', 'D')
      var deck = new Deck([two, three, four, five, six, seven, eight])

      var serializedCardsBefore = serializeCards(deck.cards)
      deck.shuffle()
      var serializedCardsAfter = serializeCards(deck.cards)
      expect(serializedCardsBefore).not.toEqual(serializedCardsAfter)
    })
  })
})
