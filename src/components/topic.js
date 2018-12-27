import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  background: ${props => props.theme.secondary};
  text-align: center;
  margin: 0 auto 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Square = styled(Wrapper)`
  width: 100px;
  height: 100px;
`

const Circle = styled(Wrapper)`
  width: 120px;
  height: 120px;
  border-radius: 50%;
`

const TriangleUp = styled(Wrapper)`
  background: transparent;
  width: 0;
  height: 0;
  border-bottom: 100px solid ${props => props.theme.secondary};
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;

  & * {
    position: relative;
    top: 60px;
  }
`

const TriangleDown = styled(Wrapper)`
  background: transparent;
  width: 0;
  height: 0;
  border-top: 100px solid ${props => props.theme.secondary};
  border-left: 60px solid transparent;
  border-right: 60px solid transparent;

  & * {
    position: relative;
    bottom: 60px;
  }
`

const Parallelogram = styled(Wrapper)`
  width: 150px;
  height: 100px;
  transform: skew(-20deg);

  & * {
    transform: skew(20deg);
  }
`

const Text = styled.h1`
  color: ${props => props.theme.primary};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  margin: 0;
`

class Topic extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.shape === 'square' ? (
          <Square>
            <Text>{this.props.children}</Text>
          </Square>
        ) : null}
        {this.props.shape === 'circle' ? (
          <Circle>
            <Text>{this.props.children}</Text>
          </Circle>
        ) : null}
        {this.props.shape === 'triangle-up' ? (
          <TriangleUp>
            <Text>{this.props.children}</Text>
          </TriangleUp>
        ) : null}
        {this.props.shape === 'triangle-down' ? (
          <TriangleDown>
            <Text>{this.props.children}</Text>
          </TriangleDown>
        ) : null}
        {this.props.shape === 'parallelogram' ? (
          <Parallelogram>
            <Text>{this.props.children}</Text>
          </Parallelogram>
        ) : null}
      </React.Fragment>
    )
  }
}

export default Topic
