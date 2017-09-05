import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/searchbar.js'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list.js'
import VideoDetail from './components/video_detail.js'

const API_KEY = 'AIzaSyAG3Z_VDWwBQ12gnYQqB9UXBzU3iVjKloU';

// Create  a new REACT component which produces HTML



class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			videos: [], 
			selectedVideo: null 
		};

		YTSearch({key: API_KEY, term: 'batman'}, (videos) =>  {
			this.setState({
				videos: videos, 
				selectedVideo: videos[0] 
			});
		});
	}

	render() {
		return (
		<div> 
			<SearchBar /> 
			<VideoDetail video={this.state.selectedVideo} />
			<VideoList videos= {this.state.videos} />
		</div>
		);
	}

}


// Take this components generated HTML and put it in the DOM

ReactDOM.render(<App />, document.querySelector('.container'));

// <App /> is an instance of App