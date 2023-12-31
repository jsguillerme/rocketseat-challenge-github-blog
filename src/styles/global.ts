import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

  :root {
    font-size: 62.5%;
    font-family: 'Nunito', sans-serif;
  }

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 }

 body {
  font-size: 1.6rem;
  background: ${(props) => props.theme['base-background']}
 }
`
