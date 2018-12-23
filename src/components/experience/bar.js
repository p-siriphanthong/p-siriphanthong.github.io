import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 30px;
  margin: 10px auto;

  @media (max-width: 600px) {
    margin: 10px 0;
  }
`

const Circle = styled.div`
  border: 8px solid #ff9955;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
`

const Line = styled.div`
  background: gray;
  width: 5px;
  height: 100px;
  margin: 5px auto 0;

  @media (max-width: 600px) {
    height: 150px;
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
