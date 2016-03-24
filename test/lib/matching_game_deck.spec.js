import expect from 'expect'
import Card from '../../lib/card'
import MatchingGameDeck from '../../lib/matching_game_deck'

describe('MatchingGameDeck', () => {
  describe('constructor', () => {
    var countOfInDeck = (deck, rank) => {
      var count = 0;
      deck.cards.forEach((card) => {
        if (card.rank === rank) {
          count++
        }
      })
      return count
    }

    it('has the expected 52 cards', () => {
      var deck = new MatchingGameDeck
      expect(countOfInDeck(deck, "2")).toEqual(4)
      expect(countOfInDeck(deck, "3")).toEqual(4)
      expect(countOfInDeck(deck, "4")).toEqual(4)
      expect(countOfInDeck(deck, "5")).toEqual(4)
      expect(countOfInDeck(deck, "6")).toEqual(4)
      expect(countOfInDeck(deck, "7")).toEqual(4)
      expect(countOfInDeck(deck, "8")).toEqual(4)
      expect(countOfInDeck(deck, "9")).toEqual(4)
      expect(countOfInDeck(deck, "10")).toEqual(4)
      expect(countOfInDeck(deck, "J")).toEqual(4)
      expect(countOfInDeck(deck, "Q")).toEqual(4)
      expect(countOfInDeck(deck, "K")).toEqual(4)
      expect(countOfInDeck(deck, "A")).toEqual(4)
    })
  })
})
