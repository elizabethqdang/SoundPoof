import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";
import Modal from "./modal/modal";
import ModalContainer from "./modal/modal_container"

const App = () => (
  <div id="app">
    <ModalContainer />

    <ProtectedRoute path="/" component={Splash} />
    <AuthRoute path="/" component={Splash} />
    {/* <DefaultRoute path="/" component={Splash} /> */}

    {/* <Switch>
      <AuthRoute exact path='/login' component={LoginFormContainer} />
      <AuthRoute exact path='/signup' component={SignupFormContainer} /> */}
    {/* <Route component={Splash} /> */}
    {/* </Switch> */}

    {/* <ProtectedRoute path ='/' component={TrackPlayerContainer} /> */}
  </div>
);

export default App;
