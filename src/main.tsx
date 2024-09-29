import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Acceuil from './Acceuil.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Acceuil />
  </StrictMode>,
)
