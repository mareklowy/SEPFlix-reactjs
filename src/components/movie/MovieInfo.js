import React, {Component} from 'react';
import moment from 'moment';

class MovieInfo extends Component {
    constructor() {
        super();
        this.state = {
            trailer: ""
        }

    }

    static getTrailerRequest(title) {
        return `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURI(title)}+trailer&type=video&key=AIzaSyDuTI4P28XHLbygh3-50h5TIhPlt3ahAys`
    }

    static getTrailerURL(id) {
        return `https://www.youtube.com/embed/${id}`
    }

    componentDidMount() {
        fetch(MovieInfo.getTrailerRequest(this.props.movie.title))
            .then(function (response) {
                response.json()
                    .then(result => {
                        this.setState({
                            ...this.state,
                            trailer: MovieInfo.getTrailerURL(result.items[0].id.videoId)
                        });
                    })
            }.bind(this))
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="MovieInfoPosterContainer col-xl-4">
                        <img className="MovieInfoPoster" src={this.props.movie.poster_path}/>
                    </div>
                    <div className="MovieInfoDetailsContainer col-xl-8">
                        <div className="MovieInfoDetailsText">
                            <div className="MovieInfoTitle">{this.props.movie.title}</div>
                            <div className="MovieInfoRelease">Release date: {this.getReleaseDate()}</div>
                            <div className="MovieInfoOverview">{this.props.movie.overview}</div>
                            <div className="MovieInfoRating">Imbd rating: {this.props.movie.imbd_average}</div>
                        </div>
                        <iframe className="MovieInfoTrailer" title="Trailer" src={this.state.trailer} allowFullScreen/>
                    </div>
                </div>
            </div>
        );
    }

    getReleaseDate() {
        return moment(this.props.movie.release_date).format("DD.MM.YYYY");
    }

    getReleaseYear() {
        let date = new Date(this.props.movie.release_date);
        return date.getFullYear()
    }

    getPosterPath() {
        return this.props.movie.poster_path || "assets/image-not-found.png";
    }
}

export default MovieInfo;