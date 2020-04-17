import { combineReducers } from "redux";
import entitiesReducer from "./entities_reducer";
import sessionReducer from "./session_reducer";
import errorsReducer from "./errors_reducer";
import uiReducer from "./ui_reducer";
import trackPlayerReducer from "./track_player_reducer";
import currentTrack from './current_track_reducer';

const rootReducer = combineReducers({
	entities: entitiesReducer,
	session: sessionReducer,
	errors: errorsReducer,
	ui: uiReducer,
	trackplayer: trackPlayerReducer,
	currentTrack,
});

export default rootReducer;