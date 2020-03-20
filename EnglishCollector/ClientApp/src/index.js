import 'bootstrap/dist/css/bootstrap.css'
// react
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import { createBrowserHistory } from 'history'
// redux
import { BrowserRouter } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/rootReducer'
// components
import App from './App'

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const history = createBrowserHistory({ basename: baseUrl });
const rootElement = document.getElementById("root");
const middlwares = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middlwares));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter history={history}>
            <App />
        </BrowserRouter>
    </Provider>
, rootElement);