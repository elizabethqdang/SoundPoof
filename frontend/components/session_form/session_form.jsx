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
    this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDemoSubmit = this.handleDemoSubmit.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.currentTarget.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    // this.props.processForm(user);
    this.props.processForm(user)
      .then(
        // this.props.history.push("/discover"),
        this.props.closeModal);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  handleDemoSubmit(e){
    e.preventDefault();
    const user = { email: "Demo-User", password: "password" };
		this.props.demoSubmit(user)
			.then(this.props.closeModal, 
				this.props.history.push("/discover"),
				console.log(user));
    // this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  render() {
    

    return (
      <div className="loginFormContainer">
        <div className="">
          <form onSubmit={this.handleSubmit} className="loginFormBox">

            <h1>Welcome to RachetPoof!</h1>
            <br /><br />

            please {this.props.formType} or {this.props.otherForm}

            <div onClick={this.props.closeModal} className="close-x">
              X
            </div>

            <div className="modalError">{this.renderErrors()}</div>

            <div className="loginForm">
              <br />
                <input
                  type="text"
                  placeholder="Your email address or profile URL *"
                  value={this.state.email}
                  onChange={this.update('email')}
                  className="loginInput"
                />
              <br />
                <input
                  type="password"
                  placeholder="Your Password *"
                  value={this.state.password}
                  onChange={this.update('password')}
                  className="loginInput"
                />
              <br />

              <input
                className="session-submit"
                type="submit"
                value={this.props.formType}
              />
              <br />
              or
              <br /><br />

              <button className="session-submit" onClick={this.handleDemoSubmit}>DEMO USER</button>

            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);