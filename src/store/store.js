

import { createStore, combineReducers } from 'redux';
import cartReducer from './reducers/cartReducer';
import authReducer from './reducers/authReducer';
import favCartReducer from './reducers/favCartReducer';

const rootReducer = combineReducers({
    cart: cartReducer,
    auth: authReducer,
    favCarts: favCartReducer

});

const store = createStore(rootReducer);

export default store;
