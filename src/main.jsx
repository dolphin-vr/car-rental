import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.js'
import { BrowserRouter } from 'react-router-dom'

const theme = {
  colors: {
    background: '#efefef',
    white: '#ffffff',
    darkwhite: '#F7F7FB',
    gray: '#8A8A89',
    mediumgray: '#363535',
    lightgray: '#f9f9f9',
    blue: '#3470FF',
    activeblue: '#0B44CD',
    lightblack: '#121417',
    spangray: '#1214177f',
    pipegray: '#1214171a',
    selgray: '#12141733',
    scrollgray: '#1214170c',
  },
  radii: {
    sm: '2px',
    lm: '12px',
    md: '14px',
    lg: '24px',
    xl: '24px',
  },
  spacing: value => `${value * 2}px`,
  effect: {
    cubic: '250ms cubic-bezier(0.4, 0, 0.2, 1)'
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter basename='/car-rental'>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </PersistGate>
  </React.StrictMode>,
)
