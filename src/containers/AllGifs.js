import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {moreGifs} from '../actions/index';

import TitleGif from '../components/TitleGifs';
import GifItem from "./GifItem";

class AllGifs extends React.Component {
    constructor(props) {
        super(props);
        this.onMoreClick = this.onMoreClick.bind(this);
    }

    renderGifs(gif) {
        return (
            <GifItem gif={gif} key={gif.id}/>
        );
    };

    onMoreClick() {
        this.props.moreGifs(this.props.search, this.props.gifs.length);
    }

    render() {
        return (
            <div className="all-gifs">
                <TitleGif search={this.props.search} />
                <hr/>
                <div className="gifs-list">
                    {this.props.gifs.map(this.renderGifs)}
                </div>
                <button className="btn btn-secondary" onClick={this.onMoreClick}>Show more</button>
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

function mapDispatchToProps(dispatch) {
    return bindActionCreators({moreGifs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGifs);