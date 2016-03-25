import expect from 'expect'
import game from '../../reducers'
import * as actions from '../../actions'

describe('game', () => {
  describe('initial state', () => {
    it('initializes selectedCard to null', () => {
      const state = game(undefined)
      expect(state.get('selectedCard')).toEqual(null)
    })

    it('initializes matchedCards to empty Array', () => {
      const state = game(undefined)
      expect(state.get('matchedCards').size).toEqual(0)
    })

    it('initializes gameOver to false', () => {
      const state = game(undefined)
      expect(state.get('gameOver')).toEqual(false)
    })

    it('initializes started to false', () => {
      const state = game(undefined)
      expect(state.get('started')).toEqual(false)
    })
  })

  describe('game started action', () => {
    it('returns state with started set to true', () => {
      const action = actions.gameStarted()
      const state = game(undefined, action)
      expect(state.get('started')).toEqual(true)
    })
  })

  describe('card clicked action', () => {
    describe('when no card has been selected yet', () => {
      it('returns state with expected selectedCard', () => {
        const state = game(undefined)
        const expectedCard = state.get('cards').get(0)
        const action = actions.cardClicked(expectedCard.get('id'))
        const newState = game(state, action)
        expect(newState.get('selectedCard').get('id')).toEqual(expectedCard.get('id'))
      })

      it('returns state with selectedCard set to revealed', () => {
        const initialState = game(undefined)
        const expectedCard = initialState.get('cards').get(0)
        const action = actions.cardClicked(expectedCard.get('id'))
        const newState = game(initialState, action)
        const changedCard = newState.get('cards').get(expectedCard.get('id'))
        const selectedCard = newState.get('selectedCard')
        expect(changedCard.get('revealed')).toEqual(true)
        expect(selectedCard.get('revealed')).toEqual(true)
      })

      it('returns state with correct card not yet set to matched', () => {
        const initialState = game(undefined)
        const expectedCard = initialState.get('cards').get(0)
        const action = actions.cardClicked(expectedCard.get('id'))
        const newState = game(initialState, action)
        const changedCard = newState.get('cards').get(expectedCard.get('id'))
        const selectedCard = newState.get('selectedCard')
        expect(changedCard.get('matched')).toEqual(false)
        expect(selectedCard.get('matched')).toEqual(false)
      })
    })

    describe.skip('when a card has already been selected', () => {
      describe('and another card is selected with the same rank', () => {
        it('returns state with correct cards set to matched', () => {
          const initialState = game(undefined)
          const card1 = initialState.get('cards').get(0).merge({ id: 0, rank: 'A' })
          const card2 = initialState.get('cards').get(1).merge({ id: 1, rank: 'A' })
          const state = initialState.merge({
            cards: [
              card1,
              card2
            ]
          })
          const action1 = actions.cardClicked(card1.get('id'))
          const action2 = actions.cardClicked(card2.get('id'))
          const firstState = game(initialState, action1)
          const secondState = game(firstState, action2)
          console.log("secondState.get('matchedCards')", secondState.get('matchedCards'))
          expect(secondState)
        })

        it('returns state with correct card pair in matchedCards', () => {

        })
      })
    })
  })
})
