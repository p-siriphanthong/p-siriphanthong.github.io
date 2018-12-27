import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'
import Topic from '../topic'
import { Title, Subtitle, Detail } from '../text'

const Wrapper = styled(FullScreen)`
  width: 30%;
  padding-left: 50px;
  padding-right: 50px;
  display: inline-block;
  vertical-align: top;
  position: relative;

  @media (max-width: 1000px) {
    width: 100%;
    display: flex;
    align-items: center;
  }
`

const Container = styled.div`
  width: 100%;
  max-width: 400px;
  margin: auto;
`

const Box = styled.div`
  margin: 0 auto 25px;
`

class Working extends Component {
  render() {
    return (
      <Wrapper>
        <Container>
          <Topic shape={'square'}>Working</Topic>
          {this.props.workings.map((working, i) => (
            <Box key={i}>
              <Title>{working.title}</Title>
              <Subtitle>{working.duration}</Subtitle>
              <Detail>{working.detail}</Detail>
            </Box>
          ))}
        </Container>
      </Wrapper>
    )
  }
}

export default Working
