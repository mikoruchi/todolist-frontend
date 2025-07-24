import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoute from './routes/AppRoute.jsx'
import { BrowserRouter } from 'react-router-dom'
import PageTitle from './routes/PageTitle.jsx'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PageTitle/>
    <AppRoute/>
    </BrowserRouter>
  </StrictMode>,
)
