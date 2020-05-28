import React from "react";
import { Link, Switch, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import ModalContainer from "./modal/modal_container";
import NavbarContainer from "./navbar/navbar_container";
// import UploadTrackContainer from "./track_form/upload_track_container";
// import UploadTrackFormContainer from "./track_form/upload_track_form_container";
import UploadPageContainer from "./track/upload_page_container";
import TrackShowPageContainer from "./track_show/track_show_page_container";
import UserShow from "./user/user_show_container";
import UserShowPageContainer from "./user/user_show_page_container";
import TrackIndexContainer from "./track_index/track_index_container";
import StreamContainer from "./stream/stream_container";
import LoginFormContainer from "./session_form/login_form_container";
import SignupFormContainer from "./session_form/signup_form_container";
import TrackPlayerContainer from "./track_player/track_player_container";
// import { fetchAllUsers } from '../actions/user_actions';
// import { fetchAllTracks } from '../actions/track_actions';

const App = () => (
		<div id="app">

				<ModalContainer />

				<AuthRoute exact path="/" component={SplashContainer} />
				<AuthRoute exact path="/signup" component={SignupFormContainer} />
				<AuthRoute exact path="/login" component={LoginFormContainer} />

				<Switch>
					{/* <Route exact path="/discover" component={TrackIndexContainer} /> */}
					<ProtectedRoute exact path="/stream" component={StreamContainer} />
					<ProtectedRoute exact path="/upload" component={UploadPageContainer} />
					<ProtectedRoute exact path="/tracks/:trackId" component={TrackShowPageContainer} />
					<ProtectedRoute exact path="/users/:userId" component={UserShow} />
				</Switch>

				<Route path="/" component={TrackPlayerContainer} />
			</div>
			);

export default App;
