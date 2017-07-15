/**
 * Created by Loïck on 15/07/2017.
 */
import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise';
import rootReducer from '../reducers/index';


let store = createStore(rootReducer, applyMiddleware(promiseMiddleware));

export default store;