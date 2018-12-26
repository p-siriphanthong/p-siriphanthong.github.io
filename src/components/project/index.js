import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'
import Topic from '../topic'
import Box from './box'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 50px;
`

class Project extends Component {
  render() {
    return (
      <FullScreen>
        <Topic>Projects</Topic>
        <Container>
          {this.props.projects.map((project, i) => (
            <Box
              key={i}
              title={project.title}
              subtitle={project.subtitle}
              detail={project.detail}
              image={project.image}
            />
          ))}
        </Container>
      </FullScreen>
    )
  }
}

export default Project
