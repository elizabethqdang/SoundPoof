import React from 'react';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import GreetingContainer from '../greeting/greeting_container';
import { Link, Route, Switch } from 'react-router-dom';

const Splash = () => (
  <div>
    <header>
      <div className="header-container">
        <Link to="/">
          <h1>RachetPoof</h1>
        </Link>
        <GreetingContainer />
      </div>
    </header>
    <Switch>
      <Route exact path="/login" component={LoginFormContainer} />
      <Route exact path="/signup" component={SignupFormContainer} />
      {/* <Route component={} /> */}
    </Switch>
  </div>
);

export default Splash;