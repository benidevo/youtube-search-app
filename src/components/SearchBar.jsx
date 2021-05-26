import React, { Component } from 'react';


class SearchBar extends Component {
    state = { searchTerm: 'tjskfhoisjkf,s' };

    onInputChange = event => {
        this.setState({ searchTerm: event.target.value })

    };

    onFormSubmit = event => {
        event.preventDefault();

        // TODO: make sure we call callback from parent component
        this.props.onFormSubmit(this.state.searchTerm);
    };

    render() {
        return (
            <div className="serach-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Video Search</label>
                        <input type="text" name="text" id="search"
                        onChange={this.onInputChange} 
                        value={this.state.searchTerm} />
                    </div>

                </form>
            </div>
        );
    }
    
}


export default SearchBar;