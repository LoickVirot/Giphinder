/**
 * Created by Loïck on 15/07/2017.
 */
import { combineReducers } from 'redux';
import gifReducer from './reducer_gifs'
import selectedGifReducer from './reducer_selected_gif';

const rootReducer = combineReducers({
    gifs: gifReducer,
    selected_gif: selectedGifReducer,
});

export default rootReducer;