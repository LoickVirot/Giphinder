import React from 'react';
import SearchBar from '../containers/SearchBar';

class NavBar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse bg-primary">
                <SearchBar />
            </nav>
        );
    }
}

export default NavBar;