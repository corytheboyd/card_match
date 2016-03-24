import React from 'react'
import ReactDOM from 'react-dom'
import Game from './components/Game'

require('./style.css')

const rootElement = document.createElement('div')
rootElement.setAttribute('id', 'root')
document.body.appendChild(rootElement)

function render () {
  ReactDOM.render(
    <Game />,
    rootElement
  )
}

render()
