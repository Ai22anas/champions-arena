import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import global styles (you can customize or remove this line if no global styles yet)
// import './index.css';

ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
