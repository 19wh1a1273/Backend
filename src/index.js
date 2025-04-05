import React from 'react';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import './App.css';

// Get the root DOM element
const container = document.getElementById('root');
// Create a root and render the app
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);