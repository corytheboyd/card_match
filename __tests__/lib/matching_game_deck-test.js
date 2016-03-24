import MatchingGameDeck from '../../lib/matching_game_deck'

jest.unmock('../../lib/card')
jest.unmock('../../lib/deck')
jest.unmock('../../lib/matching_game_deck')

describe('MatchingGameDeck', () => {
  describe('constructor', () => {
    var countOfInDeck = (rank, deck) => {
      var count = 0;
      deck.cards.forEach((card) => {
        if (card.rank === rank) {
          count++
        }
      })
      return count
    }

    it('is initialized with the expected 52 cards', () => {
      var deck = new MatchingGameDeck
      expect(countOfInDeck("2", deck)).toEqual(4)
      expect(countOfInDeck("3", deck)).toEqual(4)
      expect(countOfInDeck("4", deck)).toEqual(4)
      expect(countOfInDeck("5", deck)).toEqual(4)
      expect(countOfInDeck("6", deck)).toEqual(4)
      expect(countOfInDeck("7", deck)).toEqual(4)
      expect(countOfInDeck("8", deck)).toEqual(4)
      expect(countOfInDeck("9", deck)).toEqual(4)
      expect(countOfInDeck("10", deck)).toEqual(4)
      expect(countOfInDeck("J", deck)).toEqual(4)
      expect(countOfInDeck("Q", deck)).toEqual(4)
      expect(countOfInDeck("K", deck)).toEqual(4)
      expect(countOfInDeck("A", deck)).toEqual(4)
    })
  })
})
