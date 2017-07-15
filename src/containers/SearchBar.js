import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchGifs, activeSearch} from '../actions/index';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);

        this.state = {term: ''};
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        // trigger action creator
        this.props.fetchGifs(this.state.term);
        this.props.activeSearch(this.state.term);
        this.setState({term: ''});

    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline">
                <div className="input-group">
                    <input
                        className="form-control"
                        placeholder="Search for Gifs..."
                        onChange={this.onInputChange}
                        value={this.state.term}
                    />
                    <span className="input-group-btn">
                        <button type="submit" className="btn btn-secondary">Search</button>
                    </span>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({fetchGifs, activeSearch}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);