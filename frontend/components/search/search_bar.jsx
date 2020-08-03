import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { NavLink } from "react-router-dom";
import TrackSearchResult from "./track_search_result";
import UserSearchResult from "./user_search_result";
import SearchResults from "./search_results";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchInput: "",
			searchResults: [],
			showSearch: false
		};

		this.updateSearchResults = this.updateSearchResults.bind(this);
		this.searchResultHeader = this.searchResultHeader.bind(this);
		// this.toSearch = this.toSearch.bind(this);
		// this.showSearch = this.showSearch.bind(this);	
		// this.clickResult = this.clickResult.bind(this);
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.searchInput !== this.state.searchInput) {
			this.updateSearchResults();
		}
	}

	showSearch() {
		this.setState({
			showSearch: true,
		});
	}

	updateInput(searchInput) {
		return (e) => {
			e.preventDefault();
			this.setState({ [searchInput]: e.target.value });
		};
	}

  updateSearchResults() {
		const { users, tracks } = this.props;
    const searchResults = [];
		const { searchInput } = this.state;

    for (let i = 0; i < this.props.users.length; i++) {
			const email = users[i].email.toLowerCase() || "";
			const searchString = this.state.searchInput.toLowerCase() || "";

      if (searchInput.length > 0 && email.includes(searchString)) {
        searchResults.push(users[i]);
      }
      if (searchResults.length > 3) { break; }
    }

    for (let i = 0; i < this.props.tracks.length; i++) {
			const title = tracks[i].title.toLowerCase() || tracks[i].title;
			const searchString = this.state.searchInput.toLowerCase() || "";

      if (searchInput.length > 0 && title.includes(searchString)) {
        searchResults.push(tracks[i]);
      }
      if (searchResults.length > 8) { break; }
    }

    this.setState({ searchResults });
  }

  searchResultHeader() {
    if (this.state.searchInput.length > 0) {
			return (
					<li className="search-result-item">
						<div className="search-result-content">
							<div className="search-result-text" onClick={this.toSearch}>Search for "{this.state.searchInput}"</div>
						</div>
					</li>
      );
    } else {
      return null;
    }
	}
	
	toSearchs(e) {
		if (e.key === 'Enter' && e.target.value !== '') {
			window.location.hash = `/search?q=${e.target.value}`;
		}
	}

	clickResult(e) {
		e.preventDefault();
		window.location.hash
	}

	render() {
		const { users, tracks, currentUser } = this.props;
		const { searchInput, searchResults } = this.state;
		
		// if (this.state.showSearch) {
		// 	window.location.hash = `/search?q=${this.state.searchInput}`;
		// 	return (
		// 		<SearchResults currentUser={currentUser || null} tracks={tracks} users={users} />
		// 	)
		// };
		return (
			// <section className="nav-middle">
				<form className="nav-search">
				{/* <NavLink exact to={`/search?q=${this.state.searchInput}`} onClick={this.showSearch()}> */}

					<input className="nav-search-input" 
						onChange={this.updateInput('searchInput')} 
						value={this.state.searchInput} 
						type="search" 
						placeholder="Search"
						onSubmit={(e) => this.toSearch(e)} />
					<ul className="search-results">

						{this.searchResultHeader()}
						{
							this.state.searchResults.map((result, idx) => {
								if (result.email) {
									return (
										<li key={idx} className='search-show collection-show'>
											<img src={result.profileImgUrl} />
												<span>{result.email}</span>
												<div className="search-result-user-icon"></div>
											</li>
									)
								} else {
									return (
										<li key={idx} className='track-show search-show collection-show'>
											<img src={result.artworkUrl} />
												<span>{result.title}</span>
												<div className="search-result-track-icon"></div>
											</li>
									)
								}
							})
						}
					</ul>
					<button type="submit" />
				</form>
			// </section>
		);
	}
}

export default withRouter(SearchBar);