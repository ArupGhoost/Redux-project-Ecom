import { combineReducers } from 'redux';
import { productReducer } from './index';

const reducers = combineReducers({
    allProducts: productReducer,
})

export default reducers;