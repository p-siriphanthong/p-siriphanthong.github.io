import React, { Component } from 'react'
import styled from 'styled-components'

const size = 120
const border = 15
const hoverborder = 8

const Wrapper = styled.div`
  background-color: rgb(244, 240, 235);
  border-radius: 50%;
  width: ${size}px;
  height: ${size}px;
  margin: 20px auto;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:after {
    content: '';
    background-color: white;
    border-radius: 50%;
    width: ${size - border}px;
    height: ${size - border}px;
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transition: all 0.2s ease-in-out;
  }

  &:hover:after {
    width: ${size - hoverborder}px;
    height: ${size - hoverborder}px;
  }
`

const Font = styled.span`
  color: ${props => props.theme.primary};
  ${props =>
    props.type === 'brands' &&
    `font-family: 'Font Awesome Brands', 'Khula', sans-serif;`}
  ${props =>
    props.type === 'light' &&
    `font-family: 'Font Awesome Light', 'Khula', sans-serif;`}
  ${props =>
    props.type === 'regular' &&
    `font-family: 'Font Awesome Regular', 'Khula', sans-serif;`}
  ${props =>
    props.type === 'solid' &&
    `font-family: 'Font Awesome Solid', 'Khula', sans-serif;`}
  font-size: 2rem;
  line-height: 2rem;
  z-index: 1;

  &:before {
    content: '${props => props.code}';
    transition: all 0.2s ease-in-out;
  }

  ${Wrapper}:hover &:before {
      content: '${props => props.percent}%';
      font-size: 2.2rem;
  }
`

const LeftClipper = styled.div`
  border-radius: 50%;
  width: ${size}px;
  height: ${size}px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip: rect(0, ${size}px, ${size}px, ${size / 2}px);
`

const RightFiller = styled.div`
  background-color: ${props => props.theme.primary};
  border-radius: 50%;
  width: ${size}px;
  height: ${size}px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  clip: rect(0, ${size}px, ${size}px, ${size / 2}px);
`

const ValueBar = styled.div.attrs(props => ({
  percent: (props.percent * 360) / 100
}))`
  border: ${border}px solid ${props => props.theme.primary};
  border-radius: 50%;
  width: ${size}px;
  height: ${size}px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  clip: rect(0, ${size / 2}px, ${size}px, 0);
  transform: rotate(${props => props.percent}deg);
`

class Icon extends Component {
  render() {
    return (
      <Wrapper>
        <Font
          code={this.props.code}
          type={this.props.type}
          percent={this.props.percent}
        />
        {this.props.percent < 50 ? (
          <LeftClipper>
            <ValueBar percent={this.props.percent} />
          </LeftClipper>
        ) : (
          <React.Fragment>
            <RightFiller />
            <ValueBar percent={this.props.percent} />
          </React.Fragment>
        )}
      </Wrapper>
    )
  }
}

export default Icon
