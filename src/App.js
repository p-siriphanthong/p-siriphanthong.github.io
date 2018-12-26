import React, { Component } from 'react'
import styled from 'styled-components'
import data from './data.json'

// Components
import Profile from './components/profile'
import Skill from './components/skill'
import Experience from './components/experience'
import Project from './components/project'

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
        <Experience experiences={data.experiences} />
        <Project projects={data.projects} />
      </Wrapper>
    )
  }
}

export default App
