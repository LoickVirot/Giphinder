import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchGifs} from '../actions/index';

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
        // trigger action creator
        this.props.fetchGifs(this.state.term);
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="form-inline" action={`/search/${this.state.term}`} >
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
    return bindActionCreators({fetchGifs}, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);