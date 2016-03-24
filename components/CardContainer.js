import React from 'react'
import Card from '../lib/card'

class CardContainer extends React.Component {
  render() {
    var card = Card.deserialize(this.props.card)
    return (
      <div className="card-container">
        <ul>
          <li>rank: {card.rank}</li>
          <li>suit: {card.suit}</li>
          <li>faceUp: {card.faceUp+''}</li>
        </ul>
      </div>
    )
  }
}

CardContainer.propTypes = {
  card: React.PropTypes.string
}

export default CardContainer
