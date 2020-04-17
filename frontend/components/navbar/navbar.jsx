import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
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
    this.props.logout();
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
			<div className="login-link">
				<button onClick={() => openModal("login")} className="nav-link">
					Sign in
				</button>
			</div>
			<div className="signup-link">
				<button onClick={() => openModal("signup")} className="nav-link">
					Create account
				</button>
			</div>
			<div>
				<button
					type="button"
					className="nav-link"
				><Link to={"/upload"}>
						Upload</Link>
				</button>
			</div>
			</Fragment>
		);
	}

	navLeft() {
		return (
			<Fragment>
			<div className="logo">
				<Link to="/">
					<img src='' />
				</Link>
			</div>
			<div>
				<Link to={"/discover"} className="nav-link">
					Home
				</Link>
			</div>
			<div>
				<Link to={"/stream"} className="nav-link">
					Stream
							</Link>
			</div>
			<div>
				<Link to={"/library"} className="nav-link">
					Library
				</Link>
			</div>
			</Fragment>
		)
	}

	navRight(currentUser, logout) {
		return (
			<Fragment>
			<div>
				<Link to={"/"} className="nav-link">
					Upgrade
				</Link>
			</div>
			<div>
				<Link to={"/upload"} className="nav-link">
					Upload
				</Link>
			</div>
			<div className="nav-link">
				{/* {currentUser.email} */}
				<Dropdown
					currentUser={currentUser}
					logout={logout}
				/>
			</div>
			</Fragment>
		)
	}

  render() {
		const { currentUser, logout, openModal } = this.props;
		let nav; 
		if (currentUser) {
			nav = this.navRight(currentUser, logout)
		} else if (!currentUser) {
			nav = this.navSessionLinks(openModal)
		};

    return (
			<div className="navbar-container">
				{this.navLeft()}
				<div className="search-bar">
					<SearchBar />
				</div>
				{/* {currentUser ? this.navRight(currentUser, logout) : this.navSessionLinks(openModal) } */}
				{nav}
				{/* {this.navRight(currentUser, logout)} */}
			</div>
		)
  }
}

export default withRouter(Navbar);
