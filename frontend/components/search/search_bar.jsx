import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import TrackSearchResult from "./track_search_result";
import UserSearchResult from "./user_search_result";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: "",
			searchResults: []
		};
		// this.ready = true;
		// this.getReady = this.getReady.bind(this);
		this.updateSearchResults = this.updateSearchResults.bind(this);
		this.searchResultHeader = this.searchResultHeader.bind(this);
  }

	// componentDidMount() {
	// 	let query = this.state.searchInput;
	// 	this.props.fetchUsers({search: query});
	// 	this.props.fetchTracks({search: query});
	// }

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchInput !== this.state.searchInput) {
			this.updateSearchResults();
		}
	}

	updateInput(searchInput) {
		return (e) => {
			e.preventDefault();
			this.setState({ [searchInput]: e.target.value });
		};
	}

  // componentDidUpdate(prevProps, prevState) {
	// 	const { users, tracks } = this.props;
  //   if (this.ready) {
  //     this.ready = false;
  //     this.updateSearchResults();
  //     window.setTimeout(this.getReady, 50);
  //   }
  // }

  // getReady() {
  //   this.ready = true;
  // }

  updateSearchResults() {
		const { users, tracks } = this.props;
    const searchResults = [];
		const { searchInput } = this.state;
		// console.log("searchResults", searchResults);
		// console.log("users", users);
		// console.log("searchInput", searchInput);

    for (let i = 0; i < this.props.users.length; i++) {
			const email = users[i].email.toLowerCase() || "";
			const searchString = this.state.searchInput.toLowerCase() || "";
			console.log("email", email);
			console.log("searchString", searchString);

      if (searchInput.length > 0 && email.includes(searchString)) {
        searchResults.push(users[i]);
      }
      if (searchResults.length > 3) { break; }
    }

    for (let i = 0; i < this.props.tracks.length; i++) {
			const title = tracks[i].title.toLowerCase() || tracks[i].title;
			const searchString = this.state.searchInput.toLowerCase() || "";
			console.log("title", title);
			console.log("searchString", searchString);

      if (searchInput.length > 0 && title.includes(searchString)) {
        searchResults.push(tracks[i]);
      }
      if (searchResults.length > 8) { break; }
    }

    this.setState({ searchResults });
  }

  searchResultHeader() {
    if (this.state.searchInput.length > 0) {
			// this.updateSearchResults();

			return (
        <li className="search-result-item">
          <div className="search-result-content">
            <div className="search-result-text">Search for "{this.state.searchInput}"</div>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }

	render() {
		const { users, tracks } = this.props;
		const { searchInput, searchResults } = this.state;
		console.log("searchInput", searchInput);
		console.log("searchResults", searchResults);
		console.log("users", users);
		console.log("tracks", tracks);

		let close;
		let className = "search-bar";
		if (this.state.searchInput && this.state.searchInput.length > 0) {
			close = (
				<div className="close" onClick={this.handleClearSearch}>
					<i className="close-icon"><img src='/images/navbar/close_icon.png' /></i>
				</div>
			);
		}

		return (
			<section className="nav-middle">
				<form className="nav-search">
					<input className="nav-search-input" 
						onChange={this.updateInput('searchInput')} 
						// onChange={this.updateSearchResults}
						value={this.state.searchInput} 
						type="search" 
						placeholder="Search" />
					<ul className="search-results">
						{this.searchResultHeader()}
						{/* {this.updateSearchResults()} */}
						{
							this.state.searchResults.map((result, idx) => {
								if (result.email) {
									return <UserSearchResult key={idx} user={result} />;
								} else {
									return <TrackSearchResult key={idx} track={result} />;
								}
								// return <SearchResultItem key={idx} result={result} type={type} />;
							})
						}
					</ul>
					<button type="submit">Search</button>
				</form>
			</section>
		);
	}
}

export default SearchBar;