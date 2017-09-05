import React from 'react';
import VideoListItem from './video_list_item.js'

//when switching from function based component to class based component remember to refactor 
// by converting props to this.props
const VideoList = (props) => {

		const VideoItems = props.videos.map((video) => {
			return <VideoListItem key= {video.etag} video = {video} />
		});

		return (
		<ul className = "col-md-4 list-group">
			{VideoItems}
		</ul>
		);
};

export default VideoList;