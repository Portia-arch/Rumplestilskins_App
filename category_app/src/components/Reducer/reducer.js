import { FETCH_MOVIES } from "../index";
import { FAVORITE_MOVIES } from "../Category/favorite.js";
import { FETCH_SEARCH } from '../Search/search-action';

export default function (state = null, action) {
    switch (action.type) {
        case FETCH_MOVIES:
            if (action.payload.data.results) {
                return action.payload.data.results;
            }
            break;
        case FAVORITE_MOVIES:
            if (action.payload) {
                return action.payload;
            }
            break;
        case FETCH_SEARCH:
            if (action.payload.data.results) {
                return action.payload.data.results;
            } break;
        default: return state;
    }
}
