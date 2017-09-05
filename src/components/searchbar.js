import React, { Component } from 'react';

//const SearchBar = () => {
//	return <input />;
//};


// each class based object has a state object 
// if state of search bar is changed then the render function is reran

class SearchBar extends Component{
	// this is how we initialize state in a class based component
	// constructor is used for initializing state 
	// component has a constructor function and we are calling the parent constructor
	constructor(props) {
		super(props);
		// we initialize state by defining a new object and passing it to this.state
		// we want to update term to be whatever this.state is
		// this is the only time state looks like
		this.state = { term : ''};
	}

	render(){
		// we will be changing state in the render function 
		// always manipulate state with this.setState
		return (
			<div>
			<input value = {this.state.term}
			onChange = {event => this.setState({term : event.target.value})} />
			</div>
			//Value of input : {this.state.term} 
			//always wrap a variable around {}
			);
	} // every class must have a render function
	// this is how we put values into our search bar!!
} 

export default SearchBar;