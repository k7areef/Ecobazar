import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// React Route
import { BrowserRouter } from 'react-router-dom'
// App Contexts
import AppContexts from '@contexts/AppContexts'
import AppModals from '@modals/AppModals'

// Tanstack:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
// # Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppContexts>
        <AppModals>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AppModals>
      </AppContexts>
    </BrowserRouter>
  </StrictMode>,
)