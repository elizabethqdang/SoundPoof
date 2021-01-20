import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
			password: "",
			// errors: []
		};
		this.handleClear = this.handleClear.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
	}
	
	// componentWillMount() {

	// }

	// componentDidUpdate(prevProps) {
	// 	if (this.props.currentUser === true || this.props.loggedIn === true) {
	// 		this.props.history.push("/stream")
	// 		this.props.closeModal();
	// 	}
	// 	this.setState({ errors: this.state.errors.session });
	// }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(
			() => this.props.closeModal()
		);
  }

  renderErrors() {
		console.log("errors", this.props.errors);
		const {errors} = this.props;
		// if (this.props.errors && this.props.errors > 0) {
			return (
				<ul className="session-errors">
					{this.props.errors ? errors.map((error, i) => (<li key={`error-${i}`}>{error}</li>)) : {}
					}
				</ul>
			)
	}
	
	handleClear(e) {
		e.preventDefault();
		this.props.clearSessionErrors();
		this.props.closeModal();
	}

  handleDemoSubmit(e){
    e.preventDefault();
    const user = { email: "Demo-User", password: "password" };
		this.props.demoSubmit(user).then(
			() => this.props.closeModal()
		);
		this.props.clearSessionErrors();
		
			// 	this.props.history.push("/stream"),
			// 	console.log(user));
    // this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  render() {
		let error = ((this.props.errors && this.props.errors.length > 0) ? 'error' : '');
    
    return (
      <div className="loginFormContainer">
        {/* <div className=""> */}
					<div onClick={(e) => this.handleClear(e)} className="close-x">
						X
					</div>

				<button className="session-submit demo" onClick={(e) => this.handleDemoSubmit(e)}>Continue as Demo User</button>
					
          <form onSubmit={(e) => this.handleSubmit(e)} className="loginFormBox">
					
            {/* <h1>Welcome to SoundPoof!</h1>
            <br /><br />

            please {this.props.formType} or {this.props.otherForm} */}

						<br /><br /><p className="session-or">or</p><br />
					

            <div className="loginForm">
              <br />
                <input
                  type="text"
                  placeholder="Your email address or username *"
                  value={this.state.email}
                  onChange={this.update('email')}
									className={`loginInput ${error}`}
                />
                <input
                  type="password"
                  placeholder="Your Password *"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className={`loginInput ${error}`}
                />
								{/* {this.renderErrors()} */}
								<div className="modalError">{this.renderErrors()}</div>

              <input
                className="session-submit"
                type="submit"
                value="Sign in"
              />
              
              <br /><br />
							<p className="session-text">We may use your email and devices for updates and tips on SoundPoofs's products and services, and for activities notifications. You can unsubscribe for free at any time in your notification settings.</p>

            </div>
          </form>
        {/* </div> */}
      </div>
    );
  }
}

export default withRouter(SessionForm);