import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import configureStore from './redux/configureStore';
import {BrowserRouter} from 'react-router-dom';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';

import 'uikit/dist/css/uikit.min.css';

// loads the Icon plugin
UIkit.use(Icons);

const store = configureStore();

const WithRouter = () => (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

const WithProvider = () => (
    <Provider store={store}>
        <WithRouter />
    </Provider>
)

ReactDOM.render(<WithProvider />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
