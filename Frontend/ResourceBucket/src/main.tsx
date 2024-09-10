import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

import { GoogleOAuthProvider } from '@react-oauth/google';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const GoogleClientId = import.meta.env.REACT_APP_GoogleClientId || "Google Client Id False.";
const queryClient = new QueryClient();

// console.log(GoogleClientId);

ReactDOM.createRoot(document.getElementById('root')!).render(


  <GoogleOAuthProvider clientId={GoogleClientId}>

    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </QueryClientProvider>,
    
  </GoogleOAuthProvider>
  
)
