import React from 'react';
import Navbar from '../navbar/navbar_container';

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.showUser = this.showUser.bind(this);
	}

	showUser() {
		let object = {};
		object.preventDefault = function () { };
		if (this.props.home) {
			this.props.openSignIn(object);
		} else {
			window.location.hash = `/${this.props.user.username}`;
		}
	}

	render() {
		// const searchResults = (
		// 	this.props.searchResults.map((result, idx) => {
		// 		if (result.email) {
		// 			return (
		// 				<li className='search-show collection-show'>
		// 					<img onClick={this.showUser} src={this.props.user.profileImgUrl} />
		// 					<span onClick={this.showUser}>{this.props.user.username}</span>
		// 				</li>
		// 			)
		// 		} else {
		// 			return (
		// 				<div></div>
		// 			)
					
		// 		}
		// 	})
		// );
		console.log(this.props.searchResults)

		return (
			<div className={'search-results-container'}>
				<Navbar />
				{/* {searchResults} */}
				{/* <li className='search-show collection-show'>
					<img onClick={this.showUser} src={this.props.user.profileImgUrl} />
					<span onClick={this.showUser}>{this.props.user.username}</span>
				</li> */}
			</div>
		);
	}
}

export default SearchResults;