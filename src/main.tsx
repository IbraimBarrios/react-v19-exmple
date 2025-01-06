import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import ThemeContext from './context/ThemeContext.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeContext.Provider value='dark'>
      <Suspense fallback="Cargando..." >
        <App />
      </Suspense>
    </ThemeContext.Provider>
  </StrictMode>,
)
