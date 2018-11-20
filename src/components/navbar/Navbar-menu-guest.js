import React, {Component} from 'react';

class NavbarMenuGuest extends Component {
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
                    <a className="nav-link" href="#x">Sign In</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#x">Sign Up</a>
                </li>
            </ul>
        );
    }

    toPopular() {
        this.props.toPopular();
    }
}

export default NavbarMenuGuest;