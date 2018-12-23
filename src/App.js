import React, { Component } from 'react'
import styled from 'styled-components'
import data from './data.json'

// Components
import Profile from './components/profile'
import Skill from './components/skill'

const Wrapper = styled.div`
  max-width: 1920px;
  margin: auto;
`

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Profile educations={data.educations} workings={data.workings} />
        <Skill skills={data.skills} />
      </Wrapper>
    )
  }
}

export default App
