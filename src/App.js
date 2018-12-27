import React, { Component } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import data from './data.json'
import theme from './theme'

// Components
import Profile from './components/profile'
import Skill from './components/skill'
import Experience from './components/experience'
import Project from './components/project'
import Gallery from './components/gallery'

const Wrapper = styled.div`
  background: white;
  max-width: 1920px;
  margin: auto;
`

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Wrapper>
          <Profile educations={data.educations} workings={data.workings} />
          <Skill skills={data.skills} />
          <Experience experiences={data.experiences} />
          <Project projects={data.projects} />
          <Gallery gallery={data.gallery} />
        </Wrapper>
      </ThemeProvider>
    )
  }
}

export default App
