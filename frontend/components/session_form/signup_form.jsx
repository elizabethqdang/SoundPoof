import React from "react";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			// errors: {},
			location: ""
		};

		this.handleClear = this.handleClear.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.renderErrors = this.renderErrors.bind(this);
		// this.clearedErrors = false;
		this.switchForm = this.switchForm.bind(this);
	}

	componentDidUpdate(prevProps) {
		if (this.props.loggedIn === true || this.props.currentUser === true) {
			// this.props.history.push("/");
			this.props.closeModal();
		}
		// this.setState({ errors: this.state.errors.session });
	}

	update(field) {
		return e =>
			this.setState({	[field]: e.currentTarget.value });
	}

	handleSubmit(e) {
		e.preventDefault();
		// const user = Object.assign({}, this.state);
		// this.props.processForm(user).then(this.props.closeModal);

		let user = {
			email: this.state.email,
			password: this.state.password,
			location: this.state.location
		}
		this.props.signup(user).then(
			// this.props.history.push("/stream"), 
			() => this.props.closeModal(),
			// console.log(user, "user")
		);
	}

	renderErrors() {
		let errors = this.props.errors;
		return (
			<ul className="session-errors">
				{errors ? errors.map((error, i) => (
					<li key={`error-${i}`}>{error}</li>)) : {}
				}
			</ul>
		)
	}

	switchForm(e) {
		e.preventDefault();
		this.props.clearSessionErrors();
		this.props.openModal("login");
	}

	handleClear(e) {
		e.preventDefault();
		this.props.clearSessionErrors();
		this.props.closeModal();
	}

	render() {
		let error = ((this.props.errors && this.props.errors.length > 0) ? 'error' : '');
		// let errors = this.renderErrors();
		
		return (
			<div className="session-form-container">
				<div onClick={(e) => this.handleClear(e)} className="close-x">
					X
				</div>

				<p className="session-header">Create your SoundPoof account</p>

				<form onSubmit={(e) => this.handleSubmit(e)} className="session-form">
					<div className="signup-form">
						<a href="#">
							<span class="glyphicon glyphicon-triangle-left"></span>
						</a>
						<input
							type="text"
							value={this.state.email}
							onChange={this.update('email')}
							placeholder="You e mail address or username"
							className={`session-input email ${error}`}
						/>
						{/* <div className="modalError">{errors}</div> */}

						<p className="session-instruct">
							Choose a password
						</p>
						<input
							type="password"
							value={this.state.password}
							onChange={this.update('password')}
							placeholder=""
							className={`session-input password ${error}`}
						/>
						<div className="modalError">{errors}</div>

						<div>
							<input
								type="text"
								value={this.state.location}
								onChange={this.update('location')}
								placeholder="Your Location"
								className="session-input password"
							/>
						</div>
						
						{/* <p className="session-instruct">
						</p> */}
						<input
							type="text"
							// value={this.state.birthdate}
							// onChange={this.update('birthdate')}
							placeholder="Birthdate (mm/dd/yyyy)"
							className="session-input birthdate"
						/>
						{/* <p className="session-instruct">
							Gender *
						</p>
						<br />
						<div className="session-input gender">
							<select onChange={this.update('gender')}>
								<option value="0">Indicate your gender</option>
								<option value="1">Female</option>
								<option value="2">Male</option>
								<option value="3">Prefer not to say</option>
								<option value="4">Custom</option>
							</select>
						</div> */}

						<p className="session-text">By signing up I accept the Terms of Use. I have read and understood the Privacy Policy and Cookies Policy.</p>
						<br />
						
						<input type="submit" value="Accept & continue" className="session-submit" />
						<br />
						<p className="session-text">
							Are you trying to sign in? 		
							<Link to="/" onClick={(e) => this.switchForm(e)}>  log in instead</Link>
						</p>
					</div>
				</form>
			</div>
		);
	}
}

export default withRouter(SignupForm);