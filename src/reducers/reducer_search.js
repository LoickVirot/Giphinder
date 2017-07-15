/**
 * Created by Loïck on 15/07/2017.
 */
import {ACTIVE_SEARCH} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case ACTIVE_SEARCH:
            return action.payload;
        default:
            return state;
    }
}