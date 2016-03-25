import React from 'react'
import Card from './Card'
import * as actions from '../actions'

class Game extends React.Component {
  start() {
    this.props.store.dispatch(actions.gameStarted())
  }

  suitName(suit) {
    switch(suit) {
      case 'S':
        return 'spades'
      case 'H':
        return 'hearts'
      case 'D':
        return 'diamonds'
      case 'C':
        return 'clubs'
    }
  }

  rankName(rank) {
    switch(rank) {
      case 'A':
        return 'ace'
      case 'K':
        return 'king'
      case 'Q':
        return 'queen'
      case 'J':
        return 'jack'
      default:
        return rank
    }
  }

  cardName(card) {
    return `${this.rankName(card.get('rank'))} of ${this.suitName(card.get('suit'))}`
  }

  render() {
    var state = this.props.store.getState()
    var cards = state.get('cards')
    var started = state.get('started')
    var matchedCards = state.get('matchedCards')

    return (
      <div className="game-container">
        <h1>Game</h1>
        <div style={{ display: started ? 'none' : '' }}>
          <button onClick={this.start.bind(this)}>
            Start Game
          </button>
        </div>

        <div style={{ display: started ? '' : 'none' }}>
          <div className="cards-container">
            {cards.map((card, i) => {
              return (
                <Card
                  store={this.props.store}
                  key={i}
                  id={i}
                  rank={card.get('rank')}
                  suit={card.get('suit')}
                  revealed={card.get('revealed')}
                  matched={card.get('matched')}
                />
              )
            })}
          </div>
          <div style={{ clear: 'both' }} />
          <div className="matches-container">
            <h3>Matches ({matchedCards.size})</h3>
            <ul>
              {matchedCards.toArray().map((cardPair, i) => {
                return <li key={i}>{this.cardName(cardPair[0])} & {this.cardName(cardPair[1])}</li>
              })}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

Game.propTypes = {
  store: React.PropTypes.object.isRequired
}

export default Game
