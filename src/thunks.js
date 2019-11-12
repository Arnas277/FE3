import axios from 'axios';
import { endpoints } from './config';
import { setMovieList, setGenreList } from './actions';

export const getPopularMovies = () => (dispatch) => {
    axios
        .get(endpoints.mostPopularMovies())
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

export const requestGenres = () => (dispatch) => {
    axios
        .get(endpoints.genres())
        .then((res) => dispatch(setGenreList(res.data.genres)))
        .catch((error) => console.log(error));
};

export const requestGenreMovies = (genreId) => (dispatch) => {
    axios
        .get(endpoints.genreMovies(genreId))
        .then((res) => dispatch(setMovieList(res.data.results)))
        .catch((error) => console.log(error));
};

export const addLog = (message) => {
    const log = {
        type: 'ADD_LOG',
        event: {},
    };

    const date = new Date();
    const nowDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    log.event[nowDate] = message;

    return log;
};
