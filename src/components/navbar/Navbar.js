import React, {Component} from 'react';
import NavbarMenuUser from "./Navbar-menu-user";
import NavbarMenuGuest from "./Navbar-menu-guest";

class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            logged_in: false
        }
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            logged_in: this.props.logged_in
        })
    }

    render() {
        return (
            <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                <div id="navbar_container" className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img onClick={this.toPopular.bind(this)} id="navbar_home_image" src="assets/logo.png"
                             alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbar_menu">
                        <span className="navbar-toggler-icon"/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar_menu">
                        {this.Menu()}
                    </div>
                </div>
            </nav>
        );
    }

    Menu() {
        if (this.state.logged_in) {
            return (<NavbarMenuUser toPopular={this.props.toPopular}/>);
        }
        else {
            return (<NavbarMenuGuest toPopular={this.props.toPopular}/>);
        }
    }

    toPopular() {
        this.props.toPopular();
    }
}

export default Navbar;