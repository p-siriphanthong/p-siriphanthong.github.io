import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import { Title, Detail } from '../text'
import Icon from './icon'

const Wrapper = styled.div`
  text-align: center;
  width: calc(100% / 4);
  min-width: 200px;
  margin-bottom: 20px;
  display: inline-block;
  vertical-align: top;
  box-sizing: border-box;

  @media (max-width: 1000px) {
    width: calc(100% / 2);
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`

const Container = styled.div`
  width: 180px;
  margin: auto;
`

class Box extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Icon
            percent={this.props.percent}
            code={this.props.code}
            type={this.props.type}
          />
          <Title>{this.props.title}</Title>
          <Detail>{this.props.detail}</Detail>
        </Container>
      </Wrapper>
    )
  }
}

export default Box
