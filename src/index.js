import React from 'react';
import { createRoot } from 'react-dom/client'; // Mettre à jour l'importation
import App from './App';
import './styles/index.scss';

// Utiliser createRoot pour rendre le composant dans le DOM
const root = createRoot(document.getElementById('root')); // Mettre à jour l'appel de fonction
root.render(<App />);
