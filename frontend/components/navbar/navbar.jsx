import React from "react";
import { Link, withRouter } from "react-router-dom";
import Dropdown from "./dropdown";
import SearchBar from "../search/search_bar";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: ""
    };

    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.navigateToSearch = this.navigateToSearch.bind(this);
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

  // handleClick(modal) {
    // e.preventDefault();
    // this.props.openModal(modal);
    // this.props.history.push("/");
  // }

  // ** BUG FOUND ** 
  // This is causing the search page to always render upon app load up
  handleSearchSubmit(e) {
    this.navigateToSearch();
  }

  // For testing, changed the route from '/search' to '/'
  navigateToSearch() {
    this.props.history.push("/");
  }

  update(property) {
    return e =>
      this.setState({
        [property]: e.target.value
      });
  }

  // Selectively render links dependent on whether the user is logged in
  getLinks() {
    const { logout, currentUser } = this.props;
    if (this.props.loggedIn) {
      return (
          <div className="nav-main">
            <ul className="nav-main-list">
              <li>
                <div>
                  <Link to={"/"} className="nav-link">
                    Upgrade
									</Link>
                </div>
              </li>
              <li>
                <div>
                  <Link to={"/upload"} className="nav-link">
                    Upload
									</Link>
                </div>
              </li>
              <li>
                <div className="nav-link">
                  {/* {currentUser.email} */}
                  <Dropdown
                    // className="everything-but-dropdown"
                    currentUser={currentUser}
                    logout={logout}
                  />
                </div>
              </li>
              <li>
                <div className="nav-link">
                  <Dropdown
                    // className="everything-but-dropdown"
                    currentUser={currentUser}
                    logout={logout}
                  />
                </div>
              </li>
            </ul>
          </div>
      );
    } else {
      return (
          <div className="nav-main">
            <ul className="nav-main-list">
              <li>
                <div className="login-link">
                  <button onClick={this.handleLogin} className="nav-link">
                    Sign in
									</button>
                </div>
              </li>
              <li>
                <div className="signup-link">
                  <button onClick={this.handleClick("signup")} className="nav-link">
                    Create account
									</button>
                </div>
              </li>
              <li>
                <div>
                  <button
                    type="button"
                    className="nav-link"
                  ><Link to={"/upload"}>
                      Upload</Link>
                  </button>
                </div>
              </li>
              <li>
                <div className="nav-link">
                  <button onClick={this.handleClick("dropdown")} className="nav-link">
                  {this.props.currentUser.email}
									</button>
                  
              
                  {/* <Dropdown
                    className="everything-but-dropdown"
                    currentUser={currentUser}
                    logout={logout}
                  /> */}
                </div>
              </li>
            </ul>
          </div>
      );
    }
  }

  render() {
    return (
      <div className="navbar">
        <ul>
        <li>
          <div className="logo">
          <Link to="/">
            <img src='/images/navbar/nooks_cranny_logo.png' />
          </Link>
          </div>
        </li>
        <li>
          <div>
            <Link to={"/discover"} className="nav-link">
              Home
									</Link>
          </div>
        </li>
        <li>
          <div>
            <Link to={"/stream"} className="nav-link">
              Stream
									</Link>
          </div>
        </li>
          <li>
            <div>
              <Link to={"/library"} className="nav-link">
                Library
									</Link>
            </div>
          </li>
        </ul>
        <div className="search-bar">
          <SearchBar />
        </div>
        {this.getLinks()}
      </div>
    );
  }
}

export default withRouter(Navbar);
