import './assets/styles/styles-m.scss';
import './assets/styles/styles-l.scss';
import 'core-js/fn/object/assign';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

require('html-loader!./templates/index.html');

ReactDOM.render(<App />, document.getElementById('app'));  
