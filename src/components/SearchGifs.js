import React from 'react';

import ModalGif from '../containers/ModalGif';
import AllGifs from '../containers/AllGifs';

class SearchGifs extends React.Component {
    render() {
        return (
            <div>
                <ModalGif />
                <div className="container">
                    <AllGifs term={this.props.match.params.term}/>
                </div>
            </div>
        );
    }
}

export default SearchGifs;