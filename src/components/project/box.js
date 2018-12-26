import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import { Title, Subtitle, Detail } from '../text'

const Wrapper = styled.div`
  padding-bottom: 20px;
`

const Image = styled.div`
  background: url(${props => props.url});
  background-size: cover;
  background-position: center center;
  border: 1px solid #e8eef7;
  width: 100%;
  margin-bottom: 20px;

  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

class Box extends Component {
  render() {
    return (
      <Wrapper>
        <Image url={require(`./images/${this.props.image}`)} />
        <Title>{this.props.title}</Title>
        <Subtitle>{this.props.subtitle}</Subtitle>
        <Detail>{this.props.detail}</Detail>
      </Wrapper>
    )
  }
}

export default Box
