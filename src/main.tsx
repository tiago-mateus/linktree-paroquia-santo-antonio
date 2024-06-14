import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initGA, logPageView } from './analytics'
import { BrowserRouter } from 'react-router-dom'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Inicializa o Google Analytics
initGA();

const AppWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    logPageView();
  }, [location]);

  return <App />;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  </React.StrictMode>,
)
