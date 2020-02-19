import React from 'react'
import ReactMarkdown from 'react-markdown'
import Style from './BlogStyle'
import resume from './md/resume'
import artOfWar from './md/art-of-war'
import adventOfCode from './md/advent-of-code'
import fortuneTelling from './md/fortune-telling'
// import investmentLog from './md/investment-log'

const Body = ({ src }) => (
  <Style>
    <ReactMarkdown source={src} />
  </Style>
)

const blogs = [
  {
    title: 'Resume', stories: [
      'Cover', 'MercuryGate', 'Deutsche Bank', 'People Designs', 'Past'
    ].map((title, i) => ({
      title,
      body: <Body src={resume[i]} />
    }))
  },
  { title: 'Blog', separator: true },
  {
    title: 'Advent of Code', stories: [{
      title: 'Topological Sorting',
      body: <Body src={adventOfCode[0]} />
    }]
  },
  {
    title: '孙子兵法', stories: [
      '始计', '作战', '谋攻', '军形', '兵势', '虚实', '军争',
      '九变', '行军', '地形', '九地', '火攻', '用间', '心得'
    ].map((title, i) => ({
        title, 
        body: <Body src={artOfWar[i]} />
      }))
  },
  {
    title: '水墨先生', stories: [{
      title: '犯太岁:属马',
      body: <Body src={fortuneTelling[0]} />
    }]
  },
  // {
  //   title: 'Stock Watchlist', stories: [{
  //     title: 'Watchlist',
  //     body: <Body src={investmentLog[0]} />
  //   },{
  //     title: 'News',
  //     body: <Body src={investmentLog[1]} />
  //   }]
  // },
]

export default blogs