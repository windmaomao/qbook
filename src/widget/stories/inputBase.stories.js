import React, { useState } from 'react'
import styled from 'styled-components'
import { InputBase } from 'react-brandnet'
import { defaultStyle, docRender } from './utils'
// import { Icons } from '../../lib' 

const DemoDiv = styled.div`
  ${defaultStyle}
  span {
    margin: 0 0.5em;
    padding-top: 0.5em;
  }
`

const InputDemo = props => {
  const [value, setValue] = useState('')
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div>
      <InputBase
        value={value}
        onChange={onChange}
        {...props}
      />
      {docRender('InputBase', { ...props })}
    </div>
  )
}

// // eslint-disable-next-line react/prop-types
// const Text = ({ t }) => <span>{t}</span>
// // eslint-disable-next-line react/prop-types
// const Icon = ({ t, disabled }) => {
//   const Comp = Icons[t]
//   return <Comp disabled={disabled} />
// }

const inputBaseStories = [
  {
    title: 'Default',
    text: 'Input with disabled and placeholder',
    body: (
      <DemoDiv>
        <h4>Normal</h4>
        <InputDemo />
        <h4>Disabled</h4>
        <InputDemo disabled value="" />
        <h4>Read only</h4>
        <InputDemo readOnly value="Value" />
        <h4>Placeholder</h4>
        <InputDemo placeholder="Name" />
      </DemoDiv>
    )
  },
  // {
  //   title: 'Label',
  //   text: 'Input with before or after element',
  //   body: (
  //     <DemoDiv>
  //       <h4>Normal</h4>
  //       <InputDemo before={<Icon t="Home" />} />
  //       <InputDemo after={<Text t="kg" />} />
  //       <InputDemo after={<Icon t="Close" />} />
  //       <InputDemo before={<Icon t="Calendar" />} />
  //       <InputDemo after={<Icon t="ChevronUp" />} />
  //       <h4>Disabled</h4>
  //       <InputDemo disabled after={<Text t="kg" />} />
  //       <InputDemo disabled before={<Icon disabled t="Info" />} />
  //     </DemoDiv>
  //   )
  // },
  // {
  //   title: 'Width',
  //   text: 'Input with variable width',
  //   body: (
  //     <DemoDiv>
  //       <h4>Normal</h4>
  //       <InputDemo />
  //       <h4>400px</h4>
  //       <InputDemo width="400px" />
  //       <InputDemo width="400px" before={<Icon t="Home" />} />
  //       <InputDemo width="400px" after={<Icon t="ChevronUp" />} />
  //       <h4>80%</h4>
  //       <InputDemo width="80%" />
  //       <InputDemo width="80%" before={<Icon t="Home" />} />
  //       <InputDemo width="80%" after={<Icon t="ChevronUp" />} />
  //     </DemoDiv>
  //   )
  // }
]

export default inputBaseStories
