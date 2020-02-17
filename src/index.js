import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import Logo from './Logo'
import blog from './blog'

const logo = <Logo />
const title = "MyBook"
const fontFamily = "'Crimson Text', serif"
const themes = [
  { title: 'Light', theme: { mode: 'light', fontFamily } },
  { title: 'Dark', theme: { mode: 'dark', fontFamily } }
]
const allTopics = [...blog]

ReactDOM.render(
  <Book
    logo={logo}
    title={title}
    themes={themes}
    topics={allTopics}
  />,
  document.getElementById('root')
)