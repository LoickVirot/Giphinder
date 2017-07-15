/**
 * Created by Loïck on 15/07/2017.
 */

import {SELECT_GIF, CLOSE_GIF_MODAL} from '../actions/index';

export default function (state = null, action) {
    switch (action.type) {
        case SELECT_GIF:
            return action.payload;
        case CLOSE_GIF_MODAL:
            return null;
        default:
            return state;
    }
}