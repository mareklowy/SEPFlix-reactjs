import React, {Component} from 'react';

class NavbarMenuUser extends Component {
    render() {
        return (
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a onClick={this.toPopular.bind(this)} className="nav-link" href="#x">Popular Movies</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#x">Search Trailer</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#x">Favorites</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#x">Profile</a>
                </li>
            </ul>
        );
    }

    toPopular() {
        this.props.toPopular()
    }
}

export default NavbarMenuUser;