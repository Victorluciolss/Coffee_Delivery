/* eslint-disable prettier/prettier */
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Router } from './Router'
import { BagContextProvider } from './context/BagContext'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BagContextProvider>
        <BrowserRouter>
           <Router/> 
        </BrowserRouter>
      </BagContextProvider>
      <GlobalStyle/>
    </ThemeProvider>
  )
}
