import React from 'react';
import ReactDOM from 'react-dom';
import style from './style.css';
import logo from './assets/baby-yoda.jpeg';
import data from './data.json';

import { Hi } from './components/hi.jsx';

ReactDOM.render(
    <Hi name="react" />,
    document.getElementById('app')
);