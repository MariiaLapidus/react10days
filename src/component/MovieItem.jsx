import React, {Component} from 'react';
import DeleteMovie from "./DeleteMovie";

class MovieItem extends Component {
    constructor() {
        super();

        this.state = {
            willWatch: false,

        };
        this.removeMovie = this.removeMovie.bind(this);
    }


    changeWillWatch = () => {
        const {addMovieToWillWatch, removeMovieFromWillWatch, item} = this.props;
        this.state.willWatch
            ? removeMovieFromWillWatch(item)
            : addMovieToWillWatch(item);

        this.setState(prevState => ({
            willWatch: !prevState.willWatch
        }));
    };
    removeMovie = movie => {
        const updateMovies = this.state.movies.filter(function (item) {
            return item.id !== movie.id;
        });
        this.setState({
            movies: updateMovies
        })
    }


    render() {
        const {item} = this.props;
        const {willWatch} =this.state;
        const {movie} = this.props;

        return (
            <div className="card" style={{ width: "100%"}}>
                <img
                className="card-img-top"
                src={`https://image.tmdb.org/t/p/w500${item.backdrop_path ||
                item.poster_path}`}
                alt=""
                />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <div className="d-flex justify-content-between align-items-center">
                        <p className="mb-0">Rating: {item.vote_average}</p>
                        <DeleteMovie
                        key = {movie.id}
                        movie={movie}
                        removeMovie={this.removeMovie}
                        />


                        <button
                        type="button"
                        className={`btn ${willWatch ? "btn-success" : "btn-secondary"}`}
                        onClick={this.changeWillWatch}
                        >
                            Will Watch
                        </button>



                    </div>
                </div>

            </div>
        );
    }
}

export default MovieItem;