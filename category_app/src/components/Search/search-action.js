import axios from 'axios';

export const FETCH_SEARCH = 'FETCH_SEARCH';
const API_KEY = "bbe6ac46";

export function fetchSearch(search) {
    let url, request;
    if (search) {
        search.replace(' ', '+');
        url = `http://www.omdbapi.com/?apikey=${API_KEY}&language=en-US&query=${search}`;
        request = axios.get(url);
    }
    else
        request = { data: { results: [] } };



    return {
        type: FETCH_SEARCH,
        payload: request
    }
}
