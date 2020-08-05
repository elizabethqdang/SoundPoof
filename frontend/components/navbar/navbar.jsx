import React, { Fragment } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import SearchBar from "../search/search_bar_container";
import Stream from "../stream/stream_container";
import SearchResults from "../search/search_results";
import UserShow from "../user/user_show_container";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			searchInput: "",
			searchResults: []
    };

    this.logoutUser = this.logoutUser.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
		// this.navigateToSearch = this.navigateToSearch.bind(this);
		this.navLeft = this.navLeft.bind(this);
		this.navUserLinks = this.navUserLinks.bind(this);
		this.navSessionLinks = this.navSessionLinks.bind(this);
	}
	
	showStream() {
		this.setState({
			showStream: true,
			showSearch: false,
			showProfile: false
		});
		// console.log("stream", this.state.showStream, this.state.showSearch, this.state.showProfile);

	}

	// showSearch() {
	// 	this.setState({
	// 		showStream: false,
	// 		showSearch: true,
	// 		showProfile: false
	// 	});
	// 	console.log("stream", this.state.showStream, this.state.showSearch, this.state.showProfile);

	// }

	showProfile() {
		this.setState({
			showStream: false,
			showSearch: false,
			showProfile: true
		});
		// console.log("stream", this.state.showStream, this.state.showSearch, this.state.showProfile);
	}

  logoutUser(e) {
    e.preventDefault();
    this.props.logout().then(
			this.props.history.push("/")
		);
  }

  handleSignup(e) {
    e.preventDefault();
    this.props.openModal("signup");
    // this.props.history.push("/");
  }

  handleLogin(e) {
    e.preventDefault();
    this.props.openModal("login");
    // this.props.history.push("/");
  }

  // This is causing the search page to always render upon app load up
  handleSearchSubmit(e) {
		e.preventDefault();
    this.navigateToSearch();
  }

  // For testing, changed the route from '/search' to '/'
  // navigateToSearch() {
  //   this.props.history.push("/");
	// }
	
	handleProfile(e) {
		e.preventDefault();
    this.props.history.push(`/users/${this.props.currentUser.id}`);
	}

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

	navSessionLinks(openModal) {
		// const { openModal } = this.props;
		return (
			<Fragment>
			<section className="nav-right">
				<NavLink className="nav-upload hov-white" activeClassName="nav-selected" exact to="/upload" >
						Upload
				</NavLink>
				<Link to="/" className="nav-user-menu">
					<div className="nav-user-button" onClick={() => openModal("signup")}>
					</div>
					<div className="nav-user-username">
						Create account
					</div>
				</Link>
				<div onClick={() => openModal("login")} className="nav-sign-out">
						Sign in
				</div>
			</section>
			</Fragment>
		);
	}

	navLeft() {
		return (
			<Fragment>
				<Link to="/" className="nav-logo">
					SoundPoof
					{/* <img src='https://soundpoof.s3-us-west-2.amazonaws.com/logo.jpg' className="nav-logo" /> */}
				</Link>
				<NavLink className="nav-home" activeClassName="nav-selected" exact to="/">
						Home
				</NavLink>
				<NavLink className="nav-collection" activeClassName="nav-selected" exact to="/stream" onClick={() => this.showStream()}>
					Stream
				</NavLink>
			</Fragment>
		)
	}

	navSearch() {

	}

	navUserLinks(currentUser, logout) {
		// const { currentUser, logout } = this.props;
		// console.log(currentUser.profileUrl);
		return (
			<Fragment>
			{/* <section className="nav-right"> */}
				<NavLink className="nav-upload hov-white" activeClassName="nav-selected" exact to="/upload" >
					Upload
				</NavLink>
				<NavLink exact to={`/users/${currentUser.id}`} onClick={(e) => this.showProfile(e)} className="nav-user-menu">
					<div className="nav-user-button">
						<div className="nav-user-image">
								<span><img src={currentUser.profileImgUrl} /></span>
						</div>
						<div className="nav-user-username truncate">
							{currentUser.email}
						</div>
					</div>
				</NavLink>
				<div onClick={logout} className="nav-sign-out">
					Sign Out
				</div>
				{/* <div className="nav-sign-out nav-menu">
					<Dropdown currentUser={currentUser} logout={logout} />
				</div> */}
			{/* </section> */}
			</Fragment>
		)
	}

  render() {
		const { currentUser, logout, openModal, loggedIn, tracks, users } = this.props;
		let navLeft = this.navLeft();
		let navSearch = this.navSearch();
		let navRight; 
		if (currentUser) {
			navRight = this.navUserLinks(currentUser, logout)
		} else if (!currentUser) {
			navRight = this.navSessionLinks(openModal)
		};

		if (this.state.showStream) {
			return (
			// show = (
				<Stream currentUser={currentUser || null} tracks={tracks} users={users} />
			)
		};

		// if (this.state.showSearch) {
		// 	return (
		// 		<SearchResults currentUser={currentUser || null} tracks={tracks} users={users}/>
		// 	)
		// };

		if (this.state.showProfile) {
			return (
			// show = (
				<UserShow currentUser={currentUser || null} tracks={tracks} users={users}/>
			)
		};

    return (
			<nav id="navbar">
				<nav id="nav-container">
					{/* <nav className="nav"> */}
				<nav id="nav-btns-container">
					<section className="nav-left">
						{navLeft}
					</section>
					<section className="nav-middle">
						<SearchBar />
							{/* {navSearch} */}
					</section>
					<section className="nav-right">
						{navRight}
					</section>
				</nav>
					{/* </nav> */}
				</nav>
			</nav>
		)
  }
}

export default withRouter(Navbar);
