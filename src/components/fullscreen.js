import styled from 'styled-components'

const FullScreen = styled.div`
  min-height: 100vh;
  padding: 100px;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 50px;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`

export default FullScreen
