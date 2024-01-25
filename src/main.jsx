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
    blue: '#3470FF',
    activeblue: '#0B44CD',
    lightblack: '#121417',
    pipegray: '#1214171a',
    spangray: '#1214177f',
    selgray: '#12141733',
    scrollgray: '#1214170c',
  },
  radii: {
    sm: '4px',
    md: '8px',
    lg: '16px',
  },
  spacing: value => `${value * 4}px`,
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
