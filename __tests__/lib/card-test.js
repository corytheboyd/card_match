import Card from '../../lib/card'

jest.unmock('../../lib/card')

describe('Card', () => {
  describe('constructor', () => {
    it('defaults faceUp value to false', () => {
      const card = new Card('3', 'S')
      expect(card.faceUp).toBe(false)
    })

    it('sets rank from parameters', () => {
      var ace = new Card('A', 'S')
      var ten = new Card('10', 'C')
      var jack = new Card('J', 'D')
      expect(ace.rank).toEqual('A')
      expect(ten.rank).toEqual('10')
      expect(jack.rank).toEqual('J')
    })

    it('sets suite from parameters', () => {
      var aceOfSpades = new Card('A', 'S')
      expect(aceOfSpades.suit).toEqual('S')
    })

    describe('when the suit is invalid', () => {
      it('throws an error', () => {
        expect(() => {
          new Card('10', 'POO')
        }).toThrow(new Error("Invalid suit 'POO'"))
      })
    })

    describe('when the rank is invalid', () => {
      it('throws an error', () => {
        expect(() => {
          new Card('1', 'S')
        }).toThrow(new Error("Invalid rank '1'"))
      })
    })
  })

  describe('setFaceUp', () => {
    it('sets the faceUp value to true', () => {
      var card = new Card('Q', 'H')
      card.setFaceUp()
      expect(card.faceUp).toEqual(true)
    })
  })

  describe('setFaceDown', () => {
    it('sets the faceUp value to false', () => {
      var card = new Card('10', 'D')
      card.setFaceUp()
      card.setFaceDown()
      expect(card.faceUp).toEqual(false)
    })
  })

  describe('numericRank', () => {
    it('returns the correct numeric ranks', () => {
      expect((new Card('2', 'D')).numericRank()).toEqual(2)
      expect((new Card('3', 'D')).numericRank()).toEqual(3)
      expect((new Card('4', 'D')).numericRank()).toEqual(4)
      expect((new Card('5', 'D')).numericRank()).toEqual(5)
      expect((new Card('6', 'D')).numericRank()).toEqual(6)
      expect((new Card('7', 'D')).numericRank()).toEqual(7)
      expect((new Card('8', 'D')).numericRank()).toEqual(8)
      expect((new Card('9', 'D')).numericRank()).toEqual(9)
      expect((new Card('10', 'D')).numericRank()).toEqual(10)
      expect((new Card('J', 'D')).numericRank()).toEqual(11)
      expect((new Card('Q', 'D')).numericRank()).toEqual(12)
      expect((new Card('K', 'D')).numericRank()).toEqual(13)
      expect((new Card('A', 'D')).numericRank()).toEqual(14)
    })
  })

  describe('rankIsEqual', () => {
    it('returns true when cards have the same value', () => {
      var highCard = new Card('A', 'S')
      var lowCard = new Card('A', 'S')
      expect(highCard.rankIsEqual(lowCard)).toEqual(true)
    })

    it('returns false when cards have different ranks', () => {
      var highCard = new Card('2', 'H')
      var lowCard = new Card('A', 'D')
      expect(highCard.rankIsEqual(lowCard)).toEqual(false)
    })
  })

  describe('serialize', () => {
    it('correctly serializes cards', () => {
      var twoOfHearts = new Card('2', 'H')
      var kingOfDiamonds = new Card('K', 'D')
      expect(twoOfHearts.serialize()).toEqual('2H')
      expect(kingOfDiamonds.serialize()).toEqual('KD')
    })
  })

  describe('deserialize', () => {
    it('correctly deserializes cards', () => {
      var threeOfClubs = Card.deserialize('3C')
      var jackOfDiamonds = Card.deserialize('JD')
      expect(threeOfClubs.rank).toEqual('3')
      expect(threeOfClubs.suit).toEqual('C')
      expect(jackOfDiamonds.rank).toEqual('J')
      expect(jackOfDiamonds.suit).toEqual('D')
    })

    describe('when the serialized data is malformed', () => {
      it('throws an error', () => {
        expect(() => {
          Card.deserialize('2HOHMYGODWHATHAVEYOUDONE')
        }).toThrow(new Error("Malformed data '2HOHMYGODWHATHAVEYOUDONE'"))
      })
    })
  })
})
