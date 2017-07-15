/**
 * Created by Loïck on 15/07/2017.
 */
import {FETCH_GIFS} from '../actions/index';

export default function (state = [], action) {
    switch (action.type) {
        case FETCH_GIFS:
            return action.payload.data.data;
        default:
            return state;
    }
}