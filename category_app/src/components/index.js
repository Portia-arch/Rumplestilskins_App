import axios from 'axios';

export const FETCH_MOVIES = 'FETCH_MOVIES';
export const CHANGE_TYPE = 'CHANGE_TYPE';
const API_KEY = "bbe6ac46";

export function fetchData(category) {
    const url = `http://www.omdbapi.com/?apikey=${category}?api_key=${API_KEY}&language=en-US`;
    const request = axios.get(url);

    return {
        type: FETCH_MOVIES,
        payload: request
    }
}