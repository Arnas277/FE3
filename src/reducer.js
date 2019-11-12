import { combineReducers } from 'redux';

const initialMovieState = {
    list: [],
};

const initialGenreState = {
    list: [],
};

const initialLikeState = [];

const initialLogsState = [];

const moviesReducer = (state = initialMovieState, action) => {
    switch (action.type) {
        case 'SET_MOVIE_LIST':
            return { ...state, list: action.list };

        default:
            return state;
    }
};

const genresReducer = (state = initialGenreState, action) => {
    switch (action.type) {
        case 'SET_GENRE_LIST':
            return { ...state, list: action.list };

        default:
            return state;
    }
};

const likeReducer = (state = initialLikeState, action) => {
    switch (action.type) {
        case 'LIKE':
            return [ ...state, action.id ];
        case 'DISLIKE':
            return state.filter((currentId) => currentId !== action.id);

        default:
            return state;
    }
};

const logsReducer = (state = initialLogsState, action) => {
    switch (action.type) {
        case 'ADD_LOG':
            return [ ...state, action.event ];

        default:
            return state;
    }
};

export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    liked: likeReducer,
    logs: logsReducer,
});
