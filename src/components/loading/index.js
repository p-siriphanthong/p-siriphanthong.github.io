import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'

const delay = 1000
const animation = 1200
const transition = 800

const headAnimation = keyframes`
  0% { transform: translate(0%) scaleX(0) }
  25% { transform: translate(0%) scaleX(0.5) }
  50% { transform: translate(25%) scaleX(0.75) }
  100% { transform: translate(100%) scaleX(0) }
`

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  transition: opacity ${transition}ms ease-in-out;
  opacity: ${props => (props.isLoading ? 1 : 0)};
  z-index: ${props => (props.done ? -9999 : 9999)};
`

const Bar = styled.div`
  background-color: ${props => props.theme.secondary};
  height: 4px;
  overflow: hidden;
  position: relative;
`

const Head = styled.div`
  background-color: ${props => props.theme.primary};
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  transform-origin: left center;
  transform: scaleX(0);
  animation: ${headAnimation} ${animation}ms linear infinite;
`

class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true, done: false }
  }

  componentDidMount() {
    setTimeout(() => this.setState({ isLoading: false }), delay)
    setTimeout(() => this.setState({ done: true }), delay + transition)
  }

  render() {
    return (
      <Wrapper isLoading={this.state.isLoading} done={this.state.done}>
        <Bar>
          <Head />
        </Bar>
      </Wrapper>
    )
  }
}

export default Loading
