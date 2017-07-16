import React from 'react';
import SearchBar from '../containers/SearchBar';
import {NavLink} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
                <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <a className="navbar-brand" href="/">Giphinder</a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link"
                                activeClassName="selected"
                            >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/search"
                                className="nav-link"
                                activeClassName="selected"
                            >Search</NavLink>
                        </li>
                    </ul>
                    <SearchBar />
                </div>
            </nav>
        );
    }
}

export default NavBar;