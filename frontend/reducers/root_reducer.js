import { combineReducers } from "redux";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import trackplayerReducer from "./trackplayer_reducer";
import usersReducer from "./users_reducer";
import tracksReducer from "./tracks_reducer";
import commentsReducer from "./comments_reducer";

const rootReducer = combineReducers({
	session: sessionReducer,
	users: usersReducer,
	tracks: tracksReducer,
	comments: commentsReducer,
	trackplayer: trackplayerReducer,
	errors: errorsReducer,
	ui: uiReducer,
});

export default rootReducer;