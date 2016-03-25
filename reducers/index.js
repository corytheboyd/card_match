import Immutable from 'immutable'
import * as actionTypes from '../constants/ActionTypes'
import MatchingGameDeck from '../lib/matching_game_deck'

const deck = new MatchingGameDeck
deck.shuffle()

const initialState = Immutable.fromJS({
  cards: deck.cards.map((card, i) => {
    return {
      id: i,
      rank: card.rank,
      suit: card.suit,
      revealed: false,
      matched: false
    }
  }),
  selectedCard: null,
  matchedCards: [],
  gameOver: false,
  started: false
})

export default function game(state = initialState, action) {
  if (!action) {
    return state
  }

  switch(action.type) {
    case actionTypes.GAME_STARTED:
      return state.set('started', true)

    case actionTypes.CARD_CLICKED:
      if (!state.get('selectedCard')) {
        // if no cards selected
        //  add this card to selectedCards
        //  mark this card as revealed
        let cards = state.get('cards')
        let selectedCard = cards.get(action.id).set('revealed', true)

        cards = cards.update(action.id, card => {
          return card.set('revealed', true)
        })

        return state.merge({
          selectedCard: selectedCard,
          cards: cards
        })
      } else {
        let cards = state.get('cards')
        let selectedCard = cards.get(action.id)
        let previousSelectedCard = state.get('selectedCard')

        if (selectedCard.get('revealed') || selectedCard.get('matched')) {
          return state
        }

        // mark the selected card as revealed
        cards = cards.update(action.id, card => {
          return card.set('revealed', true)
        })

        // Check to see if previous and current selected cards have the same
        // rank
        if (selectedCard.get('rank') === previousSelectedCard.get('rank')) {
          // mark both cards as matched
          cards = cards
            .update(selectedCard.get('id'), card => {
              return card.set('matched', true)
            })
            .update(previousSelectedCard.get('id'), card => {
              return card.merge({ revealed: true, matched: true })
            })

          let newState = state.merge({
            cards: cards,
            matchedCards: state.get('matchedCards').push([
              previousSelectedCard,
              selectedCard
            ]),
            selectedCard: null
          })

          if (newState.get('matchedCards').size === newState.get('cards').size / 2) {
            newState = newState.set('gameOver', true)
          }

          return newState
        } else {
          // If the cards don't match, turn current and previous cards over
          // and set selectedCard to null.
          cards = cards
            .update(selectedCard.get('id'), c => { return c.set('revealed', false) })
            .update(previousSelectedCard.get('id'), c => { return c.set('revealed', false) })
          return state.merge({
            selectedCard: null,
            cards: cards
          })
        }
      }

    default:
      return state
  }
}
