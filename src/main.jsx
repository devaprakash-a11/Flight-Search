import React from 'react'
import ReactDOM from 'react-dom/client'
import AOS from 'aos'
import 'aos/dist/aos.css'
import App from './App'
import './main.scss'

AOS.init({ once: true })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
