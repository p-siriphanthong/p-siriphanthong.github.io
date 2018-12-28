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
  target: '_blank',
  onclick: 'void(0)'
})`
  color: ${props => props.theme.icon};
  margin-right: 8px;

  &:hover {
    color: ${props => props.theme.primary};
  }
`

const Url = styled(Icon).attrs({
  title: 'Link'
})`
  font-family: 'Font Awesome Regular';
  font-size: 0.9rem;

  &:before {
    content: '\f0c1';
  }
`

const Github = styled(Icon).attrs({
  title: 'GitHub'
})`
  font-family: 'Font Awesome Brands';

  &:before {
    content: '\f09b';
  }
`

const Youtube = styled(Icon).attrs({
  title: 'Youtube'
})`
  font-family: 'Font Awesome Brands';

  &:before {
    content: '\f167';
  }
`

const Medium = styled(Icon).attrs({
  title: 'Medium'
})`
  font-family: 'Font Awesome Brands';

  &:before {
    content: '\f3c7';
  }
`

const AppStore = styled(Icon).attrs({
  title: 'App Store'
})`
  font-family: 'Font Awesome Brands';

  &:before {
    content: '\f36f';
  }
`

const GooglePlay = styled(Icon).attrs({
  title: 'Google Play'
})`
  font-family: 'Font Awesome Brands';
  font-size: 0.9rem;

  &:before {
    content: '\f3ab';
  }
`

export {
  Title,
  Subtitle,
  Detail,
  Url,
  Github,
  Youtube,
  Medium,
  AppStore,
  GooglePlay
}
