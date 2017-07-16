import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectGif} from '../actions/index';

class GifItem extends React.Component {
    constructor(props) {
        super(props);
        this.onImageClick = this.onImageClick.bind(this);
    }

    onImageClick() {
        this.props.selectGif(this.props.gif);
    }

    render() {
        const gif = this.props.gif;

        const splittedUrl = gif.images.fixed_width.url.split('://');
        const imageUrl = 'https://' + splittedUrl[1];
        return (
            <img
                className="gif-item"
                src={imageUrl}
                alt={gif.url}
                onClick={this.onImageClick}/>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectGif}, dispatch);
}

export default connect(null, mapDispatchToProps)(GifItem);