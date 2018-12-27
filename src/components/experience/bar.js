import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 30px;
  margin: 5px auto;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`

const Circle = styled.div`
  border: 8px solid ${props => props.theme.primary};
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
`

const Line = styled.div`
  background: ${props => props.theme.secondary};
  width: 5px;
  height: 100px;
  margin: 5px auto 0;

  @media (max-width: 600px) {
    height: 150px;
  }

  @media (max-width: 400px) {
    height: 180px;
  }
`

class Bar extends Component {
  render() {
    return (
      <Wrapper>
        <Circle />
        <Line />
      </Wrapper>
    )
  }
}

export default Bar
