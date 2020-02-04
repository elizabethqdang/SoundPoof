import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
// import tracks from './tracks_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer
    // tracks
});

export default entitiesReducer;
