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
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-auto-rows: minmax(100px, 200px);
  grid-auto-flow: dense;
  grid-gap: 5px;

  @media (max-width: 600px) {
    grid-template-columns: 50% 50%;
  }
`

class Gallery extends Component {
  render() {
    return (
      <FullScreen>
        <Topic>Gallery</Topic>
        <Container>
          {this.props.gallery.map((image, i) => (
            <Box
              key={i}
              caption={image.caption}
              image={image.src}
              mode={image.mode}
            />
          ))}
        </Container>
      </FullScreen>
    )
  }
}

export default Gallery
