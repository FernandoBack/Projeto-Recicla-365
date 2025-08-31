import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { users } from './services/mockUsers.js';
import { collectionPoints } from './services/mockCollectionPoints.js';
import { AuthProvider } from './contexts/AuthContext.jsx';


if (!localStorage.getItem('recicla365_users')) {
  localStorage.setItem('recicla365_users', JSON.stringify(users));
}


if (!localStorage.getItem('recicla365_collection_points')) {
  localStorage.setItem('recicla365_collection_points', JSON.stringify(collectionPoints));
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);