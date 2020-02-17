import React from 'react'
import ReactMarkdown from 'react-markdown'
import Style from './BlogStyle'
import resume from './md/resume'
import artOfWar from './md/art-of-war'
import adventOfCode from './md/advent-of-code'
import investmentLog from './md/investment-log'

const Body = ({ src }) => (
  <Style>
    <ReactMarkdown source={src} />
  </Style>
)

const blogs = [
  {
    title: 'Resume', stories: [{
      title: 'Cover',
      body: <Body src={resume[0]} />
    }, {
      title: 'Deutsche Bank',
      body: <Body src={resume[1]} />
    }]
  },
  { title: 'Blog', separator: true },
  {
    title: 'Advent of Code', stories: [{
      title: 'Topological Sorting',
      body: <Body src={adventOfCode[0]} />
    }]
  },
  {
    title: '孙子兵法', stories: 
      ['始计', '作战', '谋攻', '军形', '兵势', '虚实', '军争'].map((title, i) => ({
        title, 
        body: <Body src={artOfWar[i]} />
      }))
  },
  {
    title: 'Stock Watchlist', stories: [{
      title: 'Watchlist',
      body: <Body src={investmentLog[0]} />
    },{
      title: 'News',
      body: <Body src={investmentLog[1]} />
    }]
  },
]

export default blogs