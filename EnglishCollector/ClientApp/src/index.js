import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM, { render } from 'react-dom';
import { createBrowserHistory } from 'history';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });
const rootElement = document.getElementById("root");

ReactDOM.render(
    <BrowserRouter history={history}>
        <App />
    </BrowserRouter>
, rootElement);