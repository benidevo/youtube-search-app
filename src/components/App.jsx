import React, { Component } from 'react';
import SearchBar from './SearchBar'
import youtube from '../apis/youtube';
import VideoList from './VideoLIst';


class App extends Component {
    state = { videos: [] };

    onSearchTermSubmit = async searchTerm => {
        const response = await youtube.get('/search',{
            params: {
                q: searchTerm
            }
        });

        this.setState( { videos: response.data.items })
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onSearchTermSubmit} />
                <VideoList videos={this.state.videos}/>
            </div>
        )
    }
}

export default App;