import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { Provider } from 'react-redux';
import store from './store/store.js';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>

    <StrictMode>

      <LanguageProvider>
          <AuthProvider>
            
          
        <Provider store={store}>

          <App />

        </Provider>
         </AuthProvider>
      </LanguageProvider>

    </StrictMode>

  </BrowserRouter>

)
