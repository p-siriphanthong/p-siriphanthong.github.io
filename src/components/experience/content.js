import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import { Title, Subtitle, Detail } from '../text'

const Wrapper = styled.div`
  width: 50%;
  max-width: 400px;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  ${props =>
    props.position === 'left' &&
    `text-align: right; padding-right: 50px; right: 50%;`}
  ${props =>
    props.position === 'right' &&
    `text-align: left; padding-left: 50px; left: 50%;`}

  @media (max-width: 600px) {
    width: 100%;
    max-width: none;
    text-align: left;
    padding-left: 50px;
    left: 0;
  }
`

class Content extends Component {
  render() {
    return (
      <Wrapper position={this.props.position}>
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.duration}</Subtitle>
        <Detail>{this.props.detail}</Detail>
      </Wrapper>
    )
  }
}

export default Content
