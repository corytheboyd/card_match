import Card from '../../lib/card'

jest.unmock('../../lib/card')

describe('Card', () => {
  describe('constructor', () => {
    it('defaults faceUp value to false', () => {
      const card = new Card('3')
      expect(card.faceUp).toBe(false)
    })

    it('sets rank from parameters', () => {
      var ace = new Card('A')
      var ten = new Card('10')
      var jack = new Card('J')
      expect(ace.rank).toEqual('A')
      expect(ten.rank).toEqual('10')
      expect(jack.rank).toEqual('J')
    })

    describe('when the rank is invalid', () => {
      it('throws an error', () => {
        expect(() => {
          var card = new Card('1')
        }).toThrow(new Error("Invalid rank '1'"))
      })
    })
  })

  describe('setFaceUp', () => {
    it('sets the faceUp value to true', () => {
      var card = new Card('Q')
      card.setFaceUp()
      expect(card.faceUp).toEqual(true)
    })
  })

  describe('setFaceDown', () => {
    it('sets the faceUp value to false', () => {
      var card = new Card('10')
      card.setFaceUp()
      card.setFaceDown()
      expect(card.faceUp).toEqual(false)
    })
  })

  describe('numericRank', () => {
    it('returns the correct numeric ranks', () => {
      expect((new Card('2')).numericRank()).toEqual(2)
      expect((new Card('3')).numericRank()).toEqual(3)
      expect((new Card('4')).numericRank()).toEqual(4)
      expect((new Card('5')).numericRank()).toEqual(5)
      expect((new Card('6')).numericRank()).toEqual(6)
      expect((new Card('7')).numericRank()).toEqual(7)
      expect((new Card('8')).numericRank()).toEqual(8)
      expect((new Card('9')).numericRank()).toEqual(9)
      expect((new Card('10')).numericRank()).toEqual(10)
      expect((new Card('J')).numericRank()).toEqual(11)
      expect((new Card('Q')).numericRank()).toEqual(12)
      expect((new Card('K')).numericRank()).toEqual(13)
      expect((new Card('A')).numericRank()).toEqual(14)
    })
  })

  describe('rankIsEqual', () => {
    it('returns true when cards have the same value', () => {
      var highCard = new Card('A')
      var lowCard = new Card('A')
      expect(highCard.rankIsEqual(lowCard)).toEqual(true)
    })

    it('returns false when cards have different ranks', () => {
      var highCard = new Card('2')
      var lowCard = new Card('A')
      expect(highCard.rankIsEqual(lowCard)).toEqual(false)
    })
  })
})
