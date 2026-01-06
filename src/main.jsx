import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Route
import { BrowserRouter } from 'react-router-dom'
// App Contexts
import AppContexts from '@contexts/AppContexts'
import AppModals from '@modals/AppModals'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContexts>
        <AppModals>
          <App />
        </AppModals>
      </AppContexts>
    </BrowserRouter>
  </StrictMode>,
)