/**
 * Created by Loïck on 15/07/2017.
 */
import axios from 'axios';
import {GIPHY} from '../config/api_keys';

export const FETCH_GIFS = 'FETCH_GIFS';
export const FETCH_MORE_GIFS = 'FETCH_MORE_GIFS';
export const ACTIVE_SEARCH = 'ACTIVE_SEARCH';
export const SELECT_GIF = 'SELECT_GIF';
export const CLOSE_GIF_MODAL = 'CLOSE_GIF_MODAL';

const API_KEY = GIPHY;

function searchRequest(term, offset = 0) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term}&limit=25&offset=${offset}&rating=G`;
    return axios.get(url);
}

export function fetchGifs(term) {
    const request = searchRequest(term);

    return {
        type: FETCH_GIFS,
        payload: request
    }
}

export function moreGifs(term, offset) {
    const request = searchRequest(term, offset);

    return {
        type: FETCH_MORE_GIFS,
        payload: request
    }
}

export function activeSearch(term) {
    return {
        type: ACTIVE_SEARCH,
        payload: term
    }
}

export function selectGif(gif) {
    return {
        type: SELECT_GIF,
        payload: gif
    }
}

export function closeGifModal() {
    return {
        type: CLOSE_GIF_MODAL
    }
}
