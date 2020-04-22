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
			<div className="signup-button">
				<button onClick={() => openModal("login")} className="nav-link">
					Sign in
				</button>
			</div>
			<div className="login-button">
				<button onClick={() => openModal("signup")} className="nav-link">
					Create account
				</button>
			</div>
			<div>
				<button
					type="button"
					className="header-button"
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
			<div className="header-item">
				<Link to="/">
					<img src='https://soundpoof.s3-us-west-2.amazonaws.com/logo.jpg' className="splash-icon" />
				</Link>
			</div>
			<div className="header-item">
				<Link to="/" >
					Home
				</Link>
			</div>
			<div className="header-item">
				<Link to={"/stream"} >
					Stream
				</Link>
			</div>
			{/* <div>
				<Link to={"/library"} className="nav-link">
					Library
				</Link>
			</div> */}
			</Fragment>
		)
	}

	navRight(currentUser, logout) {
		return (
			<Fragment>
			{/* <div>
				<Link to={"/"} className="nav-link">
					Upgrade
				</Link>
			</div> */}
			<div className="signup-button">
				<Link to={"/upload"} >
					Upload
				</Link>
			</div>
			<div className="login-button">
				{currentUser.email}
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
			<div id="splash-page">
				<div className="splash-header">

					<div className="splash-bar">
						<div className="splash-left">
							{this.navLeft()}
						</div>
						{/* <div className="search-bar">
							<SearchBar />
						</div> */}
						<div className="login-signup">
							{nav}
						</div>
					</div>
				</div>
			</div>
		)
  }
}

export default withRouter(Navbar);
