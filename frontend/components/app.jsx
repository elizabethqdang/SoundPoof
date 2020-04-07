import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import ModalContainer from "./modal/modal_container";
// import UploadTrackContainer from "./track_form/upload_track_container";
// import UploadTrackFormContainer from "./track_form/upload_track_form_container";
import UploadPageContainer from "./track/upload_page_container";
// import TrackShowPageContainer from "./track_show/track_show_page_container";
// import UserShowPageContainer from "./user/user_show_page_container";
import TrackIndexContainer from "./track_index/track_index_container";

const App = () => (
	<div id="app">
		<ModalContainer />
		<Route exact path="/" component={SplashContainer} />
		<Switch>
			<Route exact path="/discover" component={TrackIndexContainer} />
			<ProtectedRoute path="/upload" component={UploadPageContainer} />
			{/* <Route path="/tracks/:trackId" component={ShowTrackContainer} /> */}
			{/* <Route path="/users/:userId" component={UserShowPageContainer} /> */}
		</Switch>

		{/* <ProtectedRoute path ='/' component={TrackPlayerContainer} /> */}
	</div>
);

export default App;
