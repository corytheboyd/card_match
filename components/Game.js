import React from 'react'
import MatchingGameDeck from '../lib/matching_game_deck'
import CardContainer from './CardContainer'

class Game extends React.Component {
  render() {
    var deck = new MatchingGameDeck
    deck.shuffle()

    const cardContainerSlots = deck.cards.map((card, index) => {
      return (
        <CardContainer key={index} card={card.serialize()} />
      )
    })

    return (
      <div id="game">
        <h1>{"Card Matching Game"}</h1>
        <p>{"Match cards. Win at life."}</p>
        {cardContainerSlots}
      </div>
    )
  }
}

export default Game
