import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Game from './components/Game'
import game from './reducers'

const store = createStore(game)
const rootElement = document.getElementById('root')

function render () {
  ReactDOM.render(
    <Game />,
    rootElement
  )
}

render()
store.subscribe(render)
