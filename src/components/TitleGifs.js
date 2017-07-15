import React from 'react';

class TitleGifs extends React.Component {
    render() {
        if (!this.props.search) {
            return <h1>Please type a word to find gifs</h1>
        }
        return (
            <h1>Results for "{this.props.search}" gifs</h1>
        );
    }
}

export default TitleGifs;