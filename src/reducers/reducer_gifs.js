/**
 * Created by Loïck on 15/07/2017.
 */
import {FETCH_GIFS, FETCH_MORE_GIFS} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_GIFS:
            return action.payload.data.data;
        case FETCH_MORE_GIFS:
            return [
                ...state,
                ...action.payload.data.data
            ];
        default:
            return state;
    }
}