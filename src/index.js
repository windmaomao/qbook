import React from 'react'
import ReactDOM from 'react-dom'
import { Book } from 'react-brandbook'
import Logo from './Logo'
import blog from './blog'

const fontFamily = "'Crimson Text', serif, '宋体'"
const themes = [
  { title: 'Light', theme: { mode: 'light', fontFamily } },
  { title: 'Dark', theme: { mode: 'dark', fontFamily } }
]
const allTopics = [...blog]

ReactDOM.render(
  <Book
    logo={<Logo />}
    title={"MyBook"}
    themes={themes}
    topics={allTopics}
  />,
  document.getElementById('root')
)