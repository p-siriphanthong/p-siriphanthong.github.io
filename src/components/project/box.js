import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import { Title, Subtitle, Detail, Github, Youtube, Medium } from '../text'

const Wrapper = styled.div`
  padding-bottom: 20px;
`

const Image = styled.div`
  background-color: ${props => props.theme.secondary};
  background-image: url(${props => props.url});
  background-size: cover;
  background-position: center center;
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
        {this.props.links.github ? (
          <Github href={this.props.links.github} />
        ) : null}
        {this.props.links.youtube ? (
          <Youtube href={this.props.links.youtube} />
        ) : null}
        {this.props.links.medium ? (
          <Medium href={this.props.links.medium} />
        ) : null}
      </Wrapper>
    )
  }
}

export default Box
