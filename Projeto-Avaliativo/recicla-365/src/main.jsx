import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import ReactDOM from 'react-dom/client'

import { users } from './services/mockUsers.js'

if (!localStorage.getItem('users')) {
  localStorage.setItem('users', JSON.stringify(users))
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
