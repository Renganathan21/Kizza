import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/context/StateProvider';
import { initialState } from './components/context/initialState';
import reducer from './components/context/reducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <StateProvider initialState={initialState} reducer={reducer}>
            <App />
        </StateProvider>
    </Router>,
    
  
);

reportWebVitals();
