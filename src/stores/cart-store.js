import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import messages from './../reducers/messages-reducer';
import cartItems from './../reducers/cart-items-reducer'

const reducer = combineReducers({
    messages,
    cartItems
});

const store = createStore(
    reducer,
    applyMiddleware(thunk, logger),
);

export default store;