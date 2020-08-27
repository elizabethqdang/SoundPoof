import React from "react";
import { Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import SplashContainer from "./splash/splash_container";
import ModalContainer from "./modal/modal_container";
import NavbarContainer from "./navbar/navbar_container";
import SearchResults from "./search/search_results";
import UploadPageContainer from "./track/upload_page_container";
import TrackShow from "./track_show/track_show_page_container";
import TrackIndex from "./track_index/track_index_container";
import UserShow from "./user/user_show_container";
import StreamContainer from "./stream/stream_container";
import SessionForm from "./session_form/session_form";
import TrackPlayerContainer from "./track_player/track_player_container";

const App = () => (
		<div id="app">

				<ModalContainer />
				{/* <AuthRoute path="/" component={ModalContainer} /> */}
				<AuthRoute exact path="/" component={SplashContainer} />
				<AuthRoute exact path="/signin" component={SessionForm} />

				<Switch>
					<ProtectedRoute exact path="/stream" component={StreamContainer} />
					<ProtectedRoute exact path="/library" component={TrackIndex} />
					<ProtectedRoute path="/search" component={SearchResults} />
					<ProtectedRoute exact path="/upload" component={UploadPageContainer} />
					<ProtectedRoute exact path="/tracks/:trackId" component={TrackShow} />
					<ProtectedRoute exact path="/users/:userId" component={UserShow} />
					<ProtectedRoute exact path="/users/:userId/likes" component={UserShow} />
					<ProtectedRoute exact path="/users/:userId/reposts" component={UserShow} />
					<ProtectedRoute exact path="/users/:userId/playlists" component={UserShow} />
					<ProtectedRoute exact path="/users/:userId/comments" component={UserShow} />
				</Switch>

				<ProtectedRoute path="/" component={TrackPlayerContainer} />

			</div>
			);

export default App;
