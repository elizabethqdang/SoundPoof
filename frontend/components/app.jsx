import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import ModalContainer from "./modal/modal_container";
import UploadTrackContainer from "./track_form/upload_track_container";
// import UploadTrackFormContainer from "./track_form/upload_track_form_container";
import UploadPageContainer from "./track/upload_page_container";
import ShowTrackContainer from "./track_show/show_track_container";
import TrackShowPageContainer from "./track_show/track_show_page_container";
import UserShowPageContainer from "./user/user_show_page_container";
import NavbarContainer from "./navbar/navbar_container";
import SessionForm from "./session/session_form";
import LoginForm from "./session/login_form";
import SignupForm from "./session/signup_form";

const App = () => (
	<div id="app">
		<ModalContainer />
		{/* <NavbarContainer /> */}
		{/* <SessionForm /> */}
		{/* <LoginForm /> */}
		{/* <SignupForm /> */}
		<AuthRoute exact path="/" component={SplashContainer} />
		<Switch>
			<ProtectedRoute path="/upload" component={UploadPageContainer} />
			<Route exact path="/upload" component={UploadPageContainer} />
			<Route path="/tracks/:trackId" component={ShowTrackContainer} />
			<Route path="/users/:userId" component={UserShowPageContainer} />
		</Switch>

		{/* <ProtectedRoute path ='/' component={TrackPlayerContainer} /> */}
	</div>
);

export default App;
