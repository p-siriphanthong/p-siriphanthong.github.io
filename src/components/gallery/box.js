import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${props =>
    props.mode === 'vertical' &&
    `grid-row-start: span 2; grid-column-start: span 1;`}
  ${props =>
    props.mode === 'horizontal' &&
    `grid-row-start: span 1; grid-column-start: span 2;`}
  ${props =>
    props.mode === 'large' &&
    `grid-row-start: span 2; grid-column-start: span 2;`}
  ${props =>
    props.mode === 'normal' &&
    `grid-row-start: span 1; grid-column-start: span 1;`}
  position: relative;
  overflow: hidden;
`

const Image = styled.img.attrs({
  onClick: void 0
})`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  object-fit: cover;
  transition: all 0.3s ease-in-out;

  ${Wrapper}:hover & {
    transform: scale(1.1);
  }
`

const Caption = styled.div.attrs({
  onClick: void 0
})`
  color: white;
  background: rgba(0, 0, 0, 0.6);
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;

  ${Wrapper}:hover & {
    opacity: 1;
  }
`

class Box extends Component {
  render() {
    return (
      <Wrapper mode={this.props.mode}>
        <Image src={require(`./images/${this.props.image}`)} />
        <Caption>{this.props.caption}</Caption>
      </Wrapper>
    )
  }
}

export default Box
