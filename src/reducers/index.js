/**
 * Created by Loïck on 15/07/2017.
 */
import { combineReducers } from 'redux';
import gifReducer from './reducer_gifs'
import searchReducer from './reducer_search'

const rootReducer = combineReducers({
    gifs: gifReducer,
    search: searchReducer
});

export default rootReducer;