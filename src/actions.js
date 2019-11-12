export const setMovieList = (list) => ({
    type: 'SET_MOVIE_LIST',
    list,
});

export const setGenreList = (list) => ({
    type: 'SET_GENRE_LIST',
    list,
});

export const addLike = (id) => ({
    type: 'LIKE',
    id,
});

export const removeLike = (id) => ({
    type: 'DISLIKE',
    id,
});
