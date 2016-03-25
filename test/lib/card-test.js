import expect from 'expect'
import Card from '../../lib/card'

describe('Card', () => {
  describe('constructor', () => {
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
        }).toThrow("Invalid suit 'POO'")
      })
    })

    describe('when the rank is invalid', () => {
      it('throws an error', () => {
        expect(() => {
          new Card('1', 'S')
        }).toThrow("Invalid rank '1'")
      })
    })
  })
})
