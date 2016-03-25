import React from 'react'
import * as actions from '../actions'

class Card extends React.Component {
  constructor(props) {
    super(props)
  }

  onClick() {
    this.props.store.dispatch(actions.cardClicked(this.props.id))
  }

  render() {
    return (
      <div className="card" onClick={this.onClick.bind(this)}>
        <div style={{ display: this.props.matched ? 'none' : '' }}>
          <div style={{ display: this.props.revealed ? '' : 'none' }}>
            {`${this.props.rank}:${this.props.suit}`}
          </div>
          <div style={{ display: this.props.revealed ? 'none' : '' }}>
            ?
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  store: React.PropTypes.object.isRequired,
  id: React.PropTypes.number.isRequired,
  rank: React.PropTypes.string.isRequired,
  suit: React.PropTypes.string.isRequired,
  revealed: React.PropTypes.bool.isRequired,
  matched: React.PropTypes.bool.isRequired
}

export default Card
