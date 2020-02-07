import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";
import Modal from "./modal/modal";
import ModalContainer from "./modal/modal_container";
import TrackUpload from "./track_form/upload_track";

const App = () => (
  <div id="app">
    <Route path="/" component={Splash} />
    <ModalContainer />

    {/* <ProtectedRoute path="/" component={Splash} />
    <AuthRoute path="/" component={Splash} /> */}
    {/* <DefaultRoute path="/" component={Splash} /> */}

    <Switch>
      <AuthRoute exact path='/upload' component={TrackUpload} />
    {/* <Route component={Splash} /> */}
    </Switch>

    {/* <ProtectedRoute path ='/' component={TrackPlayerContainer} /> */}
  </div>
);

export default App;
