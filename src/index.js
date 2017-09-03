import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar.js'
import YTSearch from 'youtube-api-search'
const API_KEY = 'AIzaSyAG3Z_VDWwBQ12gnYQqB9UXBzU3iVjKloU';

// Create  a new REACT component which produces HTML



class App extends Component{
	constructor(props) {
		super(props);
		this.state = {videos: []};
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) =>  {
		this.setState({ videos });
		});
	}
	render() {
		return (<div> 
		<SearchBar /> 
		</div>);
	}

}


// Take this components generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));

// <App /> is an instance of App