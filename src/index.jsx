import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LogoCarousel from './LogoCarousel'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LogoCarousel />
  </StrictMode>,
)
