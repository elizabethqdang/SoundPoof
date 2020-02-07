import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
// import LoginFormContainer from "./session_form/login_form_container";
// import SignupFormContainer from "./session_form/signup_form_container";
import Modal from "./modal/modal";
import ModalContainer from "./modal/modal_container";
import UploadTrackContainer from "./track_form/upload_track_container";
// import UploadTrackFormContainer from "./track_form/upload_track_form_container";


const App = () => (
	<div id="app">
		<Route path="/" component={Splash} />
		{/* <Route path="/" component={UploadTrackFormContainer} /> */}

		<ModalContainer />

		{/* <ProtectedRoute path="/" component={Splash} />
    <AuthRoute path="/" component={Splash} /> */}
		{/* <DefaultRoute path="/" component={Splash} /> */}

		<Switch>
			<ProtectedRoute exact path="/upload" component={UploadTrackContainer} />
      <ModalContainer />
			{/* <ProtectedRoute
				exact
				path="/upload"
				component={UploadTrackFormContainer}
			/> */}
			{/* <Route component={Splash} /> */}
		</Switch>

		{/* <ProtectedRoute path ='/' component={TrackPlayerContainer} /> */}
	</div>
);

export default App;
