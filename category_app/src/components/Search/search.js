import { SEARCH_MOVIE, FETCH_MOVIES, FETCH_MOVIE, LOADING } from './types';
import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });
};

export const setLoading = () => {
    return {
        type: LOADING
    };
};

export const fetchMovies = text => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?&apikey=${API_KEY}&s=${text}`)
        .then(response => {
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data
            });
        })
        .catch(err => console.log(err));
};

export const fetchMovie = id => dispatch => {
    axios
        .get(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
        )
        .catch(err => console.log(err));
};
