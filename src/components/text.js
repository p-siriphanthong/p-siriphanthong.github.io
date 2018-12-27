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
  margin: 8px 0;
`

const Icon = styled.a.attrs({
  target: '_blank'
})`
  color: ${props => props.theme.icon};
  font-family: 'Font Awesome Brands';
  margin-right: 8px;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Github = styled(Icon)`
  &:before {
    content: '\f09b';
  }
`

const Youtube = styled(Icon)`
  &:before {
    content: '\f167';
  }
`

const Medium = styled(Icon)`
  &:before {
    content: '\f3c7';
  }
`

export { Title, Subtitle, Detail, Github, Youtube, Medium }
