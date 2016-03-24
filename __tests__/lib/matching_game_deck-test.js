import MatchingGameDeck from '../../lib/matching_game_deck'

jest.unmock('../../lib/card')
jest.unmock('../../lib/deck')
jest.unmock('../../lib/matching_game_deck')

describe('MatchingGameDeck', () => {
  describe('constructor', () => {
    var countOfRankInDeck = (rank, deck) => {
      var count = 0;
      deck.cards.forEach((card) => {
        if (card.rank === rank) {
          count++
        }
      })
      return count
    }

    var countOfSuitInDeck = (suit, deck) => {
      var count = 0;
      deck.cards.forEach((card) => {
        if (card.suit === suit) {
          count++
        }
      })
      return count
    }

    it('is initialized with the expected 52 cards', () => {
      var deck = new MatchingGameDeck
      expect(countOfSuitInDeck('S', deck)).toEqual(13)
      expect(countOfSuitInDeck('H', deck)).toEqual(13)
      expect(countOfSuitInDeck('D', deck)).toEqual(13)
      expect(countOfSuitInDeck('C', deck)).toEqual(13)
      expect(countOfRankInDeck('2', deck)).toEqual(4)
      expect(countOfRankInDeck('3', deck)).toEqual(4)
      expect(countOfRankInDeck('4', deck)).toEqual(4)
      expect(countOfRankInDeck('5', deck)).toEqual(4)
      expect(countOfRankInDeck('6', deck)).toEqual(4)
      expect(countOfRankInDeck('7', deck)).toEqual(4)
      expect(countOfRankInDeck('8', deck)).toEqual(4)
      expect(countOfRankInDeck('9', deck)).toEqual(4)
      expect(countOfRankInDeck('10', deck)).toEqual(4)
      expect(countOfRankInDeck('J', deck)).toEqual(4)
      expect(countOfRankInDeck('Q', deck)).toEqual(4)
      expect(countOfRankInDeck('K', deck)).toEqual(4)
      expect(countOfRankInDeck('A', deck)).toEqual(4)
    })
  })
})
