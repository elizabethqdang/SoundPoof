import React from 'react';
import Navbar from '../navbar/navbar_container';
import { fetchAllTracks } from '../../actions/track_actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchAllUsers } from '../../actions/user_actions';

class SearchResults extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: this.props.location.search.slice(3).split("%20").join(" "),
			searchResults: []
		};
		this.results = this.results.bind(this);
	}

	componentDidMount() {
		// let search = this.props.searchInput;
		// window.location.hash = `/search?q=${search}`;
	}

	results() {
		const { users, tracks } = this.props;
		console.log("users,tracks", users, tracks);
		const searchResults = [];
		let searchInput = this.props.location.search.slice(3).split("%20").join(" ");

		for (let i = 0; i < this.props.users.length; i++) {
			const email = users[i].email.toLowerCase() || "";
			const searchString = this.state.searchInput.toLowerCase() || "";

			if (searchInput.length > 0 && email.includes(searchString)) {
				searchResults.push(users[i]);
			}
		}

		for (let i = 0; i < this.props.tracks.length; i++) {
			const title = tracks[i].title.toLowerCase() || tracks[i].title;
			const searchString = this.state.searchInput.toLowerCase() || "";

			if (searchInput.length > 0 && title.includes(searchString)) {
				searchResults.push(tracks[i]);
			}
		}

		// this.setState({ searchResults });
		// console.log("searchResults", searchResults);
	}

	render() {

		const { users, tracks, searchResults } = this.props;
		// console.log("users,tracks", users, tracks, this.state.searchResults, this.state.searchResults);
		let searchInput = this.props.location.search.slice(3).split("%20").join(" ");
		console.log(searchInput, this.props.location.search.slice(3).split("%20").join(" "));
		let results = this.results();

		return (
			<div className="search-page">
				<Navbar />
				<h1>Search results for {`"${this.props.location.search.slice(3).split("%20").join(" ")}"`}</h1>

			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	currentUser: state.session.currentUser || {},
	search: state.search,
	tracks: (state.tracks),
	users: (state.users)
});

const mapDispatchToProps = (dispatch) => ({
	fetchAllTracks: () => dispatch(fetchAllTracks(tracks)),
	fetchAllUsers: () => dispatch(fetchAllUsers(users))
});

export default (connect)(mapStateToProps, mapDispatchToProps) (withRouter(SearchResults));