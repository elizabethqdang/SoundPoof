import React from "react";
import { Link } from "react-router-dom";

class Dropdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showMenu: false
		};
		this.showMenu = this.showMenu.bind(this);
		this.closeMenu = this.closeMenu.bind(this);
		this.dropdownElement = null;

		this.setDropwdownElementRef = element => {
			this.dropdownElement = element;
		};
	}

	logout(e) {
		e.preventDefault();
		this.props.logout().then(
			this.props.history.push("/")
		);
	}

	showMenu(e) {
		e.preventDefault();
		if (this.state.showMenu === false ) {
			this.setState(
				{ showMenu: true },
				() => { 
					document.addEventListener("click", e => this.closeMenu(e)) 
				}
			);
		} else if (this.state.showMenu === true) {
			this.setState(
				{ showMenu: false },
				() => {
					document.addEventListener("click", e => this.closeMenu(e));
				},
			);
		}
	}

	closeMenu(e) {
		e.preventDefault();
		if (this.dropdownElement && !this.dropdownElement.contains(e.target)) {
			if (this.state.showMenu === false) {
				this.setState(
					{ showMenu: false }, 
					() => {document.removeEventListener("click", e => this.closeMenu(e));}
				);
			} else {
				this.setState(
					{ showMenu: true },
					() => { document.removeEventListener("click", e => this.closeMenu(e)); }
				);
			}
		}
	}

	render() {
		const { currentUser, logout } = this.props;
		const menu = this.state.showMenu ? (
			<div className="">
				<div className="user-dropdown-list">
					<button className="dropdown-button">
						<Link to={`/users/${currentUser.id}`} className="">
							{" "}
							Profile
					</Link>
					</button>
					<button onClick={logout} className="dropdown-button">
						Logout
				</button>
				</div>
			</div>
		) : null;

		return (
			<div>
				<button type="button" onClick={this.showMenu} className="header-item">
					<div
						ref={el => {
							this.dropdownElement = el;
						}}
					>
					</div>
					<img className="profile-pict" />
					 <div className="creator-button">{currentUser.email}
					</div>
				</button>

				{menu}
			</div>
		);
	}
}

export default Dropdown;