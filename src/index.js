import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css';
import items from './Data.js'; //Data.js file consist of text that we want to display

ReactDOM.render(<App items={items} />, document.getElementById('root'));
