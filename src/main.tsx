import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "./styles/reset/index.scss" // Reset with Sass

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
