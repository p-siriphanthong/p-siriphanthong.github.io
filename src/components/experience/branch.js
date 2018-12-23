import React, { Component } from 'react'
import styled from 'styled-components'

// Components
import Bar from './bar'
import Content from './content'

const Wrapper = styled.div`
  width: 100%;
  position: relative;
`

class Branch extends Component {
  render() {
    return (
      <Wrapper>
        <Bar />
        <Content
          title={this.props.title}
          duration={this.props.duration}
          detail={this.props.detail}
          position={this.props.position}
        />
      </Wrapper>
    )
  }
}

export default Branch
