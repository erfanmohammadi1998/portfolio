import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import { ThemeProvider } from './theme.jsx'
// Self-hosted fonts: Google Fonts is unreachable for many visitors in Iran.
import '@fontsource-variable/vazirmatn'
import '@fontsource-variable/manrope'
import '@fontsource-variable/syne'
import '@fontsource/instrument-serif/400-italic.css'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)
