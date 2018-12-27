import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'
import Topic from '../topic'
import Branch from './branch'

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`

class Experience extends Component {
  render() {
    return (
      <FullScreen>
        <Topic shape={'parallelogram'}>Experiences</Topic>
        <Container>
          {this.props.experiences.map((experience, i) => (
            <Branch
              key={i}
              title={experience.title}
              duration={experience.duration}
              detail={experience.detail}
              position={i % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </Container>
      </FullScreen>
    )
  }
}

export default Experience
