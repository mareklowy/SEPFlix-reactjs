import React, {Component} from 'react';
import MovieCell from "./MovieCell";

class PopularMovies extends Component {
    constructor() {
        super();
        this.state = {
            page: 1,
            movies: null
        }
    }

    componentDidMount() {
        console.log("MOVIESSSSSS:");
        fetch("https://sepflix.herokuapp.com/api/movies"
        ).then(function (response) {
            response.json()
                .then(result => {
                    this.setState({
                        ...this.state,
                        movies: result.movies
                    });
                })
        }.bind(this)).catch(function (error) {
            console.log('Looks like there was a problem: \n', error);
        });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="PopularMoviesTitle">Popular Movies</div>
                <div className="PopularMoviesContainer container-fluid">
                    <div className="row">
                        {this.getMovieTiles(0)}
                    </div>
                    <div className="row">
                        {this.getMovieTiles(3)}
                    </div>
                    <div className="row">
                        {this.getMovieTiles(6)}
                    </div>
                    <div className="row">
                        {this.getMovieTiles(9)}
                    </div>
                    <div className="row">
                        {this.getMovieTiles(12)}
                    </div>
                    <div className="row">
                        {this.getMovieTiles(15)}
                    </div>

                    <div className="row">
                        <div className="PopularMoviesPrev col">
                            {this.getPagePrev()}
                        </div>
                        <div className="PopularMoviesNext col">
                            {this.getPageNext()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getPagePrev() {
        if (this.state.page > 1) {
            return (<div onClick={this.prevPage.bind(this)} className="PopularMoviesPageBTN">Previous</div>)
        }
    }

    getPageNext() {
        return (<div onClick={this.nextPage.bind(this)} className="PopularMoviesPageBTN">Next</div>)
    }

    prevPage() {
        this.setState({
            ...this.state,
            page: this.state.page - 1
        })
    }

    nextPage() {
        this.setState({
            ...this.state,
            page: this.state.page + 1
        })
    }

    getMovieTiles(start) {
        if (this.state.movies != null) {
            let movies = this.state.movies;
            let tiles = [];
            tiles.push(<MovieCell onClicked={this.props.onMovieClicked} movie={movies[start]}/>);
            tiles.push(<MovieCell onClicked={this.props.onMovieClicked} movie={movies[start + 1]}/>);
            tiles.push(<MovieCell onClicked={this.props.onMovieClicked} movie={movies[start + 2]}/>);

            let divs = [];
            divs.push(<div className="col-xl-4 col-lg-6">{tiles[0]}</div>);
            divs.push(<div className="col-xl-4 col-lg-6">{tiles[1]}</div>);
            divs.push(<div className="col-xl-4 col-lg-6">{tiles[2]}</div>);
            return divs;
        }
    }
}

export default PopularMovies;