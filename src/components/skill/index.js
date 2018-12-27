import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'
import Topic from '../topic'
import Box from './box'

const Wrapper = styled(FullScreen)`
  display: flex;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: auto;
`

class Skill extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Topic shape={'triangle-up'}>Skills</Topic>
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
      </Wrapper>
    )
  }
}

export default Skill
