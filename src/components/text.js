import styled from 'styled-components'

const Title = styled.p`
  color: ${props => props.theme.title};
`

const Subtitle = styled.p`
  color: ${props => props.theme.subtitle};
  font-size: 0.7rem;
`

const Detail = styled.p`
  color: ${props => props.theme.detail};
  font-size: 0.8rem;
  margin-top: 8px;
`

export { Title, Subtitle, Detail }
