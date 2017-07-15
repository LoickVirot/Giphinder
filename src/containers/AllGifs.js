import React from 'react';
import {connect} from 'react-redux';

import TitleGif from '../components/TitleGifs';
import GifItem from "./GifItem";

class AllGifs extends React.Component {
    renderGifs(gif) {
        return (
            <GifItem gif={gif} key={gif.id}/>
        );
    };

    render() {
        return (
            <div className="all-gifs">
                <TitleGif search={this.props.search} />
                <hr/>
                {this.props.gifs.map(this.renderGifs)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs,
        search: state.search
    }
}

export default connect(mapStateToProps)(AllGifs);