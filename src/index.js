import './assets/styles/styles.scss'
import 'core-js/fn/object/assign';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

require('html-loader!./templates/index.html');

ReactDOM.render(<App />, document.getElementById('app'));  
