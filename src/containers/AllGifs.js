import React from 'react';
import {connect} from 'react-redux';

import TitleGif from '../components/TitleGifs';

class AllGifs extends React.Component {
    renderGifs(gif) {
        const splittedUrl = gif.images.fixed_height.url.split('://');
        const imageUrl = 'https://' + splittedUrl[1];
        return (
            <img key={gif.id} src={imageUrl} alt={gif.url} />
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