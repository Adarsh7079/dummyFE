import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

document.addEventListener('error', (event) => {
  const image = event.target;
  if (image instanceof HTMLImageElement && !image.dataset.fallbackApplied) {
    image.dataset.fallbackApplied = 'true';
    image.src = '/image-unavailable.svg';
  }
}, true);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
