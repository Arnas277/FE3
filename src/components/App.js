import React from 'react';
import {connect} from 'react-redux';
import Card from './Card';
import Menu from './Menu';
import {setMovieList, addLike, removeLike} from '../actions';
import {getPopularMovies, addLog} from '../thunks';

class App extends React.Component {
  constructor() {
    super();
    

  }

    componentDidMount() {
        const {onGetPopularMovies, addLog} = this.props;
        addLog('Aplikacija uzkrauta');
        onGetPopularMovies();
    }

    setMovieList(movieList) {
        const {onSetMovieList} = this.props;
        onSetMovieList(movieList);
    };

    removeLike(movie) {
        const { onRemoveLike, addLog } = this.props;
        addLog('Disliked '+ movie.title);
        onRemoveLike(movie.id);
    };

    addLike(movie) {
        const { onAddLike, addLog } = this.props;
        addLog('Liked '+ movie.title);
        onAddLike(movie.id);
    };


    render() {
        const {liked} = this.props;
        const {movies} = this.props;

    return (
        <React.Fragment>
            <Menu onChangeList={this.setMovieList}/>

            <div className="cards">
                {movies.map((movie) => (
                    <Card
                        key={movie.id}
                        isLiked={liked.includes(movie.id)}
                        onAddLike={() => this.addLike(movie)}
                        onRemoveLike={() => this.removeLike(movie)}
                        movie={movie}
                    />
                ))}
            </div>
        </React.Fragment>
    );
  }
}

export default connect(
    (state) => {
        return {
            movies: state.movies.list,
            liked: state.liked,
            logs: state.logs,
        };
    },
    (dispatch) => {
        return {
            onGetPopularMovies: () => dispatch(getPopularMovies()),
            onSetMovieList: (list) => dispatch(setMovieList(list)),
            onAddLike: (id) => dispatch(addLike(id)),
            onRemoveLike: (id) => dispatch(removeLike(id)),
            addLog: (message) => dispatch(addLog(message)),
        };
    }
)(App);