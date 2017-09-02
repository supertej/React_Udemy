import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar.js'
const API_KEY = 'AIzaSyAG3Z_VDWwBQ12gnYQqB9UXBzU3iVjKloU';

// Create  a new REACT component which produces HTML
const App = () => {
	return (<div> 
		<SearchBar /> 
		</div>);
}


// Take this components generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));

// <App /> is an instance of App