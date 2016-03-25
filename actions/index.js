import * as actionTypes from '../constants/ActionTypes'

export function gameStarted() {
  return { type: actionTypes.GAME_STARTED }
}

export function cardClicked(id) {
  return { type: actionTypes.CARD_CLICKED, id: id }
}
