import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchString: "",
			searchResults: []
		};
		this.ready = true;
		this.getReady = this.getReady.bind(this);
  }

	handleChange(attrName) {
		return (e) => {
			e.preventDefault();
			this.setState({ [attrName]: e.target.value });
		};
	}

  componentDidUpdate(prevProps, prevState) {
    if (this.ready) {
      this.ready = false;
      this.updateSearchResults();
      window.setTimeout(this.getReady, 50);
    }
  }

  getReady() {
    this.ready = true;
  }

  updateSearchResults() {
    const searchResults = [];
    const { searchString } = this.state;
    // const searchStr = searchString.toLowerCase() || "";
    const { users, tracks } = this.props;


    // for (let i = 0; i < users.length; i++) {
		// 	const username = users[i].username.toLowerCase() || "";


    //   if (searchString.length > 0 && username.startsWith(searchStr)) {
    //     searchResults.push(users[i]);
    //   }
    //   if (searchResults.length > 3) { break; }
    // }

    // for (let i = 0; i < tracks.length; i++) {
		// 	const title = tracks[i].title.toLowerCase() || tracks[i].title;

    //   if (searchString.length > 0 && title.startsWith(searchStr)) {
    //     searchResults.push(tracks[i]);
    //   }
    //   if (searchResults.length > 8) { break; }
    // }

    this.setState({ searchResults });
  }

  searchStringLi() {
    if (this.state.searchString.length > 0) {
      return (
        <li className="search-result-item">
          <div className="search-result-content">
            <div className="search-result-text no-margin">Search for "{this.state.searchString}"</div>
          </div>
        </li>
      );
    } else {
      return null;
    }
  }

	render() {
		// let close;
		// let className = "search-bar";
		// if (this.state.searchInput && this.state.searchInput.address.length > 0) {
		// 	close = (
		// 		<div className="close" onClick={this.handleClearSearch}>
		// 			<i className="close-icon"><img src='/images/navbar/close_icon.png' /></i>
		// 		</div>
		// 	);
		// }

		return (
			<section className="nav-middle">
				<form className="nav-search">
					<input className="nav-search-input" onChange={this.handleChange('searchString')} value={this.state.searchString} type="search" placeholder="Search"></input>
					<ul className="search-results">
						{this.searchStringLi()}
						{
							this.state.searchResults.map((result, idx) => {
								let type;
								if (result.username) {
									type = USER;
								} else {
									type = TRACK;
								}
								return <SearchResultItem key={idx} result={result} type={type} />;
							})
						}
					</ul>
					<button type="submit">Search</button>
				</form>
			</section>
		);
	}
}

const mapStateToProps = state => ({
	tracks: Object.values(state.entities.tracks),
	users: Object.values(state.entities.users)
});

export default connect(mapStateToProps, null)(SearchBar);