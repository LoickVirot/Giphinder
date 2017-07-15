/**
 * Created by Loïck on 15/07/2017.
 */
import axios from 'axios';

export const FETCH_GIFS = 'FETCH_GIFS';
export const ACTIVE_SEARCH = 'ACTIVE_SEARCH';

const API_KEY = '5ae052aa25754b00abb6811fb76d85f8';

export function fetchGifs(term) {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${term}&limit=25&offset=0&rating=G`;

    const request = axios.get(url);

    return {
        type: FETCH_GIFS,
        payload: request
    }
}

export function activeSearch(term) {
    return {
        type: ACTIVE_SEARCH,
        payload: term
    }
}