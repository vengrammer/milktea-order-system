import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import routers from './router.jsx'
import { RouterProvider } from 'react-router-dom'
import ContextProvider from './Context/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <RouterProvider router={routers}/>
  </ContextProvider>,
)
