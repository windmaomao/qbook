import React from 'react'
import styled from 'styled-components'
import img from './logo.png'

const LogoDiv = styled.img`
  width: 24px;
  margin-right: 5px;
`

const Logo = () => (
  <LogoDiv src={img} alt="" />
)

export default Logo