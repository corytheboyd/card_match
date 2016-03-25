import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Game from './components/Game'
import game from './reducers'

require('./style.css')

const rootElement = document.createElement('div')
rootElement.setAttribute('id', 'root')
document.body.appendChild(rootElement)

function render () {
  ReactDOM.render(
    <div>
      <Game store={store} />
    </div>,
    rootElement
  )
}

const store = createStore(game)
store.subscribe(render)

render()
