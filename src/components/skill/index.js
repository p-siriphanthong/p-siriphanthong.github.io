import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'
import Topic from '../topic'
import Box from './box'

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
`

class Skill extends Component {
  render() {
    return (
      <FullScreen>
        <Topic>Skills</Topic>
        <Container>
          {this.props.skills.map((skill, i) => (
            <Box
              key={i}
              title={skill.title}
              detail={skill.detail}
              percent={skill.percent}
              code={skill.code}
              type={skill.type}
            />
          ))}
        </Container>
      </FullScreen>
    )
  }
}

export default Skill
