import React, { Component } from 'react'
import styled, { keyframes } from 'styled-components'
import logo from './logo.svg'

const AnimationLogo = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Wrapper = styled.div`
  text-align: center;
`

const Header = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`

const Logo = styled.img.attrs({
  src: logo,
  alt: 'logo'
})`
  animation: ${AnimationLogo} infinite 20s linear;
  height: 40vmin;
`

const Text = styled.p``

const Link = styled.div`
  color: #61dafb;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Logo />
          <Text>
            Edit <code>src/App.js</code> and save to reload.
          </Text>
          <Link>Learn React</Link>
        </Header>
      </Wrapper>
    )
  }
}

export default App
