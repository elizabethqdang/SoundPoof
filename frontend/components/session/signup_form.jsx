import React from "react";
import { withRouter } from "react-router-dom";

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: this.props.userEmail,
			password: "",
			errors: {}
		};

		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		this.clearedErrors = false;
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.signedIn === true || nextProps.currentUser === true) {
			this.props.history.push("/");
			this.props.closeModal();
		}
		this.setState({ errors: nextProps.errors });
	}

	update(field) {
		return e =>
			this.setState({	[field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		const user = Object.assign({}, this.state);
		this.props.processForm(user).then(this.props.closeModal);

		// let user = {
		// 	email: this.state.email,
		// 	password: this.state.password,
		// }
		// this.props.signup(user, this.props.history);
		// .then(this.props.history.push("/"), 
		// () => this.props.closeModal());
	}

	renderErrors() {
		return (
			<ul>
				{this.props.errors.map((error, i) => {
					<li className="errors" key={i}>{error}</li>
				})}
			</ul>
		);
	}

	render() {
		let errors;
		if (this.props.errors) {
			errors = this.props.errors;
		} else {
			errors = {};
		}
		let emailErrors = errors.email ? <div>{errors.email}.</div> : <></>;
		let passwordErrors = errors.password ? (
			<div>{errors.password}.</div>
		) : (
				<></>
			);

		return (
			<div className="session-form-container">
				<form onSubmit={this.handleSubmit} className="session-form">
					<div onClick={this.props.closeModal} className="close-x">
						X
					</div>
					<p className="session-header">Create your SoundPoof account</p>
					<div className="signup-form">
						<br />
						<a href="#">
							<span class="glyphicon glyphicon-triangle-left"></span>
						</a>
						<input
							type="text"
							value={this.props.userEmail}
							onChange={this.update('email')}
							placeholder="Email address"
							className="session-input-email"
						/>
						<div className="session-errors">{emailErrors}</div>
						<br />
						<input
							type="password"
							value={this.state.password}
							onChange={this.update('password')}
							placeholder="Password"
							className="session-input-password"
						/>
						<div className="session-errors">{passwordErrors}</div>
						<br />
						
						<p className="session-instruct">
							Tell us your age *
						</p>
						<input
							type="text"
							value={this.state.birthdate}
							onChange={this.update('birthdate')}
							placeholder="Birthdate (mm/dd/yyyy)"
							className="session-input-birthdate"
						/>
						<br />
						<p className="session-instruct">
							Gender *
						</p>
						<br />
						<div class="session-input-gender">
							<select onChange={this.update('gender')}>
								<option value="0">Indicate your gender</option>
								<option value="1">Female</option>
								<option value="2">Male</option>
								<option value="3">Prefer not to say</option>
								<option value="4">Custom</option>
							</select>
						</div>
						<br />

						<p className="session-instruct">By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>
						<br />
						
						<input type="submit" value="Accept & continue" className="session-submit" />
						{this.renderErrors()}
						<br />
						<p className="session-text">
							Are you trying to sign in? {this.props.login}
						</p>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(SignupForm);