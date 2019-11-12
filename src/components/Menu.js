import React from 'react';
import { connect } from 'react-redux';
import {requestGenres, requestGenreMovies, addLog} from '../thunks';

class Menu extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
        const { onRequestGenres } = this.props;
        onRequestGenres();
    }

    requestGenresMovies = (genre) => {
        const { onRequestGenreMovies, addLog } = this.props;
        addLog('Pakeistas zanras i '+ genre.name);
        onRequestGenreMovies(genre.id);
    };

    render() {
        const {genres} = this.props;

        return (
            <div className="genres">
                {genres.list.map((genre) => (
                    <div key={genre.id} className="genre" onClick={() => this.requestGenresMovies(genre)}>
                        {genre.name}
                    </div>
                ))}
            </div>
        );
    }
}

export default connect(
    (state) => {
        return {
            genres: state.genres,
        };
    },
    (dispatch) => {
        return {
            onRequestGenres: () => dispatch(requestGenres()),
            onRequestGenreMovies: (genreId) => dispatch(requestGenreMovies(genreId)),
            addLog: (message) => dispatch(addLog(message)),
        };
    }
)(Menu);