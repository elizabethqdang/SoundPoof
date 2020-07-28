import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { signup, login, otherForm } from "../../actions/session_actions";
import { openModal, closeModal } from "../../actions/modal_actions";

class SessionForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			errors: []
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.clearedErrors = false;
		this.handleDemo = this.handleDemo.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.loggedIn === true || signedIn === true) {
			// this.props.history.push("/discover");
			this.setState({ loggedIn: true });
		}
		// this.setState({ errors: prevProps.errors });
	}

	update(field) {
		return e =>
			this.setState({ [field]: e.currentTarget.value });
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { email: "Demo-User", password: "password" };
		this.props.login(user)
			// .then(this.props.closeModal);
	}

	handleSubmit(e) {
		e.preventDefault();
		const email = Object.assign({}, this.state);
		this.props.processForm(email);
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => {
					return <li className="errors" key={i}>{error}</li>
				})}
			</ul>
		);
	}

	render() {
		return (
			<div className="session-form-container">
				<div className="session-form-box">
					<div className="session-form">
						<div onClick={this.props.closeModal} className="close-x">
							X
						</div>
						<p className="session-header">Join now</p>
						<br />
						
						<div onClick={this.handleDemo} className="session-demo">
							<button className="session-submit">Continue as Demo User</button>
						</div>
						<br /> or <br />
						<form onSubmit={this.handleSubmit}>
							<input
								type="text"
								placeholder="Your email address or profile URL *"
								className="session-submit"
								onChange={this.update('email')}
							/>
							<ul className="session-errors">{this.renderErrors()}</ul>
							<button type="submit" className="">Continue</button>
						</form>
						<br />
						<div className="session-text">
							We may use your email and devices for updates and tips on SoundCloud's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.

							We may use information you provide us in order to show you targeted ads as described in our Privacy Policy.
							<span onClick={() => this.props.openModal("login")} className="session-link">
								Need help?
							</span>
						</div>
					</div>
				</div>
			</div>
		);
	}
};

const mapStateToProps = (state, ownProps) => ({
    email: state.session.email,
    errors: state.errors.session,
		formType: "session",
		currentUser: state.session.currentUser || {},
		loggedIn: Boolean(state.session.currentUser)
});
const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(login(user)),
    processForm: (user) => dispatch(otherForm(user)),
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);

