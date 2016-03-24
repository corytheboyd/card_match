import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

const rootElement = document.getElementById('root')

function render () {
  ReactDOM.render(
    <Game />,
    rootElement
  )
}

render()
