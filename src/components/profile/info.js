import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import FullScreen from '../fullscreen'

// Images
import background from './background.jpg'

const Wrapper = styled(FullScreen)`
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${background});
  background-size: cover;
  background-position-x: right;
  width: 70%;
  padding: 50px;
  display: inline-block;
  vertical-align: top;

  @media (max-width: 1000px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
    display: flex;
    align-items: flex-end;
  }
`

const Container = styled.div`
  letter-spacing: 3px;
  width: fit-content;
  max-width: 100%;
  padding: 30px 50px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 600px) {
    letter-spacing: 2px;
    padding: 20px;
  }
`

const Border = styled.div`
  &:before {
    content: '';
    position: absolute;
    width: 70%;
    height: 60%;
    bottom: 0;
    left: 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.6);
    border-left: 1px solid rgba(255, 255, 255, 0.6);
  }

  &:after {
    content: '';
    position: absolute;
    width: 70%;
    height: 60%;
    top: 0;
    right: 0;
    border-top: 1px solid rgba(255, 255, 255, 0.6);
    border-right: 1px solid rgba(255, 255, 255, 0.6);
  }
`

const Title = styled.h1`
  color: white;
  font-family: 'Julius Sans One', sans-serif;
  font-size: 3.5rem;
  margin: 0 0 10px;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`

const Detail = styled.p`
  font-size: 0.9rem;
  opacity: 0.6;

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`

const EducationContainer = styled.div`
  margin-top: 15px;
`

const Education = styled.p`
  font-size: 0.8rem;
  opacity: 0.6;

  &:before {
    font-family: 'Font Awesome Light';
    content: '\f19d';
    margin-right: 7px;
  }

  @media (max-width: 600px) {
    font-size: 0.7rem;
  }
`

class Info extends Component {
  render() {
    const birthday = new Date('1996/12/26')
    const age = Math.floor((Date.now() - birthday) / 31556926000)

    return (
      <Wrapper>
        <Container>
          <Border />
          <Title>punn</Title>
          <Detail>Punchaya Siriphanthong</Detail>
          <Detail>26 December 1996 | {age} years old</Detail>
          <Detail>p.siriphanthong@gmail.com</Detail>
          <EducationContainer>
            {this.props.educations.map((education, i) => (
              <Education key={i}>{education}</Education>
            ))}
          </EducationContainer>
        </Container>
      </Wrapper>
    )
  }
}

export default Info
