import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {moreGifs, fetchGifs} from '../actions/index';

import TitleGif from '../components/TitleGifs';
import GifItem from "./GifItem";

class AllGifs extends React.Component {
    constructor(props) {
        super(props);
        this.onMoreClick = this.onMoreClick.bind(this);
    }

    componentDidMount() {
        this.props.fetchGifs(this.props.term);
    }

    renderGifs(gif) {
        return (
            <GifItem gif={gif} key={gif.id}/>
        );
    };

    onMoreClick() {
        this.props.moreGifs(this.props.term, this.props.gifs.length);
    }

    render() {
        return (
            <div className="all-gifs">
                <TitleGif search={this.props.term} />
                <hr/>
                <div className="gifs-list">
                    {this.props.gifs.map(this.renderGifs)}
                </div>
                <button className="btn btn-primary more-button" onClick={this.onMoreClick}>Show more</button>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        gifs: state.gifs,
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({moreGifs, fetchGifs}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(AllGifs);