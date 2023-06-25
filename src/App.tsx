import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { AppRouter } from './Router'
import { IssueProvider } from './contexts/IssueContext'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <IssueProvider>
        <AppRouter />
      </IssueProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
