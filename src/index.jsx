import { StrictMode } from 'react';
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
    <StrictMode>

        <img
            className="img-bg"
            src="https://narolan.github.io/dnd-cards/background.jpg"
            alt=""
        />
        <App className="app"/>
    </StrictMode>
);

reportWebVitals();
