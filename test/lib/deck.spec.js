import expect from 'expect'
import Card from '../../lib/card'
import Deck from '../../lib/deck'

describe('Deck', () => {
  describe('constructor', () => {
    it('sets cards from parameters', () => {
      var two = new Card('2')
      var ten = new Card('10')
      var ace = new Card('A')
      var deck = new Deck([two, ten, ace])
      expect(deck.cards.length).toEqual(3)
      expect(deck.cards).toInclude(two)
      expect(deck.cards).toInclude(ten)
      expect(deck.cards).toInclude(ace)
    })
  })

  describe('shuffle', () => {
    var serializeCards = (cards) => {
      var serialized = ""
      cards.forEach((card) => {
        serialized = serialized + card.numericRank()
      })
      return serialized
    }

    it('randomizes order of cards in the deck', () => {
      var two = new Card('2')
      var three = new Card('3')
      var four = new Card('4')
      var five = new Card('5')
      var six = new Card('6')
      var seven = new Card('7')
      var eight = new Card('8')
      var deck = new Deck([two, three, four, five, six, seven, eight])

      var serializedCardsBefore = serializeCards(deck.cards)
      deck.shuffle()
      var serializedCardsAfter = serializeCards(deck.cards)
      expect(serializedCardsBefore).toNotEqual(serializedCardsAfter)
    })
  })
})
