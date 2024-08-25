import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

if (import.meta.env.MODE === 'production') {
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.warn = () => {};
  console.error = () => {};
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
