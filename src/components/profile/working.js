import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'
import Topic from '../topic'
import { Title, Duration, Detail } from '../text'

const Wrapper = styled(FullScreen)`
  width: 30%;
  padding-left: 50px;
  padding-right: 50px;
  display: inline-block;
  vertical-align: top;
  position: relative;
`

const Container = styled.div`
  margin: 0 0 30px;
`

class Working extends Component {
  render() {
    return (
      <Wrapper>
        <Topic>Working</Topic>
        {this.props.workings.map((working, i) => (
          <Container key={i}>
            <Title>{working.title}</Title>
            <Duration>{working.duration}</Duration>
            <Detail>{working.detail}</Detail>
          </Container>
        ))}
      </Wrapper>
    )
  }
}

export default Working
