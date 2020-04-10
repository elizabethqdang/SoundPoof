import React from "react";
import { withRouter } from "react-router-dom";

class LoginForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "this.props.userEmail",
			password: "",
			errors: {}
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.handleDemo = this.handleDemo.bind(this);
	}

	// Once the user has been authenticated, redirect to the Tweets page
	componentWillReceiveProps(nextProps) {
		if (nextProps.currentUser === true || nextProps.loggedIn === true) {
			// this.props.history.push("/discover")
			// this.props.closeModal();
		}
		// Set or clear errors
		this.setState({ errors: nextProps.errors });
	}

	// Render the session errors if there are any
	// renderErrors() {
	// 	return (
	// 		<ul>
	// 			{Object.keys(this.state.errors).map((error, i) => (
	// 				<li key={`error-${i}`}>{this.state.errors[error]}</li>
	// 			))}
	// 		</ul>
	// 	);
	// }

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>
				))}
			</ul>
		);
	}

	// Handle field updates (called in the render method)
	update(field) {
		return e =>
			this.setState({ [field]: e.currentTarget.value });
	}

	// Handle form submission
	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.otherForm(user).then(this.props.closeModal);

		// let user = {
		// 	email: this.state.email,
		// 	password: this.state.password
		// };
		// this.props.login(user)
		// 	.then(() => this.props.closeModal());
		// .then(this.props.history.push("/"), () => this.props.closeModal());
		// this.props.login(user);
	}

	handleDemo(e) {
		e.preventDefault();
		const user = { email: "Demo-User", password: "password" };
		this.props.login(user)
			.then(
				this.props.closeModal(), 
				// this.props.history.push("/discover"),
				console.log("user", user)
			);
	}

	render() {
		let errors;
		if (this.props.errors) {
			errors = this.props.errors;
		} else {
			errors = {};
		}
		let emailErrors = errors.email ? <div>{errors.email}</div> : <></>;
		let passwordErrors = errors.password ? (
			<div>{errors.password}</div>
		) : (
				<></>
			);

		return (
			<div className="session-form-container">
				<form onSubmit={this.handleSubmit} className="session-form-box">
					<div onClick={this.props.closeModal} className="close-x">
						X
					</div>
					<div className="session-form">
						<p className="session-form-header">Log in</p>
						<button onClick={this.handleDemo} className="session-submit">
							Log in with DemoUser
						</button>
						<br /> or <br />
						<a href="#">
							<span className="glyphicon glyphicon-triangle-left"></span>
						</a>
						<input
							type="text"
							value={this.props.userEmail}
							onChange={this.update("email")}
							placeholder="Your email"
							className="session-input-email"
						/>
						<div className="session-errors">{emailErrors}</div>
						<br />
						
						<input
							type="password"
							value={this.state.password}
							onChange={this.update("password")}
							placeholder="Your Password *"
							className="session-input-password"
						/>
						<div className="session-errors">{passwordErrors}</div>
						<br />
						<div className="modalError">{this.renderErrors()}</div>

						<input type="submit" value="Sign in" className="session-submit" />
						<br />

						<a href="#" className="session-text">
							Don't know your password?
						</a>
						<br />
							<span
								onClick={() => this.props.openModal("signup")}
								className="session-link"
							>
							</span>
						</div>
				</form>
			</div>
		);
	}
}

export default withRouter(LoginForm);
