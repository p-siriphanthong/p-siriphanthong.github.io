import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import * as serviceWorker from './serviceWorker'
import App from './App'

const GlobalStyle = createGlobalStyle`

  * {
    outline: none;
  }

  body {
    font-family: 'Khula', 'Prompt', sans-serif;
    background: rgb(249, 249, 249);
    margin: 0;
    padding: 0;
  }

  p {
    margin: 0;
  }

  @font-face {
    font-family: 'Font Awesome Brands';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/fa-brands-400.eot');
    src: url('./fonts/fa-brands-400.eot?#iefix') format('embedded-opentype'), 
         url('./fonts/fa-brands-400.woff2') format('woff2'), 
         url('./fonts/fa-brands-400.woff') format('woff'), 
         url('./fonts/fa-brands-400.ttf') format('truetype'), 
         url('./fonts/fa-brands-400.svg#fontawesome') format('svg'); 
  }

  @font-face {
    font-family: 'Font Awesome Light';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/fa-light-300.eot');
    src: url('./fonts/fa-light-300.eot?#iefix') format('embedded-opentype'), 
         url('./fonts/fa-light-300.woff2') format('woff2'), 
         url('./fonts/fa-light-300.woff') format('woff'), 
         url('./fonts/fa-light-300.ttf') format('truetype'), 
         url('./fonts/fa-light-300.svg#fontawesome') format('svg'); 
  }

  @font-face {
    font-family: 'Font Awesome Regular';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/fa-regular-400.eot');
    src: url('./fonts/fa-regular-400.eot?#iefix') format('embedded-opentype'), 
         url('./fonts/fa-regular-400.woff2') format('woff2'), 
         url('./fonts/fa-regular-400.woff') format('woff'), 
         url('./fonts/fa-regular-400.ttf') format('truetype'), 
         url('./fonts/fa-regular-400.svg#fontawesome') format('svg'); 
  }

  @font-face {
    font-family: 'Font Awesome Solid';
    font-style: normal;
    font-weight: normal;
    src: url('./fonts/fa-solid-900.eot');
    src: url('./fonts/fa-solid-900.eot?#iefix') format('embedded-opentype'), 
         url('./fonts/fa-solid-900.woff2') format('woff2'), 
         url('./fonts/fa-solid-900.woff') format('woff'), 
         url('./fonts/fa-solid-900.ttf') format('truetype'), 
         url('./fonts/fa-solid-900.svg#fontawesome') format('svg'); 
  }
`

ReactDOM.render(
  <React.Fragment>
    <App />
    <GlobalStyle />
  </React.Fragment>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
