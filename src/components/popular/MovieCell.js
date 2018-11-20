import React, {Component} from 'react';

class MovieCell extends Component {

    render() {
        return (
            <div onClick={this.movieClicked.bind(this)}
                 className="MovieCellContainer container-fluid waves-effect waves-dark">
                <img className="MovieCellImage" src={this.getPosterPath()} alt="Movie poster"/>
                <div className="marquee">
                    <div className="MovieCellTitle">{this.props.movie.title}</div>
                </div>
                <div className="MovieCellDate">{this.getReleaseYear()}</div>
            </div>
        );
    }

    movieClicked() {
        this.props.onClicked(this.props.movie)
    }

    getReleaseYear() {
        let date = new Date(this.props.movie.release_date);
        return date.getFullYear()
    }

    getPosterPath() {
        return this.props.movie.poster_path || "assets/image-not-found.png";
    }
}

export default MovieCell;