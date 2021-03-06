import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//material
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material';

//Router
import {BrowserRouter} from 'react-router-dom';

//Redux
import {Provider} from 'react-redux';
import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';

//import reducers
import beerReducer from './store/reducers/beer';

//Redux devtools and middleware i.e redux thunk
const composeEnhancers = process.env.NODE_ENV == "development"? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:null||compose;

const rootReducer = combineReducers({
    beer: beerReducer
});

const store = createStore(rootReducer,composeEnhancers(
    applyMiddleware(thunk)
));

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
    
);
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
