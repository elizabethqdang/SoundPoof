import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Splash from "./splash/splash";
import Modal from "./modal/modal";
import ModalContainer from "./modal/modal_container";
import UploadTrackContainer from "./track_form/upload_track_container";
// import UploadTrackFormContainer from "./track_form/upload_track_form_container";
import UploadPageContainer from "./track/upload_page_container";
import ShowTrackContainer from "./track_show/show_track_container";
import TrackShowPageContainer from "./track_show/track_show_page_container";
import UserShowPageContainer from "./user/user_show_page_container";

const App = () => (
	<div id="app">
		<Route path="/" component={Splash} />
		{/* <Route path="/" component={UploadTrackFormContainer} /> */}
		<ModalContainer />
		{/* <Route path="/tracks/:trackId" component={TrackShowPageContainer} /> */}

		{/* <ProtectedRoute path="/" component={Splash} />
    <AuthRoute path="/" component={Splash} /> */}
		{/* <DefaultRoute path="/" component={Splash} /> */}

		<Switch>
			<ProtectedRoute path="/upload" component={UploadPageContainer} />
			<Route exact path="/upload" component={UploadPageContainer} />
			{/* <ModalContainer /> */}
			{/* <ProtectedRoute
				exact
				path="/upload"
				component={UploadTrackFormContainer}
			/> */}
			{/* <Route path="/tracks/:trackId" component={TrackShowPageContainer} /> */}
			<Route path="/tracks/:trackId" component={ShowTrackContainer} />

			{/* <Route path="/tracks/:id" component={Splash} /> */}
			{/* <Route path="/tracks" component={TrackShowPageContainer} /> */}
			{/* <Route path="/tracks/:id" component={TrackShowPageContainer} /> */}
			<Route path="/users/:userId" component={UserShowPageContainer} />
		</Switch>

		{/* <ProtectedRoute path ='/' component={TrackPlayerContainer} /> */}
	</div>
);

export default App;
