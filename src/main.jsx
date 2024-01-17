import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
// import './index.css'
import { PersistGate } from 'redux-persist/integration/react'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import store, { persistor } from './redux/store.js'

const theme = {
  colors: {
    background: '#efefef',
    white: '#fff',
    red: '#ff0000',
    green: '#00bb00',
    blue: 'blue',
    gray: '#a9a9a9',
    darkgray: '#808080',
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
    <HashRouter basename="/">
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </HashRouter>
  </PersistGate>
  </React.StrictMode>,
)
