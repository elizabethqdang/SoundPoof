import React from 'react';
import Navbar from '../navbar/navbar_container';

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { searchInput } = this.props;
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
		console.log("searchResults", "seachInput", this.props.searchInput, this.props.searchResults)

		return (
			<div className={'search-results-container'}>
				<Navbar />
				{/* {searchResults} */}
				{/* <li className='search-show collection-show'>
					<img onClick={this.showUser} src={this.props.user.profileImgUrl} />
					<span onClick={this.showUser}>{this.props.user.username}</span>
				</li> */}
				<div className='search-page'>
					<h1>Search results for {`"${this.state.searchInput}"`}</h1>
					{/* {results} */}
				{/* {' '} */}
				</div>

			</div>
		);
	}
}

export default SearchResults;