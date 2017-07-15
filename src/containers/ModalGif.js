import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {closeGifModal} from '../actions/index'

class ModalGif extends React.Component {
    constructor(props) {
        super(props);
        this.onOutClick = this.onOutClick.bind(this);
    }

    render() {
        const gif = this.props.selected_gif;

        if (!gif) {
            return <div></div>;
        }

        let username = 'Anonymous';
        if (gif.user) {
            username = gif.user.display_name;
        }

        return (
            <div className="modal-gif" onClick={this.onOutClick}>
                <span className="close-btn modal-close" onClick={this.onOutClick}></span>
                <img
                    className="card-img"
                    src={gif.images.original.url}
                    alt={gif.url}
                    width={gif.images.original.width}
                    height={gif.images.original.height}/>
                <div className="card">
                    <div className="card-block">
                        <h4 className="card-title">Posted by {username}</h4>
                        <a href={gif.url} className="btn btn-primary" target="_blank">See on GIPHY</a>
                    </div>
                </div>
            </div>
        );
    }

    onOutClick(event) {
        if (event.target.className === 'modal-gif' || event.target.className === 'close-btn modal-close') {
            this.props.closeGifModal();
        }
    }
}

function mapStateToProps(state) {
    return {selected_gif: state.selected_gif};
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({closeGifModal}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalGif);