import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { AppRouter } from './Router'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <AppRouter />
      <GlobalStyle />
    </ThemeProvider>
  )
}
