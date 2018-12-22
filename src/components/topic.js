import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  background: rgba(175, 205, 247, 0.3);
  text-align: center;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.h1`
  color: #4b7abc;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  margin: 0;
`

class Topic extends Component {
  render() {
    return (
      <Wrapper>
        <Text>{this.props.children}</Text>
      </Wrapper>
    )
  }
}

export default Topic
