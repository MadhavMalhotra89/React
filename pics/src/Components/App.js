import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from "./SearchBar"
import ImageList from "./ImageList"

class App extends React.Component {

    state = {images: []};

    onSearchSubmit = async (term) => {
        /*axios.get('https://api.unsplash.com/search/photos', {
            params: {query: term},
            headers: {
                Authorization: 'Client-ID 1apS6WVwxJYl1DP2WqJBAYgxojOEKGbL0KAztJAatz0'
            }
        }).then((response) => {
            console.log(response.data.results);
        });*/
        const resp = await unsplash.get('/search/photos', {
            params: {query: term},
        });
        //console.log(response.data.results);
        this.setState({images: resp.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;