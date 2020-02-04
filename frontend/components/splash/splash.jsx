import React from 'react';
// import LoginFormContainer from '../session_form/login_form_container';
// import SignupFormContainer from '../session_form/signup_form_container';
import GreetingContainer from '../greeting/greeting_container';
// import TrackFormContainer from '../track/track_form_container';
import { Link, Route, Switch } from 'react-router-dom';

class Splash extends React.Component {
  render() {
    return (
      <div id="splash-page">
        <header id="splash-header">
          <div className="splash-bar">
            <Link to="/">
              <h1>RachetPoof</h1>
            </Link>
            <GreetingContainer />

            {/* <TrackShowContainer /> */}
          </div>
        </header>

        {/* <Switch>
          <Route exact path="/login" component={LoginFormContainer} />
          <Route exact path="/signup" component={SignupFormContainer} />
          <Route component={} />
        </Switch> */}

        {/* <section className="splash-container">
          <img className="splash-img" src='{window.splashURL}' />
          <span className="splash-title splash-title-top">
            RachetPoof
            </span>
          <span className="splash-title splash-title-bottom">
            SoundCloud Clone
            </span>
        </section> */}

        {/* <TrackFormContainer />
        <br /> */}
      </div>
    )
  }
};

export default Splash;