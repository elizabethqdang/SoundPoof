import React, { Fragment } from "react";
import { Link, withRouter, NavLink } from "react-router-dom";
import Dropdown from "./dropdown";
import SearchBar from "../search/search_bar";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
			searchInput: "",
    };

    this.logoutUser = this.logoutUser.bind(this);
    // this.getLinks = this.getLinks.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
		// this.navigateToSearch = this.navigateToSearch.bind(this);
		this.navLeft = this.navLeft.bind(this);
		this.navRight = this.navRight.bind(this);
		this.navSessionLinks = this.navSessionLinks.bind(this);
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
				<Link to="/"className="nav-user-menu">
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
			<section className="nav-left">
				<Link to="/"className="nav-logo">
					SoundPoof
					{/* <img src='https://soundpoof.s3-us-west-2.amazonaws.com/logo.jpg' className="nav-logo" /> */}
				</Link>
				<NavLink className="nav-home" activeClassName="nav-selected" exact to="/discover">
						Home
				</NavLink>
				<NavLink className="nav-collection" activeClassName="nav-selected" exact to="/stream">
					Stream
				</NavLink>
			</section>
			</Fragment>
		)
	}

	navRight(currentUser, logout) {
		return (
			<Fragment>
			<section className="nav-right">
				<NavLink className="nav-upload hov-white" activeClassName="nav-selected" exact to="/upload" >
					Upload
				</NavLink>
				<Link to={`/users/${currentUser.id}`} className="nav-user-menu">
					<div className="nav-user-button">
						<div className="nav-user-image">
							{/* <Dropdown
								currentUser={currentUser}
								logout={logout}
							/> */}
							<span style={currentUser.profile ? currentUser.profile : null}>Placeholder</span>
						</div>
						<div className="nav-user-username">{currentUser.email}</div>
					</div>
				</Link>

 				<div onClick={logout} className="nav-sign-out">Sign Out</div>
			</section>
			</Fragment>
		)
	}

  render() {
		const { currentUser, logout, openModal, loggedIn } = this.props;
		let nav; 
		if (currentUser) {
			nav = this.navRight(currentUser, logout)
		} else if (!currentUser) {
			nav = this.navSessionLinks(openModal)
		};

    return (
			<div id="navbar">
			<div id="navbar-container">
				<nav className="nav">
					<div className="inner-nav full-width transparent-background no-height">
							{this.navLeft()}
							<SearchBar />
							{nav}
					</div>
				</nav>
			</div>
			</div>
		)
  }
}

export default withRouter(Navbar);
