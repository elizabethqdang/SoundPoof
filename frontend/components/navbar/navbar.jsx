import React, { Fragment } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import SearchBar from "../search/search_bar_container";
import Stream from "../stream/stream_container";
import SearchResults from "../search/search_results";
import UserShow from "../user/user_show";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			searchInput: "",
			searchResults: [],
			showStream: false,
			showSearch: false,
			showProfile: false,
    };

		// this.showStream = this.showStream.bind(this);
		// this.showSearch = this.showSearch.bind(this);
		// this.showProfile = this.showProfile.bind(this);
    this.logoutUser = this.logoutUser.bind(this);
		this.handleSignup = this.handleSignup.bind(this);
    this.handleProfile = this.handleProfile.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.handleButton = this.handleButton.bind(this);
		// this.navigateToSearch = this.navigateToSearch.bind(this);
		this.navLeft = this.navLeft.bind(this);
		this.navUserLinks = this.navUserLinks.bind(this);
		this.navSessionLinks = this.navSessionLinks.bind(this);
	}

	componentDidMount() {
		this.props.fetchAllTracks();
		this.props.fetchAllUsers();
		this.props.fetchCurrentUser(this.props.currentUser.id);
	}
	
	showStream() {
		this.setState({
			showStream: true,
			showSearch: false,
			showProfile: false
		});
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
	
	handleButton(e, modal) {
		e.preventDefault();
		if (!this.props.loggedIn && modal === "upload") {
			window.location.hash = `/${modal}`;
			// this.props.openModal(`${modal}`);
		} else {
			window.location.hash = `/${modal}`;
			this.props.openModal(`${modal}`);
		}
		// console.log(`"${modal}"`, `/${modal}`, modal);
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

	navSessionLinks() {
		// const { openModal } = this.props;
		return (
			<Fragment>
			<section className="nav-right">
				<NavLink className="nav-upload hov-white" activeClassName="nav-selected" exact to="/upload" onClick={(e) => this.handleButton(e, "upload")}>
						Upload
				</NavLink>
				<div className="nav-user-menu hov-white" onClick={(e, modal) => this.handleButton(e, "signup")}>
						Create account
				</div>
				<div onClick={() => this.props.openModal("login")} className="nav-sign-out">
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
				{/* <NavLink className="nav-home" activeClassName="nav-selected" exact to="/library">
						Library
				</NavLink> */}
				<NavLink className="nav-collection" activeClassName="nav-selected" exact to="/stream" onClick={() => this.showStream()}>
					Stream
				</NavLink>
				<NavLink className="nav-home" activeClassName="nav-selected" exact to="/library">
					Library
				</NavLink>
			</Fragment>
		)
	}

	navSearch() {

	}

	navUserLinks(currentUser, logout) {
		// const { currentUser, logout } = this.props;
		return (
			<Fragment>
			{/* <section className="nav-right"> */}
				<NavLink className="nav-upload hov-white" activeClassName="nav-selected" exact to="/upload" >
					Upload
				</NavLink>
				<NavLink exact to={`/users/${currentUser.id}`} onClick={() => this.showProfile()} className="nav-user-menu" activeClassName="selected">
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
		console.log("navbar", this.state);
		const { currentUser, logout, openModal, loggedIn, tracks, users, trackplayer } = this.props;
		let navLeft = this.navLeft();
		let navSearch = this.navSearch();
		let navRight; 
		let showPage;
		if (loggedIn) {
			navRight = this.navUserLinks(currentUser, logout)
		} else if (!loggedIn) {
			navRight = this.navSessionLinks(openModal)
		};

		if (this.state.showStream) {
			// return (
			showPage = (
				<Stream currentUser={currentUser || {}} tracks={tracks} users={users} trackplayer={trackplayer || {}} />
			)
		};

		// if (this.state.showSearch) {
		// 	return (
		// 		<SearchResults currentUser={currentUser || null} tracks={tracks} users={users}/>
		// 	)
		// };

		if (this.state.showProfile) {
			// return (
			showPage = (
				<UserShow currentUser={currentUser || {}} tracks={tracks} users={users} fetchUser={this.props.fetchUser} fetchAllTracks={this.props.fetchAllTracks} trackplayer={trackplayer || {}} />
			);
		};

    return (
			<Fragment>
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
			{this.showPage}
			</Fragment>
		)
  }
}

export default withRouter(Navbar);
