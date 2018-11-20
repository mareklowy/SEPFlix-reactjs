import React, {Component} from 'react';
import './styles/App.css';
import './styles/Navbar.css'
import './styles/PopularMovies.css'
import './styles/MovieInfo.css'
import Navbar from "./components/navbar/Navbar";
import PopularMovies from "./components/popular/PopularMovies";
import MovieInfo from "./components/movie/MovieInfo";

const Content = {
    "POPULAR_MOVIES": 0,
    "MOVIE_INFO": 1,
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            logged_in: false,
            content: Content.POPULAR_MOVIES,
            movie: null
        }
    }

    render() {
        return (
            <div className="App container-fluid">
                <Navbar
                    logged_in={this.state.logged_in}
                    toPopular={this.toPopular.bind(this)}
                />
                {this.getContent()}
            </div>
        );
    }

    getContent() {
        switch (this.state.content) {
            case Content.POPULAR_MOVIES: {
                return (
                    <PopularMovies onMovieClicked={this.onMovieClicked.bind(this)}/>
                )
            }

            case Content.MOVIE_INFO: {
                return (
                    <MovieInfo movie={this.state.movie}/>
                )
            }
        }
    }

    onMovieClicked(movie) {
        this.setState({
            ...this.state,
            content: Content.MOVIE_INFO,
            movie: movie
        })
    }

    toPopular() {
        this.setState({
            ...this.state,
            content: Content.POPULAR_MOVIES,
            movie: null
        })
    }
}

export default App;
